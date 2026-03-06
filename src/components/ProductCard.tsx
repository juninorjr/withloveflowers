interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
  description?: string;
}

const ProductCard = ({ image, name, price, oldPrice, description }: ProductCardProps) => (
  <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
    <div className="aspect-square overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
      {description && <p className="text-muted-foreground text-sm font-body mt-1">{description}</p>}
      <div className="mt-2 flex items-center justify-center gap-2">
        {oldPrice && (
          <span className="text-muted-foreground line-through text-sm font-body">{oldPrice}</span>
        )}
        <span className="text-primary font-bold font-body text-lg">{price}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;
