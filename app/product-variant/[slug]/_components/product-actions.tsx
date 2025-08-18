"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import AddProductToCart from "./add-product-to-cart";

interface ProductActionProps {
  productVariantId: string;
}

const ProductAction = ({ productVariantId }: ProductActionProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  return (
    <>
      {/* Layout Mobile */}
      <div className="lg:hidden">
        <div className="px-5">
          <div className="space-y-4">
            <h3 className="font-medium">Quantidade</h3>
            <div className="flex w-[100px] items-center justify-between rounded-lg">
              <Button
                onClick={handleDecreaseQuantity}
                size="icon"
                variant="ghost"
              >
                <MinusIcon />
              </Button>
              <p>{quantity}</p>
              <Button
                onClick={handleIncreaseQuantity}
                size="icon"
                variant="ghost"
              >
                <PlusIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 px-5">
          <AddProductToCart
            productVariantId={productVariantId}
            quantity={quantity}
          />
          <Button className="rounded-full" size="lg">
            Comprar Agora
          </Button>
        </div>
      </div>

      {/* Layout Desktop */}
      <div className="hidden space-y-6 lg:block">
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-900">Quantidade</h3>
          <div className="flex w-32 items-center justify-between rounded-lg border border-gray-300 px-3 py-2">
            <Button
              onClick={handleDecreaseQuantity}
              size="icon"
              variant="ghost"
              className="h-8 w-8"
            >
              <MinusIcon className="h-4 w-4" />
            </Button>
            <span className="font-medium">{quantity}</span>
            <Button
              onClick={handleIncreaseQuantity}
              size="icon"
              variant="ghost"
              className="h-8 w-8"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:flex-row">
          <AddProductToCart
            productVariantId={productVariantId}
            quantity={quantity}
          />
          <Button className="rounded-full" size="lg">
            Comprar Agora
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductAction;
