import { Link } from "react-router-dom";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Heart, Truck, Flower2, Star, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { PRODUCTS, Product, parsePrice } from "@/data/products";
import HeroSlider from "@/components/HeroSlider";
import SmartImage from "@/components/SmartImage";

const Index = () => {
  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories & Welcome */}
      <section className="py-10 md:py-12 bg-purple-light">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-center text-foreground mb-6">
            O que você procura hoje?
          </h2>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 justify-start md:justify-center">
            {[
              { label: "Buquês", to: "/catalogo#buques" },
              { label: "Rosas", to: "/catalogo#rosas" },
              { label: "Presentes", to: "/#presentes" },
            ].map((cat) => (
              <Link
                key={cat.label}
                to={cat.to}
                className="flex-shrink-0 px-6 py-2.5 rounded-full font-body text-sm font-medium transition-colors text-purple-50 bg-purple hover:opacity-90"
              >
                {cat.label}
              </Link>
            ))}
          </div>
          <p className="flex items-center justify-center gap-1.5 text-muted-foreground font-body text-xs md:text-sm mt-6">
            <Flower2 size={14} className="text-primary" />
            Entregando amor em Jaguariúna e região
          </p>
        </div>
      </section>

      {/* Dia da Mulher Carousel */}
      <PromoCarousel />

      {/* Nossas Rosas Carousel */}
      <RosasCarousel />


      {/* Why Buy From Us */}
      <section className="bg-secondary py-[40px]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Por que comprar conosco?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Flower2,
                title: "Flores Frescas",
                desc: "Selecionadas diariamente para garantir qualidade e beleza.",
              },
              {
                icon: Heart,
                title: "Feito com Amor",
                desc: "Cada buquê é montado com carinho e atenção aos detalhes.",
              },
              { icon: Truck, title: "Entrega Rápida", desc: "Entregamos em Jaguariúna e região com pontualidade." },
              { icon: Star, title: "Personalização", desc: "Monte seu buquê escolhendo a quantidade de flores." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-rose-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

const promoProducts: Product[] = [
  PRODUCTS.BUQUE_7ROSAS_5GIRASSOIS,
  PRODUCTS.BUQUE_PINK_MIX_MINI,
  PRODUCTS.DIV_LIRIO_ROSA_MIX_M,
  PRODUCTS.DIV_LIRIO_BRANCO_MIX_M,
  PRODUCTS.DIV_MIX_GIRASSOL_GERBERA,
];

const PromoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-rose-light py-[40px]">
      <div className="px-4 md:container md:mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Dia das Mães 🌸
        </h2>
        <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
          Surpreenda com buquês de rosas quem você mais ama. Escolha o tamanho ideal!
        </p>
      </div>

      <div className="relative px-0 md:px-12 max-w-5xl md:mx-auto">
        <button
          onClick={scrollPrev}
          className="flex absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/90 border border-border shadow-lg items-center justify-center text-foreground hover:bg-secondary transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="flex absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/90 border border-border shadow-lg items-center justify-center text-foreground hover:bg-secondary transition-colors"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex items-stretch">
            {promoProducts.map((item) => (
              <div key={item.id} className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_55%] md:flex-[0_0_33.333%] px-2 h-auto">
                <CarouselCard product={item} priority />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center font-body text-muted-foreground text-sm md:text-base italic mt-8 px-4">
        Personalize seu buquê com a quantidade de rosas e girassóis que desejar, criando um arranjo único e especial.
      </p>
    </section>
  );
};

const presentesProducts: Product[] = [
  PRODUCTS.PRES_LUMINARIA_VERMELHA,
  PRODUCTS.PRES_LUMINARIA_BRANCA,
  PRODUCTS.PRES_CORACAO_FERRERO,
  PRODUCTS.PRES_BOX_BRANCA,
  PRODUCTS.PRES_BOX_BLACK,
];

const RosasCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="presentes" className="py-[40px] bg-purple-light scroll-mt-24">
      <div className="px-4 md:container md:mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Presentes Inesquecíveis ✨
        </h2>
        <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
          Surpreenda quem você ama com presentes únicos e cheios de carinho.
        </p>
      </div>

      <div className="relative px-0 md:px-12 max-w-5xl md:mx-auto">
        <button
          onClick={scrollPrev}
          className="flex absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/90 border border-border shadow-lg items-center justify-center text-foreground hover:bg-secondary transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="flex absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/90 border border-border shadow-lg items-center justify-center text-foreground hover:bg-secondary transition-colors"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex items-stretch">
            {presentesProducts.map((item) => (
              <div key={item.id} className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_55%] md:flex-[0_0_33.333%] px-2 h-auto">
                <CarouselCard product={item} soldOut />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CarouselCard = ({ product, soldOut = false, priority = false }: { product: Product; soldOut?: boolean; priority?: boolean }) => {
  const { addItem } = useCart();
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col" style={{ backgroundColor: "#F8F0FF" }}>
      <div className="aspect-[4/5] w-full overflow-hidden relative">
        <SmartImage
          src={product.imagem}
          alt={product.nome}
          priority={priority}
          width={900}
          height={1125}
          className={`object-cover transition-transform duration-500 ${soldOut ? "grayscale-[30%]" : "hover:scale-105"}`}
        />
        {soldOut && (
          <>
            <div className="absolute inset-0 bg-black/25 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 -rotate-6 pointer-events-none">
              <div className="bg-black/70 backdrop-blur-sm text-white text-center py-2 shadow-lg border-y border-white/20">
                <span className="font-display text-lg md:text-xl font-bold tracking-[0.2em] uppercase">Indisponível</span>
              </div>
            </div>
          </>
        )}
        <button
          onClick={() => { if (!soldOut) addItem({ id: product.id, image: product.imagem, name: product.nome, price: parsePrice(product.preco), priceLabel: product.preco }); }}
          disabled={soldOut}
          className={`absolute bottom-3 right-3 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white transition-transform ${soldOut ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}`}
          style={{ backgroundColor: "#a04ba0" }}
          aria-label={soldOut ? `${product.nome} indisponível` : `Adicionar ${product.nome} ao carrinho`}
        >
          <ShoppingCart size={18} />
        </button>
      </div>
      <div className="p-4 text-center flex-1 flex flex-col justify-between min-h-[120px]">
        <h3 className="font-display text-base font-semibold text-foreground leading-snug">{product.nome}</h3>
        <p className="font-bold font-body text-lg mt-2" style={{ color: "#a04ba0" }}>{product.preco}</p>
      </div>
    </div>
  );
};

export default Index;
