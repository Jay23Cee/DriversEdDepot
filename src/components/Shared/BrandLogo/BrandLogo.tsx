import Image from "next/image";

type BrandLogoProps = {
  inverse?: boolean;
  priority?: boolean;
};

export default function BrandLogo({ inverse = false, priority = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Driver's Ed Depot">
      <span
        className={`relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full sm:h-14 sm:w-14 ${
          inverse ? "bg-white-main" : "bg-brand-surface"
        }`}
      >
        <Image
          src="/assets/logo.png"
          alt=""
          fill
          sizes="(min-width: 480px) 56px, 48px"
          className="object-contain p-0.5"
          priority={priority}
        />
      </span>

      <span className="flex flex-col text-left leading-none">
        <span
          className={`whitespace-nowrap font-poppins text-[18px] font-bold tracking-[-0.035em] sm:text-[21px] ${
            inverse ? "text-white-main" : "text-brand-navy"
          }`}
        >
          Driver&apos;s Ed
        </span>
        <span
          className={`mt-1 text-[10px] font-extrabold uppercase tracking-[0.3em] sm:text-[11px] ${
            inverse ? "text-brand-cyan" : "text-brand-primary"
          }`}
        >
          Depot
        </span>
      </span>
    </span>
  );
}
