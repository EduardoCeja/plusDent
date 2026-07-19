const SELLER_WHATSAPP = "5213318527973";
const DEFAULT_MESSAGE = "Hola 👋, me gustaría solicitar información, por favor.";

function buildWhatsAppUrl(phoneE164: string, message: string) {
  const clean = phoneE164.replace(/[^\d]/g, "");
  return `https://api.whatsapp.com/send?phone=${clean}&text=${encodeURIComponent(message)}`;
}

export default function WhatsAppFloatButton() {
  const waUrl = buildWhatsAppUrl(SELLER_WHATSAPP, DEFAULT_MESSAGE);

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar información por WhatsApp"
      title="Solicitar información por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-current"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.66 4.523 1.805 6.383L4 29l7.805-1.766A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.945-1.352l-.355-.21-4.633 1.047 1.06-4.512-.232-.367A9.7 9.7 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Zm5.86-7.516c-.32-.16-1.89-.934-2.184-1.04-.293-.108-.507-.16-.72.16-.212.32-.827 1.04-1.015 1.254-.187.212-.374.24-.694.08-.32-.16-1.352-.498-2.575-1.588-.952-.849-1.595-1.898-1.782-2.218-.187-.32-.02-.492.14-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.375-.26-.624-.524-.54-.72-.55l-.614-.01a1.18 1.18 0 0 0-.854.4c-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.256 3.443 5.465 4.828.763.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.89-.773 2.156-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
      </svg>
    </a>
  );
}
