import { MapPin, Truck, Clock, Info } from "lucide-react";
import { getWhatsAppLink } from "@/config/whatsapp";

import { WHATSAPP_MESSAGES } from "@/config/whatsapp";

const WHATSAPP_LINK = getWhatsAppLink(WHATSAPP_MESSAGES.delivery);

const deliveryFees = [
  { city: "Jaguariúna", fee: "R$15" },
  { city: "Holambra", fee: "R$25" },
  { city: "Santo Antônio da Posse", fee: "R$25" },
  { city: "Outras localidades", fee: "Sob consulta" },
];

const Delivery = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">Entrega</h1>
          <p className="text-muted-foreground font-body">
            Entregamos suas flores com cuidado e pontualidade.
          </p>
        </div>

        {/* Info notice */}
        <div
          className="flex items-start gap-3 rounded-lg px-4 py-3.5 border mb-8"
          style={{ backgroundColor: "#f7ecf7", borderColor: "#e9d4e9" }}
        >
          <Info size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#a04ba0" }} />
          <p className="font-body text-sm leading-relaxed" style={{ color: "#6b3a6b" }}>
            Pedidos realizados até as <strong>13:30</strong> são entregues no mesmo dia. Após esse horário, a entrega será feita no dia seguinte.
          </p>
        </div>

        {/* Delivery fees */}
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Truck size={24} className="text-primary" />
            <h2 className="font-display text-xl font-semibold text-foreground">Taxas de Entrega</h2>
          </div>
          <div className="space-y-4">
            {deliveryFees.map((d) => (
              <div key={d.city} className="flex justify-between items-center border-b border-border pb-3 font-body">
                <span className="text-foreground">{d.city}</span>
                <span className="text-primary font-bold">{d.fee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pickup */}
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={24} className="text-primary" />
            <h2 className="font-display text-xl font-semibold text-foreground text-left">Retirada no Local</h2>
          </div>
          <p className="font-body text-muted-foreground mb-2 text-center">Disponível para retirada em:</p>
          <p className="font-body font-semibold text-foreground text-center">
            Rua Rio Grande do Sul, 201 – Jaguariúna
          </p>
          <p className="font-body text-primary font-medium mt-3 text-center text-base">
            Retiradas disponíveis a partir das 14:30.
          </p>
        </div>

        {/* Schedule */}
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Clock size={24} className="text-primary" />
            <h2 className="font-display text-xl font-semibold text-foreground">Como funciona</h2>
          </div>
          <ol className="font-body text-muted-foreground space-y-2 list-decimal list-inside text-sm">
            <li>Escolha suas flores no catálogo</li>
            <li>Faça seu pedido pelo WhatsApp</li>
            <li>Confirme o endereço e forma de pagamento</li>
            <li>Receba suas flores com carinho!</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Consultar entrega no WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
};

export default Delivery;
