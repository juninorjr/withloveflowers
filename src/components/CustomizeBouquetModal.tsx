import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product, PRODUCTS, parsePrice } from "@/data/products";
import SmartImage from "@/components/SmartImage";

interface CustomizeBouquetModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const formatBRL = (value: number) => `R$${value.toFixed(2).replace(".", ",")}`;

const CustomizeBouquetModal = ({ product, open, onOpenChange }: CustomizeBouquetModalProps) => {
  const { addItem, setIsOpen } = useCart();
  const [rosas, setRosas] = useState(0);
  const [girassois, setGirassois] = useState(0);

  const rosaPrice = parsePrice(PRODUCTS.ROSA_NACIONAL.preco);
  const girassolPrice = parsePrice(PRODUCTS.GIRASSOL.preco);

  useEffect(() => {
    if (open) {
      setRosas(0);
      setGirassois(0);
    }
  }, [open, product?.id]);

  if (!product) return null;

  const basePrice = parsePrice(product.preco);
  const finalPrice = basePrice + rosas * rosaPrice + girassois * girassolPrice;

  const handleAdd = () => {
    const compositionLabel =
      rosas > 0 || girassois > 0
        ? ` (+${rosas > 0 ? `${rosas} rosa${rosas > 1 ? "s" : ""}` : ""}${rosas > 0 && girassois > 0 ? " e " : ""}${girassois > 0 ? `${girassois} girassol${girassois > 1 ? "es" : ""}` : ""})`
        : "";

    addItem({
      id: `${product.id}-custom-${rosas}r-${girassois}g`,
      image: product.imagem,
      name: `${product.nome}${compositionLabel ? " — Personalizado" : ""}`,
      price: finalPrice,
      priceLabel: formatBRL(finalPrice),
      composition: { rosas, girassois },
    });
    onOpenChange(false);
    setIsOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-md rounded-2xl max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: "#fdf7fd" }}
      >
        <DialogHeader>
          <DialogTitle className="font-display text-lg text-center" style={{ color: "#a04ba0" }}>
            Personalizar buquê 🌷
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-3">
          <div className="w-32 h-32 rounded-xl overflow-hidden bg-white border border-border">
            <SmartImage src={product.imagem} alt={product.nome} width={400} height={400} className="object-cover" />
          </div>
          <h3 className="font-display text-base font-semibold text-center text-foreground whitespace-pre-line">
            {product.nome}
          </h3>
          <p className="font-body text-xs text-muted-foreground text-center">
            Composição base · personalize abaixo adicionando rosas e girassóis.
          </p>
        </div>

        <div className="space-y-3 mt-2">
          <CounterRow
            label="Rosas"
            sublabel={`+ ${formatBRL(rosaPrice)} cada`}
            value={rosas}
            onChange={(v) => setRosas(Math.max(0, v))}
          />
          <CounterRow
            label="Girassóis"
            sublabel={`+ ${formatBRL(girassolPrice)} cada`}
            value={girassois}
            onChange={(v) => setGirassois(Math.max(0, v))}
          />
        </div>

        <div
          className="mt-2 rounded-xl px-4 py-3 flex items-center justify-between"
          style={{ backgroundColor: "#f7ecf7" }}
        >
          <span className="font-body text-sm font-semibold text-foreground">Valor total</span>
          <span className="font-body font-bold text-lg" style={{ color: "#a04ba0" }}>
            {formatBRL(finalPrice)}
          </span>
        </div>

        <button
          onClick={handleAdd}
          className="w-full py-3 rounded-full font-body font-bold text-sm text-white transition-opacity hover:opacity-90 mt-1"
          style={{ backgroundColor: "#a04ba0" }}
        >
          Adicionar personalizado ao carrinho
        </button>
      </DialogContent>
    </Dialog>
  );
};

interface CounterRowProps {
  label: string;
  sublabel: string;
  value: number;
  onChange: (v: number) => void;
}

const CounterRow = ({ label, sublabel, value, onChange }: CounterRowProps) => (
  <div className="flex items-center justify-between border border-border rounded-xl px-4 py-3 bg-white">
    <div>
      <p className="font-body text-sm font-semibold text-foreground">{label}</p>
      <p className="font-body text-xs text-muted-foreground">{sublabel}</p>
    </div>
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(value - 1)}
        disabled={value <= 0}
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label={`Diminuir ${label}`}
      >
        <Minus size={14} />
      </button>
      <span className="font-body text-sm font-bold w-6 text-center">{value}</span>
      <button
        onClick={() => onChange(value + 1)}
        className="w-8 h-8 rounded-full text-white flex items-center justify-center hover:opacity-90 transition-opacity"
        style={{ backgroundColor: "#a04ba0" }}
        aria-label={`Aumentar ${label}`}
      >
        <Plus size={14} />
      </button>
    </div>
  </div>
);

export default CustomizeBouquetModal;
