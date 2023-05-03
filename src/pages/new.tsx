import Model1 from "../../public/images/model-1.jpg";
import Model2 from "../../public/images/model-2.jpg";
import Model3 from "../../public/images/model-3.jpg";
import Model4 from "../../public/images/model-4.jpg";
import Model5 from "../../public/images/model-5.jpg";
import Model6 from "../../public/images/man-5.jpg";
import Model7 from "../../public/images/man-2.jpg";
import React, { useEffect } from "react";
import Image from "next/image";

const New: React.FC = () => {
  return (
    <div className="w-screen  dark:bg-slate-200 bg-background dark:text-slate-900 text-white p-6  flex flex-col gap-6 text-center items-center">
      {/* first row */}
      <p className="sm:text-[3.5rem] text-[2.5rem] leading-tight uppercase font-semibold animate-opacity">
        {" "}
        style and{" "}
        <strong className="font-semibold text-blue-400">
          fashion <br /> inspiration
        </strong>{" "}
        man{" "}
      </p>

      {/* second row */}

      <div className=" h-[30rem] gap-3 grid grid-cols-5 items-center w-full sm:w-5/6 ">
        <div className="w-4/6 h-2/6  rounded-3xl justify-self-end ">
          <Image
            className="scale-110 h-full w-full object-cover rounded-3xl animate-right"
            src={Model3}
            alt="model pic"
          />
        </div>

        <div className="h-5/6 flex-col  flex  overflow-hidden items-center justify-center gap-5">
          <Image
            className="h-2/6 w-5/6 object-cover rounded-3xl animate-top"
            src={Model1}
            alt="model pic"
          />
          <Image
            className="h-3/6 w-5/6 object-cover rounded-3xl animate-bottom"
            src={Model2}
            alt="model pic"
          />
        </div>

        <div className="rounded-3xl h-5/6  ">
          <Image
            className="h-full w-full object-cover rounded-3xl animate-bottom"
            src={Model5}
            alt="model pic"
          />
        </div>

        <div className="h-5/6 flex-col  flex  overflow-hidden items-center justify-center gap-5">
          <Image
            className="h-3/6 w-5/6 object-cover rounded-3xl animate-top"
            src={Model4}
            alt="model pic"
          />
          <Image
            className="h-2/6 w-5/6 object-cover rounded-3xl animate-bottom"
            src={Model6}
            alt="model pic"
          />
        </div>

        <div className="w-4/6 h-2/6  rounded-3xl ">
          <Image
            className="scale-110 h-full w-full object-cover rounded-3xl animate-left"
            src={Model7}
            alt="model pic"
          />
        </div>
      </div>
      {/* third row */}
      <div className="w-full flex items-center justify-around text-start">
        <p className="text-xl leading-tight uppercase font-semibold text-slate-300">
          {" "}
          make your fashion look
          <br /> Lorem ipsum dolor sit, amet <br /> adipisicing elit.
          Necessitatibus, .
        </p>
        <p className="text-2xl leading-tight uppercase font-semibold text-slate-300">
          {" "}
          make your fashion look
          <br /> more charming
        </p>
      </div>
    </div>
  );
};

export default New;
