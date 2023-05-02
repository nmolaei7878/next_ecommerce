import React from "react";

const LeftSide: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col gap-10 ml-8 order-3 sm:order-none">
      <p className="text-[2.4rem] font-bold">Trendy Collection</p>
      <p className="font-semibold text-lg">
        Seedliy say has suitable disposal and boy. <br></br> Exerise joy man
        children rejoiced.
      </p>
      <button className="p-4 bg-slate-300 text-black font-bold w-52 sm:block hidden">
        Start Shopping
      </button>
      <div className="flex gap-10">
        <div className="text-center">
          <p className="font-bold text-[2.4rem]">100k</p>
          <p>Happy Customer</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-[2.4rem]">1.5m</p>
          <p>Monthly traffic</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
