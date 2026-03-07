import { Heart, Instagram, MapPin } from "lucide-react";
import logoBrand from "@/assets/logo-brand.png";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

const Footer = () => (
  <footer className="bg-secondary py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <img src={logoBrand} alt="WithLove Flowers" className="h-16 md:h-20 w-auto object-contain mx-auto md:mx-0 mb-4" />
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Flores que transformam momentos em lembranças. Presenteie quem você ama com carinho e elegância.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-3">Contato</h4>
          <div className="space-y-2 text-sm text-muted-foreground font-body">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
              <Heart size={16} /> WhatsApp
            </a>
            <a href="https://instagram.com/withlove" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
              <Instagram size={16} /> @withlove
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-3">Localização</h4>
          <p className="text-sm text-muted-foreground font-body flex items-center justify-center md:justify-start gap-2">
            <MapPin size={16} /> Rua Francisco Dalbo, 707 – Jaguariúna
          </p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} WithLove. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
