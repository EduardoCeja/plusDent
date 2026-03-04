export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white/60 backdrop-blur py-8">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left text-sm text-neutral-600">
            © {year} PlusDent. Todos los derechos reservados.
          </p>

          <nav className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 text-sm">
            <a
              href="#inicio"
              className="text-neutral-600 hover:text-neutral-900 transition"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-neutral-600 hover:text-neutral-900 transition"
            >
              Catálogo
            </a>
            <a
              href="#contacto"
              className="text-neutral-600 hover:text-neutral-900 transition"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}