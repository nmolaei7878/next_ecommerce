import React, { useContext } from "react";
import ModalContext from "../../store/context/modal-context";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const FloatBadges: React.FC = () => {
  const modalContext = useContext(ModalContext);

  return (
    <>
      <div
        onClick={modalContext.toggle}
        className=" group sm:flex  hidden items-center gap-5 z-30 absolute bottom-20 right-10 translate-x-4/4   py-8 px-6 text-black"
      >
        <div className=" p-3 bg-slate-300 rounded-full group-hover:bg-yellow-400 cursor-pointer">
          <div className=" p-2 bg-white rounded-full">
            <div className="p-1 bg-white text-slate-400 rounded-full">
              <LocalMallIcon fontSize="medium" />
            </div>
          </div>
        </div>
        <div className="px-10 py-3 bg-slate-300 rounded-3xl text-lg group-hover:bg-yellow-400 cursor-pointer">
          <p>Best Signup</p>
          <div>Offers </div>
        </div>
      </div>

      <div className=" sm:flex  hidden flex-col bg-slate-300 items-center z-30 absolute top-0 right-[10rem] rounded-2xl py-4 px-5 text-black">
        <p className="font-extrabold text-3xl p-2">12M+</p>
        <p>Worldwide product </p>
        <p>sale per year</p>
      </div>
    </>
  );
};

export default FloatBadges;
