import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { toast } from "sonner";

export interface CartComposition {
  rosas: number;
  girassois: number;
}

export interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  priceLabel: string;
  quantity: number;
  composition?: CartComposition;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  lastAddedAt: number;
  lastAddedName: string | null;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

// Chave do carrinho salvo no navegador do cliente.
// Se um dia a estrutura do CartItem mudar, troque para "wlf_cart_v2"
// para descartar carrinhos salvos no formato antigo.
const STORAGE_KEY = "wlf_cart_v1";

function loadSavedCart(): CartItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    // Sanidade básica: só aceita itens com os campos essenciais
    return parsed.filter(
      (i) => i && typeof i.id === "string" && typeof i.price === "number" && typeof i.quantity === "number" && i.quantity > 0
    );
  } catch {
    return [];
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Carrinho persiste entre visitas: se o cliente recarregar a página
  // ou fechar a aba, os itens continuam aqui quando ele voltar.
  const [items, setItems] = useState<CartItem[]>(loadSavedCart);
  const [isOpen, setIsOpen] = useState(false);
  const [lastAddedAt, setLastAddedAt] = useState(0);
  const [lastAddedName, setLastAddedName] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage indisponível (modo privado antigo etc.) — segue sem persistir
    }
  }, [items]);

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setLastAddedAt(Date.now());
    setLastAddedName(item.name);

    // Confirmação visível de que o item entrou no carrinho,
    // com atalho para abrir o carrinho direto da notificação.
    toast.success("Adicionado ao carrinho! 🌸", {
      description: item.name,
      duration: 3000,
      action: {
        label: "Ver carrinho",
        onClick: () => setIsOpen(true),
      },
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, quantity: i.quantity + delta } : i)
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, totalItems, totalPrice, isOpen, setIsOpen, lastAddedAt, lastAddedName }}>
      {children}
    </CartContext.Provider>
  );
};
