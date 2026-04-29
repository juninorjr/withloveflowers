import { useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const STORAGE_KEY = "wlf_first_add_popup_shown";

const FirstAddPopup = () => {
  const { lastAddedAt } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!lastAddedAt) return;
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    setOpen(true);
    localStorage.setItem(STORAGE_KEY, "1");
  }, [lastAddedAt]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md rounded-2xl shadow-xl bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground text-center">
            Aviso importante 💜
          </DialogTitle>
          <DialogDescription className="font-body text-base text-foreground/80 text-center pt-2 leading-relaxed">
            Os buquês estão sujeitos a alterações conforme a disponibilidade das flores. Também é possível personalizar seu pedido. Caso queira solicitar alguma alteração, informe no campo de observações do carrinho.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <button
            onClick={() => setOpen(false)}
            className="w-full sm:w-auto px-8 py-2.5 rounded-full text-white font-body font-semibold shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#a04ba0" }}
          >
            Entendi
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FirstAddPopup;
