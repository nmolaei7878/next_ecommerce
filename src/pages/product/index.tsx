import { GetStaticProps } from "next";
import Man2 from "../../../public/images/model-11.jpg";
import ListTile from "../../components/product/ListTile";
import Image from "next/image";
import ProductService from "@/services/product_service";
import ProductModel from "@/types/product";
import { useEffect } from "react";

interface Props {
  children?: React.ReactNode;
  products: Array<ProductModel>;
}
const Collection: React.FC<Props> = (props) => {
  const products = props.products;
  return (
    <>
      <section
        className={`w-screen sm:h-screen h-[60rem] bg-cover  dark:bg-slate-200 bg-background bg-center   text-white px-10 pt-4 flex flex-col gap-10 sm:gap-6 sm:flex-row `}
      >
        <div className="sm:w-3/6 sm:h-5/6 h-2/3 w-full flex items-center justify-center  ">
          <div className="w-full h-full  rounded-3xl bg-man-5 bg-cover filter grayscale">
            <div className="w-full h-full  rounded-3xl relavtive animate-opacity">
              <p className="-rotate-90 uppercase text-[2.3rem] sm:text-[3rem] text-gray-700 absolute left-8 bottom-24  -translate-y-2/4 -translate-x-2/4">
                man fashion
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-4/6 sm:h-5/6 h-2/3 flex-col text-left  flex items-center justify-center gap-6 ">
          <div className="w-full h-4/6 bg-slate-800 rounded-3xl flex flex-col items-center sm:items-start justify-evenly px-8 ">
            <p className="sm:text-[3.5rem] text-3xl leading-tight uppercase font-bold animate-opacity text-gray-500">
              {" "}
              best style for{" "}
              <strong className="font-semibold text-blue-600">
                {" "}
                <br /> inspiration
              </strong>{" "}
              women{" "}
            </p>
            <p className="text-xl text-center capitalize font-medium animate-opacity text-gray-500">
              {" "}
              Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit
              .consectetur elit Optio, !<br />
              Lorem ipsum dolor, sit amet consectetur{" "}
            </p>
          </div>
          <div className="w-full h-2/6 rounded-3xl relative ">
            <Image
              className="w-full h-full object-cover rounded-3xl "
              src={Man2}
              alt=""
            />
          </div>
        </div>
      </section>

      <div
        className={`bg-cover w-full dark:bg-slate-200 bg-background bg-center text-white pt-20 sm:pt-0 p-4  `}
      >
        {products.length && (
          <div className=" items-center justify-center gap-6 sm:gap-10 grid sm:grid-cols-5 grid-cols-2">
            {products.map((product) => {
              return <ListTile key={product.id} productModel={product} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Collection;

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await ProductService.getAllProducts();

  return {
    props: { products },
  };
};
