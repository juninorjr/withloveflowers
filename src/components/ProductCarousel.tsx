import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductSlide {
  img: string;
  name: string;
  price: string;
}

interface ProductCarouselProps {
  products: ProductSlide[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md items-center justify-center text-foreground hover:bg-secondary transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md items-center justify-center text-foreground hover:bg-secondary transition-colors"
        aria-label="Próximo"
      >
        <ChevronRight size={20} />
      </button>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {products.map((item, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-2"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border h-full flex flex-col">
                <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center flex flex-col flex-1 justify-center">
                  <h3 className="font-display text-base font-semibold text-foreground leading-snug">
                    {item.name}
                  </h3>
                  <p className="font-body font-bold text-lg mt-2" style={{ color: "hsl(300, 37%, 47%)" }}>
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === selectedIndex
                ? "bg-purple scale-110"
                : "bg-border"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
