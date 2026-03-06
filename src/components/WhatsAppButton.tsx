import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
    aria-label="Fazer pedido no WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
