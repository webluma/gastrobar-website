import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { MenuCategoryCard } from "@/components/MenuCategoryCard";
import { SectionLabel } from "@/components/SectionLabel";
import { images } from "@/data/images";
import { menuCategories } from "@/data/menuCategories";

export const metadata: Metadata = {
  title: "Cardápio",
  description:
    "Conheça as categorias do cardápio do Sensai Gastrobar: sushi, pratos quentes, drinks e sobremesas.",
};

export default function CardapioPage() {
  return (
    <>
      <section className="border-b border-[#D8A24A]/25 bg-[#100805] px-5 py-16 text-center sm:px-6 sm:py-20 md:py-24">
        <SectionLabel>Cardápio</SectionLabel>
        <h1 className="display-serif mt-5 text-[2.1rem] leading-tight text-[#F4E7D0] min-[390px]:text-[2.35rem] sm:text-4xl md:text-6xl">
          Sabores que contam histórias.
        </h1>
        <p className="script-font mt-3 text-[2.45rem] leading-none text-[#F49A0A] min-[390px]:text-[2.85rem] sm:text-5xl md:text-6xl">
          Detalhes que encantam.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] border-x border-[#D8A24A]/18">
        {menuCategories.map((category, index) => (
          <MenuCategoryCard
            key={category.title}
            {...category}
            reversed={index % 2 === 1}
          />
        ))}
      </section>

      <section className="relative overflow-hidden border-t border-[#D8A24A]/25">
        <Image
          src={images.reservation}
          alt="Ambiente elegante para reserva no Sensai Gastrobar"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#100805]/75" />

        <div className="relative z-10 mx-auto flex min-h-[280px] max-w-[1440px] flex-col items-center justify-center px-5 text-center sm:px-6 md:min-h-[300px]">
          <p className="script-font text-[2.45rem] leading-none text-[#F4E7D0] min-[390px]:text-[2.85rem] sm:text-5xl md:text-6xl">
            Viva a experiência completa.
          </p>
          <Button href="/reservas" className="mt-8">
            Reserve sua mesa
          </Button>
        </div>
      </section>
    </>
  );
}
