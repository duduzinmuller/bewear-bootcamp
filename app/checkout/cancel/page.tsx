"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/app/_components/header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

const CheckoutCancelPage = () => {
  return (
    <>
      <Header />
      <Dialog open={true} onOpenChange={() => {}}>
        <DialogContent className="text-center">
          <Image
            src="/cancel.svg"
            alt="Pedido cancelado"
            width={200}
            height={200}
            className="mx-auto"
          />
          <DialogTitle className="mt-4 text-2xl">Pedido cancelado</DialogTitle>
          <DialogDescription className="font-medium">
            O pagamento foi cancelado e seu pedido não foi concluído. Você pode
            tentar novamente ou voltar para a loja.
          </DialogDescription>

          <DialogFooter>
            <Button className="rounded-full" size="lg" asChild>
              <Link href="/cart/confirmation">Tentar novamente</Link>
            </Button>
            <Button
              className="rounded-full"
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/">Voltar para a loja</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckoutCancelPage;
