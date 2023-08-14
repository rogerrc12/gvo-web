import { IoLogoWhatsapp } from "react-icons/io";

import { WHATSAPP_LINK } from "@/constants/WHATSAPP_LINK";

function WhatsappBtn() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer fixed z-10 bottom-6 right-6 bg-white rounded-full border hover:shadow-md transition-shadow shadow-gray-600 animate-fade-up animate-once animate-duration-[1500ms] animate-delay-[2000ms] animate-ease-out"
    >
      <IoLogoWhatsapp className="w-14 h-14 text-green-600" />
    </a>
  );
}

export default WhatsappBtn;
