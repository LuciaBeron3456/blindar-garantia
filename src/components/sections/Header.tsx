"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white">
      <Container bare className="flex h-20 items-center justify-between sm:h-24">
        <Logo />

        <nav className="hidden items-center gap-[30px] lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-semibold leading-[1.21] text-text transition-colors hover:text-green"
            >
              {item.label}
            </a>
          ))}
          <Button href="#solicitud">Pedí tu garantía</Button>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <div className="hidden sm:block">
            <Button href="#solicitud" className="h-11 px-4 text-[14px]">
              Pedí tu garantía
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex size-11 items-center justify-center rounded-full border border-line text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <Container bare className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[16px] font-semibold text-text hover:bg-surface"
            >
              {item.label}
            </a>
          ))}
          <Button href="#solicitud" className="mt-3 w-full sm:hidden" onClick={() => setOpen(false)}>
            Pedí tu garantía
          </Button>
        </Container>
      </div>
    </header>
  );
}
