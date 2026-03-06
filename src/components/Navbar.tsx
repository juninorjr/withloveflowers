import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Início" },
    { to: "/catalogo", label: "Catálogo" },
    { to: "/entrega", label: "Entrega" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-2xl font-bold text-primary tracking-wide">
          WithLove
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
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
