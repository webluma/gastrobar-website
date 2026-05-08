type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <article className="border border-[#D8A24A]/25 bg-[#1E100A]/62 p-5 sm:p-6">
      <h2 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#D8A24A] sm:text-[11px] sm:tracking-[0.22em]">
        {title}
      </h2>
      <div className="mt-5 text-[13px] leading-7 text-[#C8AA82] sm:text-sm">
        {children}
      </div>
    </article>
  );
}
