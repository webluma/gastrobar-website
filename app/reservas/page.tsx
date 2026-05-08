import type { Metadata } from "next";
import { InfoCard } from "@/components/InfoCard";
import { MapBlock } from "@/components/MapBlock";
import { ReservationCard } from "@/components/ReservationCard";
import { SectionLabel } from "@/components/SectionLabel";
import { contactInfo } from "@/data/contactInfo";
import { socialLinks } from "@/data/socialLinks";

export const metadata: Metadata = {
  title: "Reservas",
  description:
    "Reserve sua mesa no Asia Club Gastrobar e viva uma experiência sensorial com assinatura oriental em Pato Branco.",
};

export default function ReservasPage() {
  return (
    <>
      <section className="border-b border-[#D8A24A]/25 bg-[#100805] px-5 py-16 text-center sm:px-6 sm:py-20 md:py-24">
        <SectionLabel>Contato & Reservas</SectionLabel>
        <h1 className="display-serif mt-5 text-[2.1rem] leading-tight text-[#F4E7D0] min-[390px]:text-[2.35rem] sm:text-4xl md:text-6xl">
          Sua mesa espera por você.
        </h1>
        <p className="script-font mt-3 text-[2.35rem] leading-none text-[#F49A0A] min-[390px]:text-[2.65rem] sm:text-5xl md:text-6xl">
          Reserve e viva momentos únicos.
        </p>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-6 sm:py-12 lg:px-10">
        <ReservationCard />
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-4 px-5 pb-10 sm:px-6 sm:pb-12 md:grid-cols-2 lg:px-10">
        <InfoCard title="Endereço">
          <address className="not-italic">
            {contactInfo.address.street}
            <br />
            {contactInfo.address.neighborhood}, {contactInfo.address.city} —{" "}
            {contactInfo.address.state}
            <br />
            {contactInfo.address.zipCode}
          </address>
        </InfoCard>
        <InfoCard title="Horário de funcionamento">
          <p>Consulte os horários atualizados nos canais oficiais.</p>
        </InfoCard>
        <InfoCard title="Experiência">
          <p>
            Assinatura oriental
            <br />
            Experiência sensorial
            <br />
            Alta gastronomia e noites refinadas
          </p>
        </InfoCard>
        <InfoCard title="Siga-nos">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#F49A0A] transition hover:text-[#D8A24A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F49A0A]"
          >
            {contactInfo.instagramHandle}
          </a>
          <p className="mt-3">Acompanhe novidades, eventos e noites especiais.</p>
        </InfoCard>
      </section>

      <MapBlock />
    </>
  );
}
