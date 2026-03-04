"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/MobileMenu";
import Image from "next/image";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Catalogo" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "relative w-full transition-all",
          scrolled ? "backdrop-blur-xl" : "backdrop-blur-0",
        ].join(" ")}
      >
        <div
          className={[
            "relative overflow-hidden",
            "bg-[linear-gradient(90deg,#26C2E0_0%,#0EA5E9_45%,#253A4C_100%)]",
            scrolled
              ? "shadow-[0_10px_35px_rgba(0,0,0,0.25)]"
              : "shadow-none",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.22),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.25),transparent_38%)]" />

          <nav
            className={[
              "relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
              "flex items-center justify-between transition-all",
              // ✅ más compacto en móvil
              scrolled ? "h-20 sm:h-24" : "h-24 sm:h-28",
            ].join(" ")}
          >
            <Link href="#inicio" className="group flex items-center gap-3 relative">
              <div
                className={[
                  "relative shrink-0",
                  // ✅ logo responsive (más pequeño en móvil)
                  "h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24",
                  "rounded-2xl bg-white/12 backdrop-blur-md",
                  "ring-1 ring-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.22)]",
                  "overflow-hidden",
                  "translate-y-[4px] sm:translate-y-[2px]",
                  "transition-transform duration-200 group-hover:scale-[1.05]",
                ].join(" ")}
              >
                <Image
                  src="/img/Plusdent.png"
                  alt="PlusDent Logo"
                  fill
                  className="object-cover scale-[1.4] drop-shadow-[0_8px_20px_rgba(38,194,224,0.35)]"
                  priority
                />
              </div>

              <span className="flex flex-col leading-none">
                <span className="text-[14px] sm:text-base font-semibold tracking-tight text-[#F7FAFC]">
                  Plusdent
                </span>
                <span className="text-[10px] sm:text-xs text-white/80">
                  Clínica & Sonrisas
                </span>
              </span>
            </Link>

            <ul className="hidden md:flex items-center gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={[
                      "relative px-3 py-2 rounded-xl",
                      "text-[15px] font-semibold text-white/90",
                      "transition-all duration-200",
                      "hover:text-white",
                      "hover:bg-white/10",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#26C2E0]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                      "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-200",
                      "after:bg-[linear-gradient(90deg,#26C2E0,#0EA5E9,#547B9A)]",
                      "hover:after:scale-x-100",
                    ].join(" ")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              aria-label="Abrir menú"
              className={[
                "md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold",
                "bg-white/10 text-white",
                "ring-1 ring-white/25",
                "hover:bg-white/15",
                "transition",
                "shadow-[0_10px_25px_rgba(0,0,0,0.18)]",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#26C2E0]/70",
              ].join(" ")}
              onClick={() => setOpen(true)}
            >
              Menú
            </button>
          </nav>

          <div className="pointer-events-none absolute left-0 right-0 bottom-0 z-0 overflow-hidden text-white">
            <svg
              className="block w-[calc(100%+2px)] h-24 sm:h-28 translate-y-[1px]"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="hdr2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#26C2E0" />
                  <stop offset="55%" stopColor="#0EA5E9" />
                  <stop offset="100%" stopColor="#253A4C" />
                </linearGradient>
                <linearGradient id="accent2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#26C2E0" />
                  <stop offset="100%" stopColor="#547B9A" />
                </linearGradient>
              </defs>

              <path
                d="M0,20 C200,60 350,10 600,30 C850,50 1000,30 1200,20 L1200,120 L0,120 Z"
                fill="url(#hdr2)"
                opacity="0.78"
              />
              <path
                d="M0,44 C220,14 380,72 600,56 C820,40 980,64 1200,46 L1200,120 L0,120 Z"
                fill="url(#accent2)"
                opacity="0.45"
              />
              <path
                d="M0,64 C240,92 420,72 600,82 C780,92 960,78 1200,92 L1200,120 L0,120 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </header>
  );
}