// components/CatalogosDentales.tsx
"use client";

import React, { useMemo, useState } from "react";
import ProductDetailModal, { ProductDetail } from "@/components/ProductDetailModal";

type Category = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const CATEGORIES: Category[] = [
  {
    id: "prevencion-limpieza",
    title: "Prevención y Limpieza",
    desc: "Cuida tu sonrisa con limpiezas, profilaxis, selladores y educación en higiene oral.",
    icon: <span>🪥</span>,
  },
  {
    id: "estetica-dental",
    title: "Estética Dental",
    desc: "Mejora la apariencia de tus dientes con blanqueamientos, carillas y diseño de sonrisa.",
    icon: <span>✨</span>,
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    desc: "Brackets, alineadores invisibles y tratamientos personalizados para una sonrisa alineada.",
    icon: <span>🧩</span>,
  },
  {
    id: "rehabilitacion-implantes",
    title: "Rehabilitación e Implantes",
    desc: "Implantes, coronas y prótesis para recuperar funcionalidad y estética dental.",
    icon: <span>🛠️</span>,
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    desc: "Tratamientos de conductos y conservación dental con tecnología avanzada.",
    icon: <span>🔬</span>,
  },
  {
    id: "cirugia-bucal",
    title: "Cirugía Bucal",
    desc: "Extracciones, cirugía de terceros molares e intervenciones especializadas.",
    icon: <span>⛑️</span>,
  },
  {
    id: "odontopediatria",
    title: "Odontopediatría",
    desc: "Atención dental especializada para niños en un entorno seguro y amigable.",
    icon: <span>🧒</span>,
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    desc: "Tratamiento de encías, control de infecciones y mantenimiento periodontal.",
    icon: <span>🦷</span>,
  },
];

function imagesFrom(slug: string) {
  return Array.from({ length: 6 }, (_, i) => `/img/dental/${slug}/${i + 1}.png`);
}

function buildProductDetail(cat: Category, src: string, idx: number): ProductDetail {
  const num = idx + 1;
  return {
    id: `${cat.id}-${num}`,
    title: `${cat.title} - Producto ${num}`,
    categoryTitle: cat.title,
    image: src,
    sku: `DENT-${cat.id.toUpperCase().slice(0, 6)}-${String(num).padStart(2, "0")}`,
    price: "$" + (499 + num * 50).toString(),
    description:
      "Detalle informativo del producto. Aquí puedes describir materiales, indicaciones, beneficios y cuidados recomendados.",
    features: ["Calidad clínica", "Uso recomendado por especialistas", "Incluye guía de aplicación"],
  };
}

export default function CatalogosDentales() {
  const [selectedId, setSelectedId] = useState<string>(CATEGORIES[0]?.id ?? "");

  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState<ProductDetail | null>(null);

  const selected = useMemo(
    () => CATEGORIES.find((c) => c.id === selectedId) ?? null,
    [selectedId]
  );

  const images = useMemo(() => (selected ? imagesFrom(selected.id) : []), [selected]);

  const openProduct = (src: string, idx: number) => {
    if (!selected) return;
    setProduct(buildProductDetail(selected, src, idx));
    setModalOpen(true);
  };

  const closeProduct = () => {
    setModalOpen(false);
    setTimeout(() => setProduct(null), 150);
  };

  return (
    <section className="w-full">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-8">
        {/* ✅ MOBILE: Grid 2 columnas / ✅ DESKTOP: Sidebar */}
        <aside className="rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm">
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-neutral-700">
            Catálogos dentales
          </h3>

          {/* ✅ En móvil: grid 2 columnas (sin scroll horizontal) */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {CATEGORIES.map((cat) => {
                const active = cat.id === selectedId;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedId(cat.id)}
                    className={[
                      "w-full rounded-xl border px-3 py-2 text-sm font-semibold transition",
                      "text-center",
                      "focus:outline-none focus:ring-2 focus:ring-blue-400",
                      active
                        ? "border-blue-200 bg-blue-50 text-blue-800"
                        : "border-gray-200 bg-white text-neutral-800 hover:bg-gray-50",
                    ].join(" ")}
                    aria-current={active ? "true" : undefined}
                    title={cat.title}
                  >
                    <span className="mr-2">{cat.icon}</span>
                    <span className="align-middle">{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ✅ En desktop: sidebar vertical */}
          <ul className="hidden lg:block space-y-2">
            {CATEGORIES.map((cat) => {
              const active = cat.id === selectedId;

              return (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(cat.id)}
                    className={[
                      "w-full rounded-xl border px-4 py-3 text-left transition",
                      "focus:outline-none focus:ring-2 focus:ring-blue-400",
                      active
                        ? "border-blue-200 bg-blue-50 shadow-sm"
                        : "border-gray-200 bg-white hover:bg-gray-50",
                    ].join(" ")}
                    aria-current={active ? "true" : undefined}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-lg">{cat.icon}</div>
                      <div className="min-w-0">
                        <p className={["font-semibold", active ? "text-blue-800" : "text-neutral-800"].join(" ")}>
                          {cat.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm text-neutral-600">
                          {cat.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* CONTENIDO */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-4 shadow-sm sm:p-7">
          {!selected ? (
            <div className="text-neutral-700">Selecciona una sección para ver sus imágenes.</div>
          ) : (
            <>
              <header className="flex items-start gap-3">
                <div className="text-2xl">{selected.icon}</div>
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-800">
                    {selected.title}
                  </h2>
                  <p className="mt-1 text-sm sm:text-base text-neutral-600">{selected.desc}</p>
                </div>
              </header>

              {/* ✅ GRID de imágenes */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                {images.map((src, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => openProduct(src, idx)}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label={`Ver detalle: ${selected.title} producto ${idx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${selected.title} muestra ${idx + 1}`}
                      className="h-36 w-full object-cover transition group-hover:scale-[1.02] sm:h-44 lg:h-40"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-2 left-2 rounded-lg bg-white/90 px-2 py-1 text-xs font-semibold text-neutral-900">
                        Ver detalle
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <p className="mt-5 text-xs text-neutral-500">
                Ruta esperada:{" "}
                <span className="font-mono">/public/img/dental/{selected.id}/1.png</span>
              </p>
            </>
          )}
        </div>
      </div>

      <ProductDetailModal open={modalOpen} product={product} onClose={closeProduct} />
    </section>
  );
}