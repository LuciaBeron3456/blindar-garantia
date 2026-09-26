import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(WA_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-[10px] rounded-full bg-wa px-4 py-[14px] text-white shadow-float transition-colors hover:bg-wa-dark sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon size={22} />
      <span className="text-[14px] font-bold leading-[1.21]">WhatsApp</span>
    </a>
  );
}
