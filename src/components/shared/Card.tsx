import React, { useContext } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "@/util/hooks/hooks";
import CardModalContext from "@/store/context/card-modal";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CardModal = () => {
  const cardModalElement = document.getElementById("card") as HTMLElement;

  const { card } = useAppSelector((state) => state.card);
  const cardContext = useContext(CardModalContext);

  function Card() {
    return (
      <>
        <div
          onClick={cardContext.toggle}
          className="cursor-pointer flex items-center justify-center z-110 fixed top-10 right-10 text-slate-600 rounded-full bg-slate-200 w-12 h-12"
        >
          <CloseIcon fontSize="large" />
        </div>

        <div className="overflow-hidden  ">
          <div
            className="sm:w-[115rem] sm:h-[115rem] h-[70rem] w-[70rem] sm:-right-1/2 sm:-top-1/2  -right-96 -top-96
           rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]
         from-slate-800 via-blue-500 opacity-100 to-slate-800 fixed z-100 animate-spin-slow"
          ></div>
        </div>
        <div
          className="
          sm:w-3/6 sm:-translate-x-0 sm:right-20
          z-100 w-2/3 h-2/3 
          fixed  top-1/2 -translate-y-2/4 
          translate-x-2/4 right-1/2 "
        >
          <ul className=" overflow-scroll h-screen">
            {card.map((cardItem) => {
              return (
                <div className="flex gap-10 rounded-md shadow-2xl  p-8 text-white ">
                  <div className="w-20 grayscale ">
                    <Image
                      src={cardItem.image}
                      alt={cardItem.title}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div>
                    <p>{cardItem.title.slice(0, 40)}</p>
                    <p>{`$${cardItem.price}`}</p>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  return <>{createPortal(<Card />, cardModalElement)}</>;
};

export default CardModal;
