import ProductCarousel from "@/components/ProductCarousel";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/config/whatsapp";
import { PRODUCTS } from "@/data/products";

const WHATSAPP_LINK = getWhatsAppLink(WHATSAPP_MESSAGES.bouquet);

const solitarioProducts = [
  PRODUCTS.ROSA_COLOMBIANA,
  PRODUCTS.GIRASSOL,
  PRODUCTS.ROSA_NACIONAL,
];

const carouselProducts = [
  PRODUCTS.BUQUE_ROSA_GYPSO,
  PRODUCTS.BUQUE_3ROSAS_3GIRASSOIS,
  PRODUCTS.BUQUE_2ROSAS_MIX_P,
  PRODUCTS.BUQUE_7ROSAS_5GIRASSOIS,
  PRODUCTS.BUQUE_2ROSAS_MIX_MINI,
  PRODUCTS.BUQUE_PINK_MIX_MINI,
  PRODUCTS.BUQUE_ROSAS_ASTER,
];

const diversosProducts = [
  PRODUCTS.DIV_VERMELHO_MIX_MINI,
  PRODUCTS.DIV_LIRIO_MIX_MINI,
  PRODUCTS.DIV_LIRIO_ROSA_MIX_M,
  PRODUCTS.DIV_GIRASSOL_MIX_MINI,
  PRODUCTS.DIV_2LIRIOS_GIRASSOL_MIX_M,
  PRODUCTS.DIV_2LIRIOS_VERMELHO_MIX_P,
  PRODUCTS.DIV_MIX_GIRASSOL_GERBERA,
  PRODUCTS.DIV_LIRIO_GIRASSOL_MIX_P,
  PRODUCTS.DIV_LIRIO_PINK_MIX_P,
  PRODUCTS.DIV_MIX_M,
  PRODUCTS.DIV_3LIRIOS_MIX_G,
  PRODUCTS.DIV_LIRIO_VERMELHO_MIX_P,
  PRODUCTS.DIV_LIRIO_BRANCO_MIX_M,
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
            💐 Buquês de Rosas e Combinações
          </h2>
          <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
            Descubra combinações únicas de rosas com outras flores, criadas com carinho para cada ocasião.
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
