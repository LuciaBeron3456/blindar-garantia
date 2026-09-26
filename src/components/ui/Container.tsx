import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Sin padding vertical (p. ej. header) */
  bare?: boolean;
};

/** Ancho máximo 1440 con padding lateral 96px en desktop (como en Figma). */
export function Container({ children, className = "", bare }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-16 xl:px-24 ${
        bare ? "" : "py-16 lg:py-24"
      } ${className}`}
    >
      {children}
    </div>
  );
}
