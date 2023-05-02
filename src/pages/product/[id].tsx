import ProductService from "@/services/product_service";
import ProductModel from "@/types/product";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Image from "next/image";

interface Props {
  children?: React.ReactNode;
  product: ProductModel;
}

const CollectionDetail: React.FC<Props> = (props) => {
  const product = props.product;
  console.log(product);
  return (
    <>
      <section className="w-screen h-screen">
        <div className="grid grid-cols-2 py-10 px-6 justify-items-center h-full">
          <div className="filter grayscale h-5/6 w-2/3">
            <Image
              width={500}
              height={500}
              className="rounded-3xl h-full w-full"
              src={product.image}
              alt="product image"
            />
          </div>
          <div>
            <h1 className="text-slate-600 font-bold text-[3rem]">
              {product.title}
            </h1>
            <h3 className="text-slate-600 text-xl mt-10">{product.title} </h3>
            <button className="p-4 bg-slate-900 text-slate-100 font-bold w-64 mt-10 ">
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  console.log(id);
  const product = await ProductService.getProduct(id);

  return {
    props: { product },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
};
