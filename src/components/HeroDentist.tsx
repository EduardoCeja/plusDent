"use client";

import Image from "next/image";

function PillImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative w-full overflow-hidden",
        "rounded-[2.5rem] lg:rounded-[3rem]",
        "border border-black/10 bg-white shadow-2xl",
        className,
      ].join(" ")}
    >
      <Image src={src} alt={alt} fill className="object-contain p-8" priority />
    </div>
  );
}

export default function HeroDentist() {
  return (
    <div className="relative grid gap-10 lg:grid-cols-2 items-start lg:items-center lg:min-h-[520px]">
      {/* Columna izquierda: texto */}
      <div className="space-y-6 max-w-xl">
        <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-extrabold">
          Plusdent
          <br />
          Productos de Odontología
        </h1>

        <div className="badge">
          Equipamiento y productos para una atención odontológica
          <span className="inline-block h-2 w-2 rounded-full bg-[--color-accent] ml-2" />
        </div>

        <p className="text-base sm:text-lg text-neutral-600">
          Descubre nuestra selección de insumos y equipos diseñados para clínicas
          dentales modernas. Desde materiales para restauración hasta tecnología
          de diagnóstico digital, ofrecemos soluciones confiables para cada
          especialidad odontológica.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#contacto" className="btn text-black">
            Nosotros
          </a>
          <a href="#servicios" className="btn text-black">
            Ver productos
          </a>
        </div>
      </div>

      {/* Columna derecha: imagen */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full flex justify-center animate-float mt-8 lg:mt-6">
          {/* Glow azul detrás (controlado por breakpoint) */}
          <div
            className="absolute -z-10 top-1/2 left-1/2
              w-[340px] h-[340px]
              sm:w-[460px] sm:h-[460px]
              lg:w-[600px] lg:h-[600px]
              -translate-x-1/2 -translate-y-1/2
              bg-[#1fb6ff] blur-[110px] lg:blur-[140px] opacity-55"
          />

          <PillImage
            src="/img/Plusdent1.png"
            alt="Plusdent Logo"
            className="aspect-square w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px]"
          />
        </div>
      </div>
    </div>
  );
}