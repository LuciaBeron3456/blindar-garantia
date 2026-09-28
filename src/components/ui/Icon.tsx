import Image from "next/image";

export type IconName =
  | "bolt"
  | "check-circle"
  | "check-circle-white"
  | "clock"
  | "clock-white"
  | "dot"
  | "dot-green"
  | "file-check"
  | "headset"
  | "key"
  | "mail"
  | "message-circle"
  | "phone"
  | "shield-check"
  | "shield-check-gold"
  | "user-check"
  | "user-check-2";

type Props = {
  name: IconName;
  size: number;
  className?: string;
};

/** Íconos estáticos exportados desde Figma (public/icons). */
export function Icon({ name, size, className }: Props) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      width={size}
      height={size}
      alt=""
      aria-hidden
      loading="eager"
      className={className}
    />
  );
}
