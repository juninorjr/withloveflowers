import { Link } from "react-router-dom";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Heart, Truck, Flower2, Star, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useCart, cartItemId } from "@/contexts/CartContext";
import produto4 from "@/assets/produto-4.jpg";
import produto5 from "@/assets/produto-5.jpg";
import produto6 from "@/assets/produto-6.jpg";
import produto7 from "@/assets/produto-7.jpg";
import produto8 from "@/assets/produto-8.jpg";
import produto9 from "@/assets/produto-9.jpg";
import produto10 from "@/assets/produto-10.webp";
import produto11 from "@/assets/produto-11.jpg";
import produto12 from "@/assets/produto-12.jpg";
import produto13 from "@/assets/produto-13.jpg";
import produto14 from "@/assets/produto-14.jpg";
import produto15 from "@/assets/produto-15.jpg";
import HeroSlider from "@/components/HeroSlider";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

const Index = () => {
  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories & Welcome */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-center text-foreground mb-6">
            O que você procura hoje?
          </h2>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 justify-start md:justify-center">
            {["Todos", "Buquês", "Rosas", "Presentes", "Cestas"].map((cat) => (
              <button
                key={cat}
                className="flex-shrink-0 px-6 py-2.5 rounded-full font-body text-sm font-medium transition-colors"
                style={{ backgroundColor: "#F8F0FF", color: "#a04ba0" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EDE0F5")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F8F0FF")}
              >
                {cat}
              </button>
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
                <CarouselCard img={item.img} name={item.name} price={item.price} />
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

const presentesProducts = [
  { img: produto11, name: "Luminária da Paixão Vermelha", price: "R$ 95,00" },
  { img: produto12, name: "Luminária da Paixão Branca", price: "R$ 95,00" },
  { img: produto13, name: "Coração Gourmet com Ferrero Rocher", price: "R$ 120,00" },
  { img: produto14, name: "Box Branca - Rosas e Gaveta de Bombons", price: "R$ 100,00" },
  { img: produto15, name: "Box Black Personalizada com Foto, Rosas e Ferrero Rocher", price: "R$ 120,00" },
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
    <section className="py-20 bg-purple-light">
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
              <div key={item.name} className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_55%] md:flex-[0_0_33.333%] px-2 h-auto">
                <CarouselCard img={item.img} name={item.name} price={item.price} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function parsePrice(label: string): number {
  const match = label.replace(/[^\d,.]/g, "").replace(",", ".");
  return parseFloat(match) || 0;
}

const CarouselCard = ({ img, name, price }: { img: string; name: string; price: string }) => {
  const { addItem } = useCart();
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col" style={{ backgroundColor: "#F8F0FF" }}>
      <div className="aspect-[4/5] w-full overflow-hidden relative">
        <img src={img} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
        <button
          onClick={() => addItem({ id: cartItemId(name), image: img, name, price: parsePrice(price), priceLabel: price })}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110"
          style={{ backgroundColor: "#a04ba0" }}
          aria-label={`Adicionar ${name} ao carrinho`}
        >
          <ShoppingCart size={18} />
        </button>
      </div>
      <div className="p-4 text-center flex-1 flex flex-col justify-between min-h-[120px]">
        <h3 className="font-display text-base font-semibold text-foreground leading-snug">{name}</h3>
        <p className="font-bold font-body text-lg mt-2" style={{ color: "#a04ba0" }}>{price}</p>
      </div>
    </div>
  );
};

export default Index;
