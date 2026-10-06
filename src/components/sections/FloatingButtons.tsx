import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WA_DEFAULT_MESSAGE, site, waLink } from "@/lib/site";

/** Botones flotantes circulares: Instagram arriba, WhatsApp abajo. */
export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-7 sm:right-7">
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Seguinos en Instagram ${site.instagramHandle}`}
        className="flex size-14 items-center justify-center rounded-full bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-white shadow-float transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      </a>

      <a
        href={waLink(WA_DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="flex size-[72px] items-center justify-center rounded-full bg-wa text-white shadow-float transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        <WhatsAppIcon size={40} />
      </a>
    </div>
  );
}
