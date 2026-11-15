#!/usr/bin/env python3
"""
generate_graph.py - Generador del Grafo del Segundo Cerebro de DSI
Escanea los nodos Markdown en docs/cerebro/nodos/, extrae el frontmatter YAML y los enlaces,
calcula métricas de conectividad y componentes conexos, valida enlaces y genera diagramas Mermaid.
"""

import os
import re
from collections import Counter


def parse_simple_yaml(yaml_text):
    data = {}
    current_key = None

    for line in yaml_text.splitlines():
        line_clean = line.strip()
        if not line_clean or line_clean.startswith("#"):
            continue

        if line_clean.startswith("- "):
            val = line_clean[2:].strip().strip('"').strip("'")
            if current_key:
                if not isinstance(data.get(current_key), list):
                    data[current_key] = []
                data[current_key].append(val)
            continue

        if ":" in line_clean:
            parts = line_clean.split(":", 1)
            key = parts[0].strip()
            val = parts[1].strip()
            current_key = key

            if not val:
                data[key] = []
            elif val.startswith("[") and val.endswith("]"):
                items = [x.strip().strip('"').strip("'") for x in val[1:-1].split(",") if x.strip()]
                data[key] = items
            else:
                clean_val = val.strip('"').strip("'")
                if clean_val.lower() == "true":
                    clean_val = True
                elif clean_val.lower() == "false":
                    clean_val = False
                elif clean_val.isdigit():
                    clean_val = int(clean_val)
                data[key] = clean_val

    return data


