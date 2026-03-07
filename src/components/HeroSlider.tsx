import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

const slides = [
  {
    img: slider1,
    title: "Flores que transformam momentos",
    subtitle: "Surpreenda quem você ama",
    cta: { label: "Ver Catálogo", to: "/catalogo" },
  },
  {
    img: slider2,
    title: "Promoção Dia da Mulher 🌸",
    subtitle: null,
    cta: { label: "Ver Promoção", to: "/catalogo" },
  },
  {
    img: slider3,
    title: "Buquês de Rosas",
    subtitle: null,
    cta: { label: "Comprar Agora", href: WHATSAPP_LINK },
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] mt-20 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight drop-shadow-lg">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="font-body text-primary-foreground/90 text-lg md:text-xl mt-3 drop-shadow">
                {slide.subtitle}
              </p>
            )}
            <div className="mt-6">
              {slide.cta.to ? (
                <Link
                  to={slide.cta.to}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-bold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-lg"
                >
                  {slide.cta.label}
                </Link>
              ) : (
                <a
                  href={slide.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-bold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-lg"
                >
                  {slide.cta.label}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors shadow"
        aria-label="Anterior"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors shadow"
        aria-label="Próximo"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary scale-110" : "bg-primary-foreground/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
