"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { images } from "@/data/images";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/reservas", label: "Reservas" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8A24A]/25 bg-[#100805]/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-[1440px] flex-col items-center justify-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 md:px-10">
        <Link
          href="/"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F49A0A]"
          aria-label="Asia Club Gastrobar - página inicial"
        >
          <span className="relative block h-10 w-[9.5rem] overflow-hidden sm:h-11 sm:w-[10.5rem]">
            <Image
              src={images.logo}
              alt="Logo Asia Club Gastrobar"
              width={1536}
              height={1024}
              priority
              className="absolute left-1/2 top-1/2 h-28 w-44 -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[7.5rem] sm:w-[11.5rem]"
            />
          </span>
        </Link>

        <nav
          className="grid w-full max-w-[300px] grid-cols-3 items-center gap-0 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-8"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative pb-2 text-center text-[8px] font-semibold uppercase tracking-[0.06em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F49A0A] min-[360px]:text-[9px] min-[390px]:tracking-[0.14em] sm:text-[11px] sm:tracking-[0.24em] ${
                  isActive
                    ? "text-[#F49A0A]"
                    : "text-[#C8AA82] hover:text-[#F49A0A]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[#F49A0A] transition-all ${
                    isActive ? "w-7" : "w-0 group-hover:w-7"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
