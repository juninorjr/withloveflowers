import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ShoppingCart, Sparkles } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product, parsePrice } from "@/data/products";
import SmartImage from "@/components/SmartImage";
import CustomizeBouquetModal from "@/components/CustomizeBouquetModal";

interface ProductCarouselProps {
  products: Product[];
  customizable?: boolean;
}

const ProductCarousel = ({ products, customizable = false }: ProductCarouselProps) => {
  const { addItem } = useCart();
  const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null);
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
    <div className="relative max-w-6xl mx-auto px-12 md:px-14">
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-[calc(50%-40px)] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 border border-border shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-[calc(50%-40px)] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 border border-border shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
        aria-label="Próximo"
      >
        <ChevronRight size={22} />
      </button>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-2"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border h-full flex flex-col">
                <div className="aspect-square bg-white flex items-center justify-center overflow-hidden relative">
                  <SmartImage src={item.imagem} alt={item.nome} width={900} height={900} className="object-cover" />
                  <button
                    onClick={() => addItem({ id: item.id, image: item.imagem, name: item.nome, price: parsePrice(item.preco), priceLabel: item.preco })}
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110"
                    style={{ backgroundColor: "#a04ba0" }}
                    aria-label={`Adicionar ${item.nome} ao carrinho`}
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
                <div className="p-4 text-center flex flex-col flex-1 justify-center">
                  <h3 className="font-display text-base font-semibold text-foreground leading-snug whitespace-pre-line">{item.nome}</h3>
                  <p className="font-body font-bold text-lg mt-2" style={{ color: "hsl(300, 37%, 47%)" }}>{item.preco}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === selectedIndex ? "bg-purple scale-110" : "bg-border"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
