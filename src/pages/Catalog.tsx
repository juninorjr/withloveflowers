import ProductCard from "@/components/ProductCard";
import rosaColombiana from "@/assets/rosa-colombiana.jpg";
import rosaSolitaria from "@/assets/rosa-solitaria.jpg";
import girassol from "@/assets/girassol.jpg";
import bouquetMini from "@/assets/bouquet-mini.jpg";
import bouquetMedio from "@/assets/bouquet-medio.jpg";
import bouquetGrande from "@/assets/bouquet-grande.jpg";
import lirio from "@/assets/lirio.jpg";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20flores.";

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

        {/* Girassóis */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">🌻 Girassóis</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ProductCard image={girassol} name="Girassol" price="R$17" description="Por unidade" />
          </div>
        </section>

        {/* Mix Bouquets */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">💐 Buquês Mix</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ProductCard image={bouquetMini} name="Mini" price="R$50" />
            <ProductCard image={bouquetMini} name="Pequeno" price="R$90" />
            <ProductCard image={bouquetMedio} name="Médio" price="R$200" />
            <ProductCard image={bouquetGrande} name="Grande" price="R$415" />
            <ProductCard image={bouquetGrande} name="Gigante" price="R$750" />
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
