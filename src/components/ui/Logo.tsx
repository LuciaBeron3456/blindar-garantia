import Image from "next/image";

type Props = { tone?: "light" | "dark" };

/**
 * Logo oficial de Blindar (candado + wordmark "BLINDAR · FIANZA DE LOCACIONES").
 * `light` es la versión para fondos claros; `dark` para fondos oscuros.
 * Las piezas están recortadas del logo original con fondo transparente en public/images.
 */
export function Logo({ tone = "light" }: Props) {
  const dark = tone === "dark";
  const v = dark ? "dark" : "light";
  return (
    <a href="#" className="flex items-center gap-[10px]" aria-label="Blindar, fianza de locaciones. Ir al inicio">
      <Image
        src={`/images/logo-icon-${v}.png`}
        alt=""
        width={514}
        height={717}
        priority={!dark}
        loading="eager"
        className="h-12 w-auto sm:h-16"
      />
      <Image
        src={`/images/logo-wordmark-${v}.png`}
        alt="Blindar, fianza de locaciones"
        width={1141}
        height={282}
        priority={!dark}
        loading="eager"
        className="h-[38px] w-auto sm:h-[52px]"
      />
    </a>
  );
}
