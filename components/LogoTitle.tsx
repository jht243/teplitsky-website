import Image from "next/image";
import type { ReactNode } from "react";

type LogoTitleProps = {
  logoAlt: string;
  logoFit?: "contain" | "cover";
  logoSrc: string;
  meta?: ReactNode;
  title: ReactNode;
};

export default function LogoTitle({
  logoAlt,
  logoFit = "contain",
  logoSrc,
  meta,
  title,
}: LogoTitleProps) {
  return (
    <div className="flex min-w-0 items-start gap-3 md:gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border border-dark/10 bg-white">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={96}
          height={96}
          unoptimized
          className={`h-full w-full ${
            logoFit === "cover" ? "object-cover" : "object-contain p-2"
          }`}
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-dark leading-tight">
          {title}
        </h3>
        {meta && <div className="text-sm text-dark/40 mt-1">{meta}</div>}
      </div>
    </div>
  );
}
