import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, Info } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/config/whatsapp";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

type DeliveryOptionId = "retirada" | "jaguariuna" | "holambra" | "posse";

interface DeliveryOption {
  id: DeliveryOptionId;
  label: string;
  fee: number;
}

const DELIVERY_OPTIONS: DeliveryOption[] = [
  { id: "retirada", label: "Retirada (sem custo)", fee: 0 },
  { id: "jaguariuna", label: "Entrega em Jaguariúna", fee: 15 },
  { id: "holambra", label: "Entrega em Holambra", fee: 25 },
  { id: "posse", label: "Entrega em Santo Antônio da Posse", fee: 25 },
];

const formatBRL = (value: number) => `R$${value.toFixed(2).replace(".", ",")}`;

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();
  const [clientName, setClientName] = useState("");
  const [observations, setObservations] = useState("");
  const [deliveryMode, setDeliveryMode] = useState<DeliveryOptionId | "">("");
  const [showInfoPopup, setShowInfoPopup] = useState(false);

  useEffect(() => {
    if (isOpen) setShowInfoPopup(true);
  }, [isOpen]);

  const selectedDelivery = DELIVERY_OPTIONS.find((o) => o.id === deliveryMode);
  const deliveryFee = selectedDelivery?.fee ?? 0;
  const grandTotal = totalPrice + deliveryFee;

  const getFinalizeLink = () => {
    const lines = items.map((i) => `${i.name} x${i.quantity} — ${i.priceLabel}`);
    const deliveryLabel = selectedDelivery
      ? `${selectedDelivery.label}${selectedDelivery.fee > 0 ? ` — ${formatBRL(selectedDelivery.fee)}` : ""}`
      : "(não informado)";
    const msg = `Olá, vim pelo site da WithLoveFlowers e gostaria de finalizar meu pedido. Seguem os itens:\n\nNome: ${clientName || "(não informado)"}\n\nPedido:\n${lines.join("\n")}\n\nModo de entrega: ${deliveryLabel}\n\nTotal: ${formatBRL(grandTotal)}\n\nObservações: ${observations || "Nenhuma"}`;
    return WHATSAPP_BASE + encodeURIComponent(msg);
  };

  const handleFinalizeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!deliveryMode) {
      e.preventDefault();
      toast({
        title: "Selecione o modo de entrega",
        description: "Escolha uma opção de entrega ou retirada antes de finalizar.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
    <Dialog open={showInfoPopup && isOpen} onOpenChange={setShowInfoPopup}>
      <DialogContent className="max-w-sm rounded-2xl text-center" style={{ backgroundColor: "#fdf7fd" }}>
        <DialogHeader>
          <DialogTitle className="font-display text-lg" style={{ color: "#a04ba0" }}>
            Informação importante
          </DialogTitle>
          <DialogDescription className="font-body text-sm text-foreground/80 leading-relaxed pt-2">
            Os buquês estão sujeitos a alterações conforme a disponibilidade das flores. Também é possível personalizar o pedido. Caso deseje alguma alteração, informe no campo Observações do carrinho.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <button
            onClick={() => setShowInfoPopup(false)}
            className="px-6 py-2.5 rounded-full font-body font-bold text-sm text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#a04ba0" }}
          >
            Entendi
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
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
              <div
                className="flex items-start gap-2 rounded-lg px-3 py-2.5 border"
                style={{ backgroundColor: "#f7ecf7", borderColor: "#e9d4e9" }}
              >
                <Info size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#a04ba0" }} />
                <p className="font-body text-xs leading-relaxed" style={{ color: "#6b3a6b" }}>
                  Pedidos realizados até as <strong>13:30</strong> são entregues no mesmo dia. Após esse horário, a entrega será feita no dia seguinte.
                </p>
              </div>
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 border border-border rounded-lg p-3">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm font-semibold text-foreground leading-snug line-clamp-2">
                      {item.name}
                    </h4>
                    <p className="font-body text-sm font-bold mt-1" style={{ color: "#a04ba0" }}>
                      {item.priceLabel}
                    </p>
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
                  <label className="font-body text-xs font-semibold text-muted-foreground mb-1 block">
                    Observações
                  </label>
                  <textarea
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    placeholder="Ex: entregar às 14h, cartão com mensagem..."
                    rows={2}
                    className="w-full border border-border rounded-lg px-3 py-2 font-body text-sm bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-muted-foreground mb-1 block">
                    Modo de entrega <span style={{ color: "#a04ba0" }}>*</span>
                  </label>
                  <select
                    value={deliveryMode}
                    onChange={(e) => setDeliveryMode(e.target.value as DeliveryOptionId | "")}
                    className="w-full border border-border rounded-lg px-3 py-2 font-body text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none bg-[length:16px] bg-no-repeat bg-[right_0.75rem_center] pr-9"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a04ba0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e\")",
                    }}
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    {DELIVERY_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                        {opt.fee > 0 ? ` (${formatBRL(opt.fee)})` : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="space-y-1 font-body text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatBRL(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Entrega</span>
                  <span>{selectedDelivery ? formatBRL(deliveryFee) : "—"}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-bold text-lg" style={{ color: "#a04ba0" }}>
                    {formatBRL(grandTotal)}
                  </span>
                </div>
              </div>
              <a
                href={getFinalizeLink()}
                onClick={handleFinalizeClick}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-full font-body font-bold text-sm text-white text-center transition-opacity ${deliveryMode ? "hover:opacity-90" : "opacity-60 cursor-not-allowed"}`}
                style={{ backgroundColor: "#a04ba0" }}
              >
                Finalizar pelo WhatsApp
              </a>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
    </>
  );
};

export default CartDrawer;
