"use client";

import Image from "next/image";

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Panel lateral */}
      <aside
        className={`absolute right-0 top-0 h-full w-72
        rounded-l-3xl
        bg-white
        bg-[linear-gradient(150deg,rgba(82,191,235,1)_38%,rgba(87,199,133,0)_75%,rgba(237,221,83,0)_100%)]
        shadow-xl p-6 pt-6 pb-8 flex flex-col gap-4 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
        role="dialog"
        aria-modal="true"
      >

        {/* HEADER */}
        <div className="flex flex-col gap-4 border-b pb-4">

          {/* Logo centrado */}
<div className="flex justify-center">
  <div
    className={[
      "relative shrink-0",
      "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28",
      "rounded-2xl bg-white/12 backdrop-blur-md",
      "ring-1 ring-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.22)]",
      "overflow-hidden",
      "transition-transform duration-200",
      "animate-float",
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
</div>

          {/* Navegación + cerrar */}
          <div className="flex items-center justify-between w-full">
            <span className="font-semibold text-white">
              Navegación
            </span>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white text-black hover:bg-gray-100 transition shadow-sm"
            >
              Cerrar
            </button>
          </div>

        </div>

        {/* Links */}
        <nav className="mt-3 grid gap-2">

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="p-3 rounded-xl text-white hover:bg-white/20 transition"
            >
              {l.label}
            </a>
          ))}

        </nav>

      </aside>
    </div>
  );
}