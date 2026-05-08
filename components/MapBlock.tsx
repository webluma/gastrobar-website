import { contactInfo } from "@/data/contactInfo";

export function MapBlock() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 pb-12 sm:px-6 sm:pb-16 lg:px-10">
      <div className="overflow-hidden border border-[#D8A24A]/30 bg-[#100805]">
        <iframe
          title="Mapa do Asia Club Gastrobar em Pato Branco, Paraná"
          src={contactInfo.mapsEmbedUrl}
          className="h-[280px] w-full grayscale contrast-125 brightness-75 sm:h-[320px] md:h-[360px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={contactInfo.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex text-[10px] font-bold uppercase tracking-[0.16em] text-[#D8A24A] transition hover:text-[#F49A0A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F49A0A] sm:text-[11px] sm:tracking-[0.22em]"
      >
        Ver no mapa →
      </a>
    </section>
  );
}
