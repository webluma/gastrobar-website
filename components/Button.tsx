import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes =
    variant === "secondary"
      ? "inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D8A24A] transition hover:text-[#F49A0A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F49A0A] sm:text-[11px] sm:tracking-[0.22em]"
      : "inline-flex w-full items-center justify-center gap-2 border border-[#D8A24A]/50 bg-[#24130C]/60 px-4 py-4 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-[#D8A24A] transition hover:border-[#F49A0A] hover:bg-[#F49A0A] hover:text-[#100805] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F49A0A] min-[390px]:w-auto sm:gap-4 sm:px-7 sm:text-[11px] sm:tracking-[0.22em]";

  return (
    <Link href={href} className={`${classes} ${className}`} {...props}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
