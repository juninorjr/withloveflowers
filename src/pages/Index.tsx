import { Link } from "react-router-dom";
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Heart, Truck, Flower2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import bouquetMini from "@/assets/bouquet-mini.jpg";
import bouquetMedio from "@/assets/bouquet-medio.jpg";
import bouquetGrande from "@/assets/bouquet-grande.jpg";
import produto4 from "@/assets/produto-4.jpg";
import produto5 from "@/assets/produto-5.jpg";
import produto6 from "@/assets/produto-6.jpg";
import produto7 from "@/assets/produto-7.jpg";
import produto8 from "@/assets/produto-8.jpg";
import produto9 from "@/assets/produto-9.jpg";
import produto10 from "@/assets/produto-10.webp";
import rosas1 from "@/assets/rosas-1.jpg";
import rosas2 from "@/assets/rosas-2.jpg";
import rosas3 from "@/assets/rosas-3.jpg";
import rosas4 from "@/assets/rosas-4.jpg";
import rosas5 from "@/assets/rosas-5.jpg";
import HeroSlider from "@/components/HeroSlider";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

const Index = () => {
  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Category Buttons Placeholder */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-4 min-h-[60px] rounded-lg border border-dashed border-border text-muted-foreground font-body text-sm">
            Espaço reservado para categorias
          </div>
        </div>
      </section>

      {/* Dia da Mulher Carousel */}
      <PromoCarousel />

      {/* Nossas Rosas Carousel */}
      <RosasCarousel />

      {/* Featured Bouquets */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Buquês em Destaque
          </h2>
          <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
            Composições feitas com carinho para tornar cada momento especial.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { img: bouquetMini, name: "Mini", price: "R$50" },
              { img: bouquetMedio, name: "Médio", price: "R$200" },
              { img: bouquetGrande, name: "Grande", price: "R$415" },
            ].map((item) => (
              <Link to="/catalogo" key={item.name} className="group">
                <div className="aspect-square rounded-lg overflow-hidden shadow-sm border border-border">
                  <img
                    src={item.img}
                    alt={`Buquê ${item.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                  <p className="text-primary font-bold font-body mt-1">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-20 bg-secondary">
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

      {/* Delivery Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Informações de Entrega</h2>
          <p className="text-muted-foreground font-body mb-8">
            Entregamos flores na região de Jaguariúna com carinho e pontualidade.
          </p>
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="grid sm:grid-cols-2 gap-4 text-left font-body text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground font-semibold">Jaguariúna</span>
                <span className="text-primary font-bold">R$15</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground font-semibold">Holambra</span>
                <span className="text-primary font-bold">R$25</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground font-semibold">Santo Antônio da Posse</span>
                <span className="text-primary font-bold">R$25</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground font-semibold">Outras localidades</span>
                <span className="text-muted-foreground">Sob consulta</span>
              </div>
            </div>
            <Link to="/entrega" className="inline-block mt-6 text-primary font-body font-bold text-sm hover:underline">
              Ver mais detalhes →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-light">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Pronta para surpreender?</h2>
          <p className="text-muted-foreground font-body mb-8">
            Faça seu pedido pelo WhatsApp e receba flores frescas com entrega rápida.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-body font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Fazer pedido no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

const promoProducts = [
  { img: produto4, name: "Buquê de Girassóis e Rosas Vermelhas", price: "A partir de R$65,00" },
  { img: produto5, name: "Buquê de Rosas Vermelhas com Chuva-de-Prata", price: "A partir de R$100,00" },
  { img: produto6, name: "Buquê de Rosas Vermelhas e Margaridas", price: "A partir de R$150,00" },
  { img: produto7, name: "Buquê Grande de Girassóis, Rosas e Flores do Campo", price: "A partir de R$415,00" },
  { img: produto8, name: "Buquê Médio de Lírios Cor-de-Rosa e Girassóis", price: "A partir de R$200,00" },
  { img: produto9, name: "Buquê Pequeno de Lírios Brancos e Margaridas Pink", price: "A partir de R$90,00" },
  { img: produto10, name: "Minibuquê de Girassol e Crisântemos Coloridos", price: "A partir de R$50,00" },
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
    <section className="py-20 bg-rose-light">
      <div className="px-4 md:container md:mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Dia da Mulher 🌸
        </h2>
        <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
          Surpreenda com buquês de rosas fresquinhas. Escolha o tamanho ideal!
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
              <div key={item.name} className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_55%] md:flex-[0_0_33.333%] px-2 h-auto">
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col" style={{ backgroundColor: "#F8F0FF" }}>
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between min-h-[120px]">
                    <h3 className="font-display text-base font-semibold text-foreground leading-snug">{item.name}</h3>
                    <p className="font-bold font-body text-lg mt-2" style={{ color: "#a04ba0" }}>{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const rosasImages = [
  { img: rosas1, alt: "Rosas cor-de-rosa e vermelhas" },
  { img: rosas2, alt: "Rosas vermelhas elegantes" },
  { img: rosas3, alt: "Rosas rosa delicadas" },
  { img: rosas4, alt: "Rosas brancas e creme" },
  { img: rosas5, alt: "Mix de rosas coloridas" },
];

const RosasCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth ?? 300;
    scrollRef.current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-purple-light">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-purple mb-4">Nossas Rosas 🌹</h2>
        <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
          Descubra a beleza e a delicadeza das nossas rosas selecionadas com carinho.
        </p>

        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-purple/20 shadow-md items-center justify-center text-purple hover:bg-purple/10 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-purple/20 shadow-md items-center justify-center text-purple hover:bg-purple/10 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {rosasImages.map((item) => (
              <div key={item.alt} className="snap-start shrink-0 w-[75vw] sm:w-[55vw] md:w-[calc(33.333%-14px)]">
                <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-purple/10">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
