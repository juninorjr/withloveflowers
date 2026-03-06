import { Link } from "react-router-dom";
import { useRef } from "react";
import { Heart, Truck, Flower2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-flowers.jpg";
import bouquetMini from "@/assets/bouquet-mini.jpg";
import bouquetMedio from "@/assets/bouquet-medio.jpg";
import bouquetGrande from "@/assets/bouquet-grande.jpg";
import promoMini from "@/assets/promo-mini.jpg";
import promoPequeno from "@/assets/promo-pequeno.jpg";
import promoMedio from "@/assets/promo-medio.jpg";
import promoGrande from "@/assets/promo-grande.jpg";
import rosas1 from "@/assets/rosas-1.jpg";
import rosas2 from "@/assets/rosas-2.jpg";
import rosas3 from "@/assets/rosas-3.jpg";
import rosas4 from "@/assets/rosas-4.jpg";
import rosas5 from "@/assets/rosas-5.jpg";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Flores elegantes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up">
            WithLove
          </h1>
          <p className="font-display text-xl md:text-2xl text-primary-foreground/90 mt-4 italic animate-fade-up-delay-1">
            Flores que transformam momentos em lembranças.
          </p>
          <p className="font-body text-primary-foreground/80 mt-3 text-base md:text-lg animate-fade-up-delay-2">
            Catálogo especial para presentear quem você ama.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Fazer pedido no WhatsApp
            </a>
            <Link
              to="/catalogo"
              className="border-2 border-primary-foreground/60 text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Promoção Dia da Mulher Carousel */}
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
              { icon: Flower2, title: "Flores Frescas", desc: "Selecionadas diariamente para garantir qualidade e beleza." },
              { icon: Heart, title: "Feito com Amor", desc: "Cada buquê é montado com carinho e atenção aos detalhes." },
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Informações de Entrega
          </h2>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronta para surpreender?
          </h2>
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
  { img: promoMini, name: "Buquê Mini de Rosas", price: "R$50" },
  { img: promoPequeno, name: "Buquê Pequeno de Rosas", price: "R$90" },
  { img: promoMedio, name: "Buquê Médio de Rosas", price: "R$200" },
  { img: promoGrande, name: "Buquê Grande de Rosas", price: "R$415" },
];

const PromoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth ?? 300;
    scrollRef.current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-rose-light">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Promoção Dia da Mulher 🌸
        </h2>
        <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
          Surpreenda com buquês de rosas fresquinhas. Escolha o tamanho ideal!
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation arrows - desktop */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md items-center justify-center text-foreground hover:bg-secondary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md items-center justify-center text-foreground hover:bg-secondary transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {promoProducts.map((item) => (
              <Link
                to="/catalogo"
                key={item.name}
                className="snap-start shrink-0 w-[75vw] sm:w-[55vw] md:w-[calc(25%-15px)] group"
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                    <p className="text-primary font-bold font-body text-xl mt-1">{item.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
