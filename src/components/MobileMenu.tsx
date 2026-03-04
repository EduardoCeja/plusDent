"use client";

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
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <aside
        className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 pt-8 pb-8 flex flex-col gap-4 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold">Navegación</span>
          <button className="btn" onClick={onClose}>
            Cerrar
          </button>
        </div>

        <nav className="mt-2 grid gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="p-3 rounded-xl hover:bg-neutral-100"
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={onClose} className="btn btn-brand mt-2">
            Agenda tu cita
          </a>
        </nav>
      </aside>
    </div>
  );
}