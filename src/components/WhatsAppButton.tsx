import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/whatsapp";

const WHATSAPP_LINK = getWhatsAppLink();

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
