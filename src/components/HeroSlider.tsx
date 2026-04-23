import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.webp";

const slides = [slider1, slider2, slider3];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full mt-20 overflow-hidden h-[55vh] md:h-[70vh]">
      {slides.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover object-center"
          />
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
