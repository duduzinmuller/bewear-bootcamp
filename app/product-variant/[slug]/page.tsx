import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/app/_components/footer";
import { Header } from "@/app/_components/header";
import ProductList from "@/app/_components/product-list";
import { db } from "@/app/_db";
import { productTable, productVariantTable } from "@/app/_db/schema";
import { formatCentsToMoney } from "@/app/helpers/money";

import ProductAction from "./_components/product-actions";
import VariantSelector from "./_components/variant-selector";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });

  if (!productVariant) {
    return notFound();
  }
  const likelyProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, productVariant.product.categoryId),
    with: {
      variants: true,
    },
  });

  return (
    <>
      <Header />

      {/* Layout Mobile - exatamente como está */}
      <div className="flex flex-col space-y-6 lg:hidden">
        <Image
          src={productVariant.imageUrl}
          alt={productVariant.name}
          sizes="100vw"
          height={0}
          width={0}
          className="h-auto w-full object-cover"
        />

        <div className="px-5">
          <VariantSelector
            selectedVariant={productVariant.slug}
            variants={productVariant.product.variants}
          />
        </div>

        <div className="px-5">
          <h2 className="text-lg font-semibold">
            {productVariant.product.name}
          </h2>
          <h3 className="text-muted-foreground text-sm">
            {productVariant.name}
          </h3>
          <h3 className="mt-2 text-lg font-semibold">
            {formatCentsToMoney(productVariant.priceInCents)}
          </h3>
        </div>

        <ProductAction productVariantId={productVariant.id} />

        <div className="px-5">
          <p className="text-sm">{productVariant.product.description}</p>
        </div>

        <ProductList products={likelyProducts} title="Talvez você goste" />

        <Footer />
      </div>

      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={productVariant.imageUrl}
                  alt={productVariant.name}
                  sizes="50vw"
                  height={600}
                  width={600}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {productVariant.product.name}
                </h1>
                <h2 className="text-muted-foreground mt-1 text-lg">
                  {productVariant.name}
                </h2>
                <p className="mt-4 text-3xl font-bold text-gray-900">
                  {formatCentsToMoney(productVariant.priceInCents)}
                </p>
                <div className="mt-4">
                  <VariantSelector
                    selectedVariant={productVariant.slug}
                    variants={productVariant.product.variants}
                  />
                </div>
              </div>

              <ProductAction productVariantId={productVariant.id} />

              <div className="border-t pt-6">
                <h3 className="mb-3 text-sm font-medium text-gray-900">
                  Descrição do Produto
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {productVariant.product.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <ProductList products={likelyProducts} title="Talvez você goste" />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProductVariantPage;
