import type { MouseEventHandler, ReactNode } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Variant = "dark" | "whatsapp";

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  /** Muestra el logo de WhatsApp a la izquierda del texto */
  withWhatsAppIcon?: boolean;
};

type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};
type ButtonProps = BaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-busy"?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const base =
  "inline-flex h-[52px] items-center justify-center gap-[10px] rounded-full border px-5 text-[15px] font-bold leading-[1.21] text-white whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  dark: "bg-ink border-ink hover:bg-ink-2 hover:border-ink-2",
  whatsapp: "bg-wa border-wa hover:bg-wa-dark hover:border-wa-dark",
};

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "dark", className = "", children, withWhatsAppIcon } = props;
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {withWhatsAppIcon && <WhatsAppIcon size={18} className="shrink-0" />}
      <span>{children}</span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, onClick } = props;
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  const { type = "button", onClick, disabled, "aria-busy": ariaBusy } = props as ButtonProps;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-busy={ariaBusy}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-70`}
    >
      {content}
    </button>
  );
}
