import { contactInfo } from "@/data/contactInfo";

export function ReservationCard() {
  return (
    <div className="grid gap-4">
      <article className="grid gap-5 border border-[#D8A24A]/30 bg-[#1E100A]/72 p-5 sm:gap-6 sm:p-6 md:grid-cols-[auto_1fr] md:items-center lg:grid-cols-[auto_1fr_auto] lg:p-8">
        <div
          className="flex size-11 items-center justify-center border border-[#D8A24A]/60 text-xl text-[#F49A0A] sm:size-12 sm:text-2xl"
          aria-hidden="true"
        >
          ◷
        </div>
        <div>
          <h2 className="display-serif text-lg uppercase tracking-[0.1em] text-[#D8A24A] sm:text-xl sm:tracking-[0.12em]">
            Reserve sua mesa
          </h2>
          <p className="mt-2 text-sm text-[#C8AA82]">Garanta sua experiência.</p>
        </div>
        <a
          href={contactInfo.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 border border-[#D8A24A]/50 bg-[#24130C]/60 px-5 py-4 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#D8A24A] transition hover:border-[#F49A0A] hover:bg-[#F49A0A] hover:text-[#100805] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F49A0A] md:col-span-2 lg:col-span-1 lg:w-auto lg:gap-4 lg:px-7 lg:text-[11px] lg:tracking-[0.22em]"
        >
          Reservar agora <span aria-hidden="true">→</span>
        </a>
      </article>

      <article className="grid gap-5 border border-[#D8A24A]/25 bg-[#1E100A]/72 p-5 sm:p-6 md:grid-cols-[auto_1fr] md:items-center lg:grid-cols-[auto_1fr_auto] lg:p-8">
        <div
          className="flex size-11 items-center justify-center rounded-full border border-[#D8A24A]/45 text-xl text-[#F49A0A] sm:size-12 sm:text-2xl"
          aria-hidden="true"
        >
          ☎
        </div>
        <div>
          <h2 className="display-serif text-lg uppercase tracking-[0.1em] text-[#D8A24A] sm:text-xl sm:tracking-[0.12em]">
            Reservas via WhatsApp
          </h2>
          <p className="mt-2 text-sm text-[#C8AA82]">Fale com nossa equipe</p>
        </div>
        <a
          href={contactInfo.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="display-serif break-words text-2xl text-[#F49A0A] transition hover:text-[#D8A24A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F49A0A] md:col-span-2 lg:col-span-1 lg:text-3xl"
        >
          {contactInfo.whatsappDisplay}
        </a>
      </article>
    </div>
  );
}