def parse_markdown_node(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", content, re.DOTALL)
    if not match:
        return None, content

    yaml_block = match.group(1)
    body = match.group(2)
    try:
        data = parse_simple_yaml(yaml_block)
        return data, body
    except Exception as e:
        print(f"Error parseando {filepath}: {e}")
        return None, body


def build_graph(nodes_dir):
    nodes = {}
    edges = []

    if not os.path.exists(nodes_dir):
        return nodes, edges

    for fname in sorted(os.listdir(nodes_dir)):
        if not fname.endswith(".md"):
            continue
        fpath = os.path.join(nodes_dir, fname)
        meta, body = parse_markdown_node(fpath)
        if not meta or "id" not in meta:
            continue

        node_id = str(meta["id"])
        nodes[node_id] = {
            "meta": meta,
            "file": fname,
            "path": fpath,
            "body": body,
        }

    for node_id, data in nodes.items():
        meta = data["meta"]
        for target in meta.get("depende_de", []) or []:
            edges.append({
                "source": node_id,
                "target": str(target),
                "type": "depende_de",
                "label": "depende de",
            })
        for target in meta.get("conectado_con", []) or []:
            edges.append({
                "source": node_id,
                "target": str(target),
                "type": "conectado_con",
                "label": "conecta con",
            })

    return nodes, edges


def compute_metrics(nodes, edges):
    n = len(nodes)
    broken = [e for e in edges if e["target"] not in nodes]
    valid_edges = [e for e in edges if e["target"] in nodes]

    degree = Counter()
    for e in valid_edges:
        degree[e["source"]] += 1
        degree[e["target"]] += 1

    # Connected components (undirected)
    adj = {nid: set() for nid in nodes}
    for e in valid_edges:
        adj[e["source"]].add(e["target"])
        adj[e["target"]].add(e["source"])

    visited = set()
    components = 0
    for nid in nodes:
        if nid not in visited:
            components += 1
            stack = [nid]
            while stack:
                curr = stack.pop()
                if curr not in visited:
                    visited.add(curr)
                    stack.extend(adj[curr] - visited)

    max_possible = n * (n - 1) if n > 1 else 1
    density = len(valid_edges) / max_possible

    return {
        "nodes_count": n,
        "edges_count": len(valid_edges),
        "broken_edges": broken,
        "components": components,
        "density": density,
        "top_hubs": degree.most_common(5),
    }


def generate_mermaid_diagram(nodes, edges, unit_filter=None, direction="TD"):
    lines = [f"flowchart {direction}"]
    lines.append("    classDef teoria fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0369a1;")
    lines.append("    classDef patron fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e;")
    lines.append("    classDef dominio fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#15803d;")
    lines.append("    classDef cu fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#5b21b6;")
    lines.append("    classDef arq fill:#ffe4e6,stroke:#e11d48,stroke-width:2px,color:#9f1239;")
    lines.append("    classDef conv fill:#f1f5f9,stroke:#475569,stroke-width:2px,color:#1e293b;")
    lines.append("    classDef external fill:#f8fafc,stroke:#94a3b8,stroke-dasharray: 4 4,color:#64748b;")

    filtered_nodes = {}
    for nid, ndata in nodes.items():
        meta = ndata["meta"]
        if unit_filter is None or meta.get("unidad") == unit_filter or meta.get("categoria") == unit_filter:
            filtered_nodes[nid] = ndata

    for nid, ndata in sorted(filtered_nodes.items()):
        meta = ndata["meta"]
        title = str(meta.get("titulo", nid)).replace('"', "'")
        tipo = str(meta.get("tipo", "teoria"))

        css_class = "teoria"
        if tipo in ("patron", "patron-gof", "patron-grasp"):
            css_class = "patron"
        elif tipo in ("dominio", "entidad"):
            css_class = "dominio"
        elif tipo in ("caso-de-uso", "cu"):
            css_class = "cu"
        elif tipo in ("arquitectura",):
            css_class = "arq"
        elif tipo in ("convencion", "referencia"):
            css_class = "conv"

        clean_id = nid.replace("-", "_")
        lines.append(f'    node_{clean_id}["{nid}<br/>{title}<br/><i>[{tipo}]</i>"]:::{css_class}')

    drawn_edges = set()
    emitted_external = set()
    for edge in edges:
        s, t = edge["source"], edge["target"]
        if s not in filtered_nodes:
            continue
        edge_key = f"{s}->{t}:{edge['type']}"
        if edge_key in drawn_edges:
            continue
        drawn_edges.add(edge_key)

        clean_s = s.replace("-", "_")
        clean_t = t.replace("-", "_")
        label = edge["label"]

        if t in filtered_nodes:
            arrow = "-->" if edge["type"] == "depende_de" else "-.->"
            lines.append(f'    node_{clean_s} {arrow}|"{label}"| node_{clean_t}')
        elif unit_filter is not None and t in nodes:
            if clean_t not in emitted_external:
                lines.append(f'    ext_{clean_t}["{t}"]:::external')
                emitted_external.add(clean_t)
            lines.append(f'    node_{clean_s} -.->|"{label}"| ext_{clean_t}')

    return "\n".join(lines)


def export_readme(nodes, edges, metrics, output_path):
    mermaid_ppai = generate_mermaid_diagram(nodes, edges, unit_filter="PPAI", direction="LR")
    mermaid_u1 = generate_mermaid_diagram(nodes, edges, unit_filter="Unidad 1", direction="LR")
    mermaid_u2 = generate_mermaid_diagram(nodes, edges, unit_filter="Unidad 2", direction="LR")
    mermaid_u3 = generate_mermaid_diagram(nodes, edges, unit_filter="Unidad 3", direction="LR")
    mermaid_all = generate_mermaid_diagram(nodes, edges, unit_filter=None, direction="TD")

    hubs_str = ", ".join([f"`{nid}` ({deg})" for nid, deg in metrics["top_hubs"]])

    md = [
        "# Segundo Cerebro - Diseño de Sistemas de Información (DSI)",
        "",
        "Repositorio de conocimiento estructurado de **Diseño de Sistemas de Información (UTN - FRC)** y del **Proyecto Práctico de Aplicación Integrador (PPAI) - Sistema de Bolsines (CU 36 + CU 30/31)**.",
        "",
        "## Métricas del Grafo de Conocimiento",
        f"- **Nodos Indexados:** {metrics['nodes_count']}",
        f"- **Aristas Válidas:** {metrics['edges_count']}",
        f"- **Componentes Conexos:** {metrics['components']}",
        f"- **Densidad del Grafo:** {metrics['density']:.4f}",
        f"- **Nodos Centrales (Hubs):** {hubs_str}",
        f"- **Enlaces Rotos:** {len(metrics['broken_edges'])}",
        "",
        "## Repositorios de Fuentes Extraídas",
        "- [Fuentes de NotebookLM (Cuaderno DSI)](fuentes_notebooklm/README.md)",
        "- [Fuentes Locales de OneDrive (UTN-FRC)](fuentes_onedrive/README.md)",
        "",
        "## Grafo del PPAI Bolsines (Dominio + CU 36 + Patrones + Arquitectura)",
        "```mermaid",
        mermaid_ppai,
        "```",
        "",
        "## Grafo Teórico por Unidades",
        "### Unidad 1: Análisis OO y Comportamiento",
        "```mermaid",
        mermaid_u1,
        "```",
        "",
        "### Unidad 2: Diseño OO, SOLID, Patrones GoF y Persistencia",
        "```mermaid",
        mermaid_u2,
        "```",
        "",
        "### Unidad 3: Arquitectura de Software, Estilos e ISO 25000",
        "```mermaid",
        mermaid_u3,
        "```",
        "",
        "## Grafo Global Completo",
        "```mermaid",
        mermaid_all,
        "```",
        "",
        "## Índice Completo de Nodos del Cerebro",
        "| ID | Título | Tipo | Unidad / Categoría | Conectado con |",
        "|---|---|---|---|---|",
    ]

    for nid in sorted(nodes.keys()):
        m = nodes[nid]["meta"]
        fname = nodes[nid]["file"]
        conex = ", ".join(m.get("conectado_con", []) or [])
        unidad = m.get("unidad", m.get("categoria", ""))
        md.append(f"| [{nid}](nodos/{fname}) | {m.get('titulo')} | `{m.get('tipo')}` | {unidad} | {conex} |")

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(md) + "\n")


if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    nodes_dir = os.path.join(base_dir, "docs", "cerebro", "nodos")
    nodes, edges = build_graph(nodes_dir)
    metrics = compute_metrics(nodes, edges)
    print(f"Indexados {metrics['nodes_count']} nodos y {metrics['edges_count']} aristas válidas (Componentes conexos: {metrics['components']}).")
    if metrics["broken_edges"]:
        print("ADVERTENCIA - Enlaces rotos detectados:")
        for b in metrics["broken_edges"]:
            print(f"  {b['source']} -> {b['target']} ({b['type']})")
    readme_path = os.path.join(base_dir, "docs", "cerebro", "README.md")
    export_readme(nodes, edges, metrics, readme_path)
    print(f"README actualizado en: {readme_path}")
