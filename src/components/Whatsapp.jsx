import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/252616650291"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] group"
    >
      <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_16px_36px_rgba(37,211,102,0.45)]">
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/30"></span>
        <FaWhatsapp className="relative text-2xl sm:text-3xl" />
      </div>
    </a>
  );
}