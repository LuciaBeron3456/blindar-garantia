"use client";

import { useState } from "react";

import type { FaqItem } from "@/lib/faqs";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[72px] w-full items-center gap-4 py-[18px] text-left"
              >
                <span className="min-w-0 flex-1 text-[16px] leading-[1.21] text-text">{item.q}</span>
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[22px] leading-none text-deep transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 pr-12"
            >
              <p className="text-[15px] leading-[1.55] text-muted">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
