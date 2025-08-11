import Image from "next/image";

import Brands from "./_components/brands";
import CategorySelector from "./_components/category-selector";
import Header from "./_components/header";
import ProductList from "./_components/product-list";
import { db } from "./_db";

const Home = async () => {
  const products = await db.query.productTable.findMany({
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
      </div>
    </>
  );
};

export default Home;
