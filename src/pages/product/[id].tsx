import ProductService from "@/services/product_service";
import ProductModel from "@/types/product";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/util/hooks/hooks";
import { addToCard } from "@/store/slices/card-slice";

interface Props {
  children?: React.ReactNode;
  product: ProductModel;
}

const CollectionDetail: React.FC<Props> = (props) => {
  const product = props.product;
  const { card } = useAppSelector((state) => state.card);

  const [exsist, setExsist] = useState(false);

  useEffect(() => {
    const exsist = card.find((e) => e.title === props.product.title);

    if (exsist) {
      setExsist(true);
    } else {
      setExsist(false);
    }
  }, [exsist, card.length, card]);

  const dispatch = useAppDispatch();

  function onAddToCard() {
    dispatch(addToCard(product));
    setExsist(true);
  }

  return (
    <>
      <section className="w-screen h-screen">
        <div className="grid sm:grid-cols-2 grid-cols-1 py-10 px-6 justify-items-center h-full">
          <div className="filter grayscale h-5/6 w-2/3">
            <Image
              width={500}
              height={500}
              className="rounded-3xl h-full w-full"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div>
            <h1 className="text-slate-600 font-bold text-[3rem]">
              {product.title}
            </h1>
            <h3 className="text-slate-600 text-xl mt-10">{product.title} </h3>
            {
              <button
                onClick={onAddToCard}
                className={`p-4  text-slate-100 font-bold w-64 mt-10 ${
                  exsist ? "bg-zinc-700" : "bg-slate-900"
                }`}
              >
                {exsist ? "1 Added to Card" : "Add to Card"}
              </button>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
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
