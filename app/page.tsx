import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { images } from "@/data/images";

const attributes = [
  "Assinatura oriental",
  "Experiência sensorial",
  "Noites refinadas",
];

export default function Home() {
  return (
    <>
      <section className="border-b border-[#D8A24A]/25">
        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[440px] md:min-h-[620px]">
          <Image
            src={images.facade}
            alt="Fachada do Sensai Gastrobar à noite"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[28%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#100805]/10 via-[#100805]/32 to-[#100805]" />
        </div>

        <div className="-mt-28 px-4 pb-12 text-center sm:-mt-36 sm:px-6 sm:pb-16 md:-mt-40">
          <div className="relative z-10 mx-auto max-w-[760px]">
            <SectionLabel>Assinatura oriental</SectionLabel>
            <h1 className="display-serif mt-4 text-[2rem] leading-[1.05] text-[#F4E7D0] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] min-[360px]:text-[2.35rem] min-[390px]:text-5xl sm:mt-5 md:text-[4.55rem]">
              Experiência
              <br />
              sensorial.
            </h1>
            <p className="script-font mt-1 text-[2.15rem] leading-none text-[#F49A0A] min-[360px]:text-[2.5rem] min-[390px]:text-5xl md:-mt-1 md:text-[4.25rem]">
              Noites refinadas.
            </p>
            <p className="mx-auto mt-6 max-w-[660px] text-[13px] leading-7 text-[#C8AA82] sm:mt-7 sm:text-sm">
              Alta gastronomia asiática autoral, drinks exclusivos e um ambiente
              que transforma cada encontro em uma experiência memorável.
            </p>
            <Button href="/reservas" className="mt-9">
              Reserve sua mesa
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D8A24A]/20">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 divide-y divide-[#D8A24A]/20 px-5 py-5 text-center sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
          {attributes.map((attribute) => (
            <p
              key={attribute}
              className="px-3 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8AA82] sm:px-6 sm:text-[11px] sm:tracking-[0.26em]"
            >
              {attribute}
            </p>
          ))}
        </div>
      </section>

      <section className="relative mx-auto min-h-[420px] max-w-[1440px] overflow-hidden border-b border-[#D8A24A]/20 md:min-h-[430px]">
        <Image
          src={images.interior}
          alt="Ambiente do Sensai Gastrobar"
          fill
          sizes="(min-width: 1440px) 1440px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#100805]/24" />

        <div className="relative z-10 grid min-h-[420px] md:min-h-[430px] md:grid-cols-[0.46fr_0.54fr] lg:grid-cols-[0.38fr_0.62fr]">
          <div className="flex flex-col justify-center border-[#D8A24A]/18 bg-[#1E100A]/50 px-5 py-10 backdrop-blur-md sm:px-7 md:border-r lg:px-12">
            <h2 className="display-serif max-w-xs text-[2rem] uppercase leading-tight tracking-[0.08em] text-[#D8A24A] sm:text-3xl md:text-4xl">
              Ambiente que inspira.
            </h2>
            <p className="mt-6 max-w-sm text-[13px] leading-7 text-[#C8AA82] sm:text-sm">
              Luzes baixas, detalhes que acolhem e uma atmosfera que convida a
              ficar.
            </p>
            <Button href="/reservas" variant="secondary" className="mt-8">
              Conheça nosso ambiente
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] border-b border-[#D8A24A]/20 md:grid-cols-2">
        <HomeFeatureCard
          image={images.drinkHome}
          alt="Drink autoral do Sensai Gastrobar"
          title="Drinks autorais"
          text="Criações exclusivas que despertam os sentidos."
          href="/cardapio"
          linkText="Ver drinks"
        />
        <HomeFeatureCard
          image={images.menuHome}
          alt="Prato autoral do Sensai Gastrobar"
          title="Sabores que marcam"
          text="Ingredientes selecionados e técnica em cada detalhe."
          href="/cardapio"
          linkText="Ver cardápio"
        />
      </section>
    </>
  );
}

type HomeFeatureCardProps = {
  image: string;
  alt: string;
  title: string;
  text: string;
  href: string;
  linkText: string;
};

function HomeFeatureCard({
  image,
  alt,
  title,
  text,
  href,
  linkText,
}: HomeFeatureCardProps) {
  return (
    <article className="group border-[#D8A24A]/20 bg-[#1E100A] md:border-r">
      <div className="relative min-h-[340px] overflow-hidden sm:min-h-[380px] md:min-h-[420px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.025]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#100805]/5 via-[#100805]/24 to-[#100805]/86" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-10">
          <h2 className="display-serif text-[1.6rem] uppercase leading-tight tracking-[0.06em] text-[#F4E7D0] sm:text-2xl sm:tracking-[0.08em]">
            {title}
          </h2>
          <p className="mt-4 max-w-sm text-[13px] leading-7 text-[#C8AA82] sm:text-sm">
            {text}
          </p>
          <Button href={href} variant="secondary" className="mt-6">
            {linkText}
          </Button>
        </div>
      </div>
    </article>
  );
}
