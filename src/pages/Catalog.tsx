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
import produto11 from "@/assets/produto-11.jpg";
import produto12 from "@/assets/produto-12.jpg";
import produto13 from "@/assets/produto-13.jpg";
import produto14 from "@/assets/produto-14.jpg";
import produto15 from "@/assets/produto-15.jpg";

import { WHATSAPP_MESSAGES } from "@/config/whatsapp";

const WHATSAPP_LINK = getWhatsAppLink(WHATSAPP_MESSAGES.bouquet);

const solitarioProducts = [
  { img: rosaColombiana, name: "Rosa Colombiana", price: "R$21,00" },
  { img: girassol, name: "Girassol", price: "R$17,00" },
  { img: lirio, name: "Lírio", price: "R$35,00" },
];

const carouselProducts = [
  { img: produto4, name: "Buquê de Girassóis e Rosas Vermelhas", price: "A partir de R$ 65,00" },
  { img: produto5, name: "Buquê de Rosas Vermelhas com Chuva-de-Prata", price: "A partir de R$ 100,00" },
  { img: produto6, name: "Buquê de Rosas Vermelhas e Margaridas", price: "A partir de R$ 150,00" },
  { img: produto7, name: "Buquê Grande de Girassóis, Rosas e Flores do Campo", price: "A partir de R$ 415,00" },
  { img: produto8, name: "Buquê Médio de Lírios Cor-de-Rosa e Girassóis", price: "A partir de R$ 200,00" },
  { img: produto9, name: "Buquê Pequeno de Lírios Brancos e Margaridas Pink", price: "A partir de R$ 90,00" },
  { img: produto10, name: "Minibuquê de Girassol e Crisântemos Coloridos", price: "A partir de R$ 50,00" },
];

const diversosProducts = [
  { img: produto11, name: "Buquê Romântico de Rosas e Astromélias", price: "A partir de R$ 75,00" },
  { img: produto12, name: "Buquê Delicado de Flores do Campo", price: "A partir de R$ 60,00" },
  { img: produto13, name: "Buquê Especial de Gérberas Coloridas", price: "A partir de R$ 85,00" },
  { img: produto14, name: "Buquê Sofisticado de Lírios e Rosas", price: "A partir de R$ 120,00" },
  { img: produto15, name: "Buquê Encantado de Margaridas e Cravos", price: "A partir de R$ 70,00" },
];

const Catalog = () => {
  return (
    <main className="pt-24 pb-16 bg-purple-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">Nosso Catálogo</h1>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Escolha suas flores favoritas e monte o buquê perfeito. Personalize a quantidade como desejar.
          </p>
        </div>

        {/* Botão Solitário */}
        <section id="rosas" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            🌷 Botão Solitário
          </h2>
          <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
            Flores individuais perfeitas para compor seu arranjo personalizado.
          </p>
          <ProductCarousel products={solitarioProducts} />
        </section>

        {/* Carousel de Produtos */}
        <section id="buques" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            💐 Nossos Buquês
          </h2>
          <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
            Descubra composições únicas feitas com carinho para cada ocasião.
          </p>
          <ProductCarousel products={carouselProducts} />
        </section>

        {/* Buquês Diversos */}
        <section id="diversos" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            🌸 Buquês Diversos
          </h2>
          <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
            Explore diferentes combinações de flores para todas as ocasiões.
          </p>
          <ProductCarousel products={diversosProducts} />
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
