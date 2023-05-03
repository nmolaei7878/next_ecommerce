import React from "react";
import ProductModel from "../../types/product";
import { useRouter } from "next/router";

interface Props {
  children?: React.ReactNode;
  productModel: ProductModel;
}

const ListTile: React.FC<Props> = (props) => {
  const router = useRouter();

  function gotoDetailPage() {
    console.log(props.productModel.id);
    router.push(`/product/${props.productModel.id}`);
  }

  return (
    <>
      <div
        onClick={gotoDetailPage}
        className="w-44 h-44 relative group cursor-pointer "
      >
        <img
          className="w-full h-full rounded-3xl filter grayscale group-hover:scale-105 "
          src={props.productModel.image}
          alt=""
        />
        <div className="hidden p-4 group-hover:block absolute bottom-0 left-0 w-full h-1/3 z-20 rounded-3xl bg-slate-500 opacity-70">
          <p className="text-sm text-white">{props.productModel.title}</p>
        </div>
      </div>
    </>
  );
};

export default ListTile;
