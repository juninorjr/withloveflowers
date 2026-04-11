import ProductCard from "@/components/ProductCard";
import ProductCarousel from "@/components/ProductCarousel";
import { getWhatsAppLink } from "@/config/whatsapp";
import rosaColombiana from "@/assets/rosa-colombiana.jpg";
import rosaSolitaria from "@/assets/rosa-solitaria.jpg";
import girassol from "@/assets/girassol.jpg";
import bouquetMini from "@/assets/bouquet-mini.jpg";
import bouquetMedio from "@/assets/bouquet-medio.jpg";
import bouquetGrande from "@/assets/bouquet-grande.jpg";
import lirio from "@/assets/lirio.jpg";
import produto4 from "@/assets/produto-4.jpg";
import produto5 from "@/assets/produto-5.jpg";
import produto6 from "@/assets/produto-6.jpg";
import produto7 from "@/assets/produto-7.jpg";
import produto8 from "@/assets/produto-8.jpg";
import produto9 from "@/assets/produto-9.jpg";
import produto10 from "@/assets/produto-10.webp";

import { WHATSAPP_MESSAGES } from "@/config/whatsapp";

const WHATSAPP_LINK = getWhatsAppLink(WHATSAPP_MESSAGES.bouquet);

const carouselProducts = [
  { img: produto4, name: "Buquê de Girassóis e Rosas Vermelhas", price: "A partir de R$ 65,00" },
  { img: produto5, name: "Buquê de Rosas Vermelhas com Chuva-de-Prata", price: "A partir de R$ 100,00" },
  { img: produto6, name: "Buquê de Rosas Vermelhas e Margaridas", price: "A partir de R$ 150,00" },
  { img: produto7, name: "Buquê Grande de Girassóis, Rosas e Flores do Campo", price: "A partir de R$ 415,00" },
  { img: produto8, name: "Buquê Médio de Lírios Cor-de-Rosa e Girassóis", price: "A partir de R$ 200,00" },
  { img: produto9, name: "Buquê Pequeno de Lírios Brancos e Margaridas Pink", price: "A partir de R$ 90,00" },
  { img: produto10, name: "Minibuquê de Girassol e Crisântemos Coloridos", price: "A partir de R$ 50,00" },
];

const Catalog = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">Nosso Catálogo</h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Escolha suas flores favoritas e monte o buquê perfeito. Personalize a quantidade como desejar.
          </p>
        </div>

        {/* Rosas */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">🌹 Rosas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ProductCard image={rosaColombiana} name="Rosa Colombiana" price="R$21" description="Por unidade" />
            <ProductCard image={rosaSolitaria} name="Rosa Solitária" price="R$21" oldPrice="R$23" description="Promoção!" />
          </div>
        </section>

        {/* Carousel de Produtos */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            💐 Nossos Buquês
          </h2>
          <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
            Descubra composições únicas feitas com carinho para cada ocasião.
          </p>
          <ProductCarousel products={carouselProducts} />
        </section>

        {/* Girassóis */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">🌻 Girassóis</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ProductCard image={girassol} name="Girassol" price="R$17" description="Por unidade" />
          </div>
        </section>

        {/* Outras Flores */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">🌸 Outras Flores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ProductCard image={lirio} name="Lírio" price="R$35" description="Por haste" />
          </div>
        </section>

        {/* Personalization note */}
        <div className="bg-rose-light rounded-lg p-8 text-center max-w-2xl mx-auto">
          <p className="font-display text-lg font-semibold text-foreground mb-2">Monte seu buquê personalizado!</p>
          <p className="text-muted-foreground font-body text-sm mb-4">
            Escolha a quantidade de flores que desejar e crie uma composição única para presentear.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Montar meu buquê
          </a>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
