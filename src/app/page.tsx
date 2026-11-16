import Link from "next/link";
export default function HomePage() {
  return (
    <main>
      <h1>TPAI Bolsines</h1>
      <Link href="/seguimiento">Consultar seguimiento de bolsines</Link>
    </main>
  );
}
