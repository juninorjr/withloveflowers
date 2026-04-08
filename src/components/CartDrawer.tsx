import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5500000000000?text=";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  const handleFinalize = () => {
    const lines = items.map((i) => `• ${i.name} (x${i.quantity}) — ${i.priceLabel}`);
    const msg = `Olá! Gostaria de finalizar meu pedido:\n\n${lines.join("\n")}\n\nTotal: R$ ${totalPrice.toFixed(2).replace(".", ",")}`;
    window.open(WHATSAPP_BASE + encodeURIComponent(msg), "_blank");
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
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between font-body">
                <span className="text-muted-foreground">Total</span>
                <span className="font-bold text-lg" style={{ color: "#a04ba0" }}>
                  R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <button
                onClick={handleFinalize}
                className="w-full py-3 rounded-full font-body font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#a04ba0" }}
              >
                Finalizar pelo WhatsApp
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
