import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SplitFlap } from "@/components/ui/display/SplitFlap";
import { cn } from "@/lib/cn";

export interface BoardRowProps {
  href: string;
  index: number;
  title: string;
  detail: string;
  className?: string;
}

export function BoardRow({
  href,
  index,
  title,
  detail,
  className,
}: BoardRowProps) {
  const num = String(index).padStart(2, "0");

  return (
    <Link
      href={href}
      data-reveal=""
      className={cn(
        "group w-full grid grid-cols-[54px_1fr_auto] items-center gap-3.5 px-2.5 py-[15px] border-b border-hair text-left",
        "transition-colors duration-120 hover:bg-hover",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <SplitFlap text={num} size="xs" />
      <span className="min-w-0">
        <strong className="block font-display text-[22px] font-bold tracking-[-0.035em] leading-[1.1] text-fg">
          {title}
        </strong>
        {detail ? (
          <span className="block text-[13px] text-muted mt-0.5">{detail}</span>
        ) : null}
      </span>
      <span
        aria-hidden="true"
        className="size-[38px] rounded-[12px] bg-lime border border-lime-edge text-on-lime grid place-items-center transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[3px] group-active:translate-x-[4px]"
      >
        <ArrowRight className="size-[18px]" strokeWidth={2.2} />
      </span>
    </Link>
  );
}
