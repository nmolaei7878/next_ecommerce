import React, { useContext } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ModalContext from "@/store/context/modal-context";

const MiddleSide: React.FC = () => {
  const modalContext = useContext(ModalContext);

  return (
    <div className="h-2/6  overflow-hidden relative sm:absolute sm:top-2/4 sm:right-2/4 sm:translate-x-2/4 sm:-translate-y-2/4 sm:w-5/12 sm:h-full  sm:block order-2">
      <div className=" h-full absolute top-2/4 right-2/4 translate-x-2/4 -translate-y-2/4 z-0   bg-blue-500 w-full sm:h-full cone-shape"></div>
      <div className="  w-full  h-3/3 z-10 sm:absolute sm:top-2/4 sm:right-2/4 sm:translate-x-2/4 sm:-translate-y-1/4 filter grayscale contrast-150 p-2">
        <img
          className="w-full h-full  animate-opacity  "
          alt="a man thinking png"
          src="https://www.freepnglogos.com/uploads/man-png/thinking-man-png-image-without-background-web-icons-png-28.png"
        />
      </div>
      {/* // floats */}
      <div
        onClick={modalContext.toggle}
        className="cursor-pointer sm:hidden  flex items-center gap-2 z-30 absolute bottom-0 left-0  py-4 px-2 text-black"
      >
        <div className="p-2 bg-slate-300 rounded-full">
          <div className="p-1 bg-white text-slate-400 rounded-full">
            <LocalMallIcon fontSize="small" />
          </div>
        </div>

        <div className="px-8 py-3 bg-slate-300 rounded-xl text-sm font-semibold">
          <p>Best Signup</p>
          <div>Offers </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-col bg-slate-300 items-center z-30 absolute top-0 right-0   rounded-2xl py-3 px-2 text-black">
        <p className="font-extrabold text-xl p-1">12M+</p>
        <p className="text-[0.8rem]">Worldwide product </p>
        <p className="text-[0.8rem]">sale per year</p>
      </div>
    </div>
  );
};

export default MiddleSide;
