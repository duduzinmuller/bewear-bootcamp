import Image from "next/image";

import Brands from "./_components/brands";
import Header from "./_components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="space-y-5">
        <Image
          src="/frame.png"
          alt="Frame"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
        <Brands />
      </div>
    </>
  );
}
