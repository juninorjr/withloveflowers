import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/config/whatsapp";

const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();
  const [clientName, setClientName] = useState("");
  const [observations, setObservations] = useState("");

  const getFinalizeLink = () => {
    const lines = items.map((i) => `${i.name} x${i.quantity} — ${i.priceLabel}`);
    const totalFormatted = `R$${totalPrice.toFixed(2).replace(".", ",")}`;
    const msg = `Olá, vim pelo site da WithLove e gostaria de finalizar meu pedido. Seguem os itens:\n\nNome: ${clientName || "(não informado)"}\n\nPedido:\n${lines.join("\n")}\n\nTotal: ${totalFormatted}\n\nObservações: ${observations || "Nenhuma"}`;
    return WHATSAPP_BASE + encodeURIComponent(msg);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-xl flex items-center gap-2">
            <ShoppingBag size={22} style={{ color: "#a04ba0" }} /> Meu Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground font-body gap-3">
            <ShoppingBag size={48} className="opacity-30" />
            <p>Seu carrinho está vazio</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 py-4 pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 border border-border rounded-lg p-3">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm font-semibold text-foreground leading-snug line-clamp-2">{item.name}</h4>
                    <p className="font-body text-sm font-bold mt-1" style={{ color: "#a04ba0" }}>{item.priceLabel}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Diminuir"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-body text-sm font-bold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Aumentar"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-destructive hover:opacity-70 transition-opacity"
                        aria-label="Remover"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Client info fields */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="font-body text-xs font-semibold text-muted-foreground mb-1 block">Seu nome</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Digite seu nome"
                    className="w-full border border-border rounded-lg px-3 py-2 font-body text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-muted-foreground mb-1 block">Observações</label>
                  <textarea
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    placeholder="Ex: entregar às 14h, cartão com mensagem..."
                    rows={2}
                    className="w-full border border-border rounded-lg px-3 py-2 font-body text-sm bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between font-body">
                <span className="text-muted-foreground">Total</span>
                <span className="font-bold text-lg" style={{ color: "#a04ba0" }}>
                  R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <a
                href={getFinalizeLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-full font-body font-bold text-sm text-white text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#a04ba0" }}
              >
                Finalizar pelo WhatsApp
              </a>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
