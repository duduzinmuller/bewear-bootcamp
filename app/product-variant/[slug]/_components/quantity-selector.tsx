"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Quantidade</h3>
      <div className="flex w-[100px] items-center justify-between rounded-lg">
        <Button onClick={handleDecreaseQuantity} size="icon" variant="ghost">
          <MinusIcon />
        </Button>
        <p>{quantity}</p>
        <Button onClick={handleIncreaseQuantity} size="icon" variant="ghost">
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
