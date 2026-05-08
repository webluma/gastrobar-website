import Image from "next/image";
import { Button } from "@/components/Button";

type MenuCategoryCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  reversed?: boolean;
};

export function MenuCategoryCard({
  title,
  description,
  image,
  alt,
  href,
  reversed = false,
}: MenuCategoryCardProps) {
  return (
    <article className="grid border-b border-[#D8A24A]/20 md:grid-cols-2">
      <div className={reversed ? "md:order-2" : ""}>
        <Image
          src={image}
          alt={alt}
          width={1448}
          height={1086}
          className="h-full min-h-[240px] w-full object-cover transition duration-500 hover:scale-[1.015] sm:min-h-[280px] md:min-h-[340px]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-center bg-[#1E100A] p-6 sm:p-8 lg:p-12">
        <h2 className="display-serif text-[1.7rem] uppercase tracking-wide text-[#D8A24A] sm:text-3xl">
          {title}
        </h2>
        <p className="mt-5 max-w-sm text-[13px] leading-7 text-[#C8AA82] sm:text-sm">
          {description}
        </p>
        <Button href={href} variant="secondary" className="mt-8">
          Ver opções
        </Button>
      </div>
    </article>
  );
}
