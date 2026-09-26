import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Props = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function CheckItem({ children, tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <li className={`flex items-center gap-3 ${className}`}>
      <span
        className={`flex size-[26px] shrink-0 items-center justify-center rounded-full ${
          dark ? "bg-white/[0.09]" : "bg-gold-soft"
        }`}
      >
        <Icon name={dark ? "check-circle-white" : "check-circle"} size={14} />
      </span>
      <span
        className={`min-w-0 flex-1 text-[15px] leading-[1.4] ${
          dark ? "text-white" : "text-text"
        }`}
      >
        {children}
      </span>
    </li>
  );
}
