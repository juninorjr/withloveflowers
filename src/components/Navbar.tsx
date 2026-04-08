import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.webp";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsOpen: openCart } = useCart();

  const links = [
    { to: "/", label: "Início" },
    { to: "/catalogo", label: "Catálogo" },
    { to: "/entrega", label: "Entrega" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-purple tracking-wide">
          <img src={logo} alt="WithLove logo" className="h-9 w-9 object-contain" />
          WithLove Flowers
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary font-bold" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-body font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            Fazer Pedido
          </a>
          <button onClick={() => openCart(true)} className="relative text-foreground hover:text-primary transition-colors" aria-label="Carrinho">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ backgroundColor: "#a04ba0" }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => openCart(true)} className="relative text-foreground" aria-label="Carrinho">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ backgroundColor: "#a04ba0" }}>
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-up">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-body text-sm tracking-widest uppercase ${
                location.pathname === l.to ? "text-primary font-bold" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-body font-bold"
          >
            Fazer Pedido
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
