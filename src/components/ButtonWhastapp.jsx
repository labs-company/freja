import whatsAppIcon from "../assets/whatsapp.svg";

export default function ButtonWhastapp() {
  return (
    <a
      href="https://wa.me/573044176141?text=Hola%20¡Estoy%20interesado%20en%20sus%20comprar!"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed right-6 bottom-8 bg-green px-3 rounded-full shadow-xl bg-green-500 transition-all font-monset text-white flex justify-center py-3 items-center gap-2 font-bold hover:bg-green-700 hover:cursor-pointer z-20"
    >
      <img src={whatsAppIcon.src} alt="WhatsApp" class="w-10 h-10" />
    </a>
  );
}
