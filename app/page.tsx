import { desc } from "drizzle-orm";
import Image from "next/image";

import Brands from "./_components/brands";
import CategorySelector from "./_components/category-selector";
import Footer from "./_components/footer";
import { Header } from "./_components/header";
import ProductList from "./_components/product-list";
import { db } from "./_db";
import { productTable } from "./_db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});
  return (
    <>
      <Header />
      <div className="space-y-6 px-5">
        <Image
          src="/frame.png"
          alt="Frame"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
        <Brands />

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>
        <Image
          src="/banner.png"
          alt="Frame"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />

        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
