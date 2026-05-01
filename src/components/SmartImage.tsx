import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  src: string;
  alt: string;
  /** Above-the-fold images: priority load, no lazy. */
  priority?: boolean;
  /** Wrapper className (controls aspect/size). The img fills the wrapper. */
  wrapperClassName?: string;
}

/**
 * Image with stable layout (fixed wrapper), skeleton placeholder,
 * lazy/eager + decoding="async" + fetchpriority for above-the-fold.
 * Browser cache deduplicates the same src across carousels automatically.
 */
const SmartImage = ({
  src,
  alt,
  priority = false,
  wrapperClassName,
  className,
  ...rest
}: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", wrapperClassName)}>
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted/60 to-muted"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // @ts-expect-error - fetchpriority is a valid HTML attribute
        fetchpriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default SmartImage;
