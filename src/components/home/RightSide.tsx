import { useRouter } from "next/router";
import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const RightSide: React.FC = () => {
  const router = useRouter();

  return (
    <div className=" leading-tight sm:leading-none sm:px-10 flex flex-col gap-4 order-1 sm:order-none">
      <p className="text-[2.5rem] font-medium">
        SPECIAL OFFER <br></br>
      </p>
      <p className="text-[5rem] dark:text-yellow-500 text-yellow-400 font-extrabold">
        Fashion <br></br>Sale
      </p>
      <button
        onClick={() => {
          router.push("/product");
        }}
        className="p-4 bg-slate-300 text-black font-bold w-52 sm:hidden block"
      >
        Start Shopping
      </button>
    </div>
  );
};

export default RightSide;
