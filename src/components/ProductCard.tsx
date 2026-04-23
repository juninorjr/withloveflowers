import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart, cartItemId } from "@/contexts/CartContext";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
  description?: string;
}

function parsePrice(label: string): number {
  const match = label.replace(/[^\d,.]/g, "").replace(",", ".");
  return parseFloat(match) || 0;
}

const ProductCard = ({ image, name, price, oldPrice, description }: ProductCardProps) => {
  const { addItem } = useCart();
  const [feedback, setFeedback] = useState(0);
  const [popKey, setPopKey] = useState(0);

  const handleAdd = () => {
    addItem({
      id: cartItemId(name),
      image,
      name,
      price: parsePrice(price),
      priceLabel: price,
    });
    setPopKey((k) => k + 1);
    setFeedback((n) => n + 1);
    window.setTimeout(() => setFeedback((n) => Math.max(0, n - 1)), 1500);
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button
          onClick={handleAdd}
          key={popKey}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110 animate-btn-pop"
          style={{ backgroundColor: "#a04ba0" }}
          aria-label={`Adicionar ${name} ao carrinho`}
        >
          <ShoppingCart size={18} />
        </button>
        {feedback > 0 && (
          <div
            className="pointer-events-none absolute left-1/2 bottom-3 -translate-x-1/2 px-3 py-1.5 rounded-full text-white text-xs font-body font-semibold shadow-lg flex items-center gap-1.5 animate-added-toast"
            style={{ backgroundColor: "#a04ba0" }}
          >
            <Check size={14} strokeWidth={3} />
            Adicionado!
          </div>
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
        {description && <p className="text-muted-foreground text-sm font-body mt-1">{description}</p>}
        <div className="mt-2 flex items-center justify-center gap-2">
          {oldPrice && (
            <span className="text-muted-foreground line-through text-sm font-body">{oldPrice}</span>
          )}
          <span className="text-primary font-bold font-body text-lg">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
