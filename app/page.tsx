import { desc } from "drizzle-orm";
import Image from "next/image";

import Brands from "./_components/brands";
import CategoryDesktop from "./_components/category-desktop";
import CategorySelector from "./_components/category-selector";
import Footer from "./_components/footer";
import Header from "./_components/header";
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
        <div className="mx-12 hidden px-8 md:block">
          <CategoryDesktop categories={categories} />
        </div>

        <Image
          src="/frame.png"
          alt="Frame"
          width={1200}
          height={600}
          className="h-auto w-full md:hidden"
        />
        <Image
          src="/banner-desktop.png"
          alt="Frame Desktop"
          width={1200}
          height={400}
          className="hidden h-auto w-full md:block"
        />
        <Brands />

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5 md:hidden">
          <CategorySelector categories={categories} />
        </div>
        <Image
          src="/banner.png"
          alt="Frame"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full md:hidden"
        />

        <div className="hidden md:block">
          <div className="mx-6 flex p-5 px-5">
            <div className="flex w-full flex-col gap-4">
              <Image
                src="/NikeTherma.png"
                alt="Nike Therma"
                width={513}
                height={307}
                className="h-[307px] w-[513px] rounded-lg object-cover"
              />
              <Image
                src="/NikeThermaFit.png"
                alt="Nike Therma Fit"
                width={513}
                height={307}
                className="h-[307px] w-[513px] rounded-lg object-cover"
              />
            </div>
            <Image
              src="/Coat.png"
              alt="Coat"
              width={815}
              height={638}
              className="h-[638px] w-[815px] rounded-lg"
            />
          </div>
        </div>

        <div className="md:hidden">
          <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
