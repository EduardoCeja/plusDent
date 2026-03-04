"use client";

import React, { useEffect, useRef } from "react";

export type ProductDetail = {
  id: string;
  title: string;
  categoryTitle: string;
  description: string;
  image: string;
  sku?: string;
  price?: string;
  features?: string[];
};

type Props = {
  open: boolean;
  product: ProductDetail | null;
  onClose: () => void;
};

function buildWhatsAppUrl(phoneE164: string, message: string) {
  const clean = phoneE164.replace(/[^\d]/g, "");
  return `https://api.whatsapp.com/send?phone=${clean}&text=${encodeURIComponent(
    message
  )}`;
}

export default function ProductDetailModal({ open, product, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // ✅ Bloquea scroll del body cuando el modal está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const t = setTimeout(() => closeBtnRef.current?.focus(), 0);
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !product) return null;

  const SELLER_WHATSAPP = "5213318527973";

  const waMessage = `Hola 👋, me interesa este producto:

🦷 Producto: ${product.title}
📂 Categoría: ${product.categoryTitle}
🔖 SKU: ${product.sku ?? "N/A"}

¿Podrías brindarme más información por favor?`;

  const waUrl = buildWhatsAppUrl(SELLER_WHATSAPP, waMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Detalle de producto"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90dvh] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-4 sm:px-6 py-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              {product.categoryTitle}
            </p>
            <h3 className="mt-1 text-lg sm:text-xl font-extrabold text-neutral-900 break-words">
              {product.title}
            </h3>
          </div>

          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="shrink-0 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        {/* Body con scroll interno */}
        <div className="overflow-y-auto">
          <div className="grid gap-6 px-4 sm:px-6 py-5 md:grid-cols-2">
            {/* Imagen */}
            <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
              <img
                src={product.image}
                alt={product.title}
                className="h-52 w-full object-cover sm:h-64 md:h-[360px]"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="min-w-0">
              <p className="text-sm text-neutral-700">{product.description}</p>

              <div className="mt-4 space-y-2 text-sm text-neutral-800">
                {product.sku && (
                  <div>
                    <span className="text-neutral-500">SKU: </span>
                    <span className="font-semibold break-all">{product.sku}</span>
                  </div>
                )}
                {product.price && (
                  <div>
                    <span className="text-neutral-500">Precio: </span>
                    <span className="font-semibold">{product.price}</span>
                  </div>
                )}
              </div>

              {product.features?.length ? (
                <ul className="mt-4 list-disc list-inside text-sm text-neutral-700 space-y-1">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              ) : null}

              {/* Botones: apilan en móvil */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onClose}
                  className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  Cerrar
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Solicitar información por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Extra padding abajo para iPhone (safe-ish) */}
          <div className="h-2" />
        </div>
      </div>
    </div>
  );
}