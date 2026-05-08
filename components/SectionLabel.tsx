type SectionLabelProps = {
  children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D8A24A] sm:text-[11px] sm:tracking-[0.32em]">
      {children}
    </p>
  );
}
