import Image from "next/image";

import { stripe } from "@/lib/stripe";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Stripe from "stripe";

interface ProductProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export const getServerSideProps = (async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    console.log("rodou");
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: 100,
    };
  });
}) satisfies GetServerSideProps<{ product: ProductProps }>;

export function Product({ products }: ProductProps) {
  return (
    <div className="group bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer relative flex items-center justify-center overflow-hidden">
      {products.map((product) => {
        return (
          <>
            <Image
              className="object-cover"
              src={product.imageUrl}
              width={520}
              height={480}
              alt=""
            />

            <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-black/60 p-4 translate-y-[110%] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <strong className="text-xl">{product.name}</strong>
              <span className="text-2xl font-bold text-emerald-300/80">
                {product.price}
              </span>
            </footer>
          </>
        );
      })}
    </div>
  );
}
