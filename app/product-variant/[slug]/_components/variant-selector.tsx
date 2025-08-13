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
    <div className="flex items-center gap-4">
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
  );
};

export default VariantSelector;
