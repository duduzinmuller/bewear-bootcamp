import Image from "next/image";
import Link from "next/link";

import { productVariantTable } from "@/app/_db/schema";

interface VariantSelectorProps {
  selectedVariant: string;
  variants: (typeof productVariantTable.$inferSelect)[];
}

const VariantSelector = ({
  variants,
  selectedVariant,
}: VariantSelectorProps) => {
  return (
    <>
      {/* Layout Mobile */}
      <div className="flex items-center gap-4 lg:hidden">
        {variants.map((variant) => (
          <Link href={`/product-variant/${variant.slug}`} key={variant.id}>
            <Image
              src={variant.imageUrl}
              alt={variant.name}
              width={68}
              height={68}
              className={
                selectedVariant === variant.slug
                  ? "border-primary rounded-xl border-2"
                  : ""
              }
            />
          </Link>
        ))}
      </div>

      {/* Layout Desktop */}
      <div className="hidden flex-wrap items-center gap-3 lg:flex">
        {variants.map((variant) => (
          <Link href={`/product-variant/${variant.slug}`} key={variant.id}>
            <div
              className={`overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 ${
                selectedVariant === variant.slug
                  ? "ring-primary ring-2 ring-offset-2"
                  : "ring-1 ring-gray-200 hover:ring-gray-300"
              }`}
            >
              <Image
                src={variant.imageUrl}
                alt={variant.name}
                width={80}
                height={80}
                className="h-20 w-20 object-cover object-center"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default VariantSelector;
