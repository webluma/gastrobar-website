"use client";

import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/data/contactInfo";
import { images } from "@/data/images";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D8A24A]/25 bg-[#100805]">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-[#D8A24A]/12 pb-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <Link href="/" aria-label="Asia Club Gastrobar - página inicial">
            <Image
              src={images.logo}
              alt="Logo Asia Club Gastrobar"
              width={1536}
              height={1024}
              className="mx-auto h-24 w-auto object-contain md:mx-0 md:h-28"
            />
          </Link>

          <p className="display-serif mx-auto max-w-sm text-[1.7rem] leading-snug text-[#F4E7D0] md:mx-0 md:text-2xl">
            Assinatura oriental.
            <br />
            Experiência sensorial.
            <br />
            Noites refinadas.
          </p>
        </div>

        <div className="flex flex-col-reverse gap-6 pt-7 text-center text-[10px] uppercase leading-6 tracking-[0.14em] text-[#8D7052] sm:text-[11px] sm:tracking-[0.18em] md:flex-row md:items-center md:justify-between md:text-left">
          <p suppressHydrationWarning>
            © {currentYear} Asia Club Gastrobar. Todos os direitos
            reservados. Criado e desenvolvido por{" "}
            <a
              href="https://webluma.tech/"
              target="_blank"
              rel="noreferrer"
              className="text-[#D8A24A] transition hover:text-[#F49A0A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F49A0A]"
            >
              WEBLUMA
            </a>
            .
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:justify-start" aria-label="Links do rodapé">
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={contactInfo.mapsUrl} target="_blank" rel="noreferrer">
              Google Maps
            </a>
            <Link href="/reservas">Reservas</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
