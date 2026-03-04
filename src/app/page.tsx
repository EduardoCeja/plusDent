import Header from "@/components/Header";
import Section from "@/components/Section";
import HeroDentist from "@/components/HeroDentist";
import CatalogosDentales from "@/components/CatalogosDentales";
import Cases from "@/components/Cases";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh pt-[var(--header-offset)]">
      <Header />

      <Section id="inicio" className="pt-32 md:pt-40 lg:pt-44">
        <HeroDentist />
      </Section>

      <Section id="servicios" className="bg-white">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Catálogo</h2>
          <p className="text-neutral-600 mt-2">
            Tratamientos integrales para tu salud y estética dental.
          </p>
        </div>
        <CatalogosDentales />
      </Section>

      <Section id="contacto" className="bg-white">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Contacto</h2>
            <p className="text-neutral-600 mt-2">
              Agenda una valoración sin compromiso. Horario: Lun–Sáb 9:00–19:00.
            </p>
            <ul className="mt-6 grid gap-2 text-neutral-700">
              <li>
                <strong>Tel:</strong> (55) 0000 0000
              </li>
              <li>
                <strong>WhatsApp:</strong> +52 1 55 0000 0000
              </li>
              <li>
                <strong>Dirección:</strong> Av. Ejemplo 123, Col. Centro, CDMX
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </Section>

      <Footer />
    </div>
  );
}