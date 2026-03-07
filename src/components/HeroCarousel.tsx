import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

const slides = [
  {
    img: heroSlide1,
    title: "Flores que transformam momentos em lembranças",
    subtitle: "Surpreenda quem você ama",
    buttonLabel: "Ver Catálogo",
    buttonLink: "/catalogo",
    isExternal: false,
  },
  {
    img: heroSlide2,
    title: "Promoção Dia da Mulher 🌸",
    subtitle: "Buquês especiais com preços promocionais",
    buttonLabel: "Ver Promoção",
    buttonLink: "/catalogo",
    isExternal: false,
  },
  {
    img: heroSlide3,
    title: "Buquês de Rosas",
    subtitle: "Clássicos, elegantes e cheios de amor",
    buttonLabel: "Comprar Agora",
    buttonLink: WHATSAPP_LINK,
    isExternal: true,
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: index === current ? 1 : 0, zIndex: index === current ? 1 : 0 }}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4"
            style={{ opacity: index === current ? 1 : 0, transition: "opacity 0.5s ease-in-out 0.3s" }}
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-3xl">
              {slide.title}
            </h2>
            <p className="font-display text-lg md:text-xl text-primary-foreground/90 mt-4 italic max-w-xl">
              {slide.subtitle}
            </p>
            {slide.isExternal ? (
              <a
                href={slide.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-purple text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                {slide.buttonLabel}
              </a>
            ) : (
              <Link
                to={slide.buttonLink}
                className="mt-8 bg-purple text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                {slide.buttonLabel}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        aria-label="Próximo"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-purple scale-125" : "bg-primary-foreground/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
