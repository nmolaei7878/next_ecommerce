import React, { FormEventHandler, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import ModalContext from "../../store/context/modal-context";
import CloseIcon from "@mui/icons-material/Close";

const AuthModal: React.FC = () => {
  const modalElement = document.getElementById("modal") as HTMLElement;
  const overlayElement = document.getElementById("overlay") as HTMLElement;
  const modalContext = useContext(ModalContext);

  const name = useRef<HTMLInputElement>(null);
  const job = useRef<HTMLInputElement>(null);

  const onSubmits: FormEventHandler = (event) => {
    event.preventDefault();
  };

  const ModalOverlay = () => {
    return (
      <div className="w-screen h-screen opacity-80 bg-black fixed  right-0 top-0 z-70"></div>
    );
  };

  const ModalContent = () => {
    return (
      <div className=" w-5/6 sm:w-1/3 h-[35rem] bg-background dark:bg-slate-300 rounded-3xl flex flex-col items-center justify-evenly text-white  z-80 fixed right-1/2 top-1/2 translate-x-2/4 -translate-y-2/4 ">
        <div
          onClick={modalContext.toggle}
          className=" text-gray-600 dark:text-slate-200 cursor-pointer dark:bg-background bg-slate-200 rounded-full p-2 z-80 absolute -left-5 -top-6 "
        >
          <CloseIcon fontSize="large" />
        </div>
        {
          <>
            <div className=" flex items-center justify-center flex-col gap-5">
              <div className="cursor-pointer flex items-center gap-2"></div>

              <p className="animate-opacity text-gray-500 text-3xl font-bold text-center">
                Welcome to <strong className="text-yellow-500">Fashion</strong>
              </p>
              <p className="animate-top text-gray-500 text-center text-xl">
                please fill the form to create <br /> your profile
              </p>
            </div>

            <form
              onSubmit={onSubmits}
              className="w-screen items-center justify-evenly flex flex-col gap-6"
            >
              <div className="flex flex-col w-5/6 sm:w-1/3 gap-2 px-6">
                <label className="text-gray-400" htmlFor="name">
                  Name
                </label>
                <input
                  ref={name}
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  className="p-3 w-full rounded-lg bg-transparent border-[0.1rem] border-gray-400"
                />
              </div>
              <div className="flex flex-col w-5/6 sm:w-1/3 gap-2 px-6">
                <label className="text-gray-400" htmlFor="job">
                  Job
                </label>
                <input
                  ref={job}
                  type="text"
                  id="job"
                  placeholder="software developer"
                  className="p-3 w-full rounded-lg bg-transparent border-[0.1rem] border-gray-400"
                />
              </div>

              <div className="p-8 w-5/6 sm:w-1/3">
                <button className="animate-opacity bg-blue-500 w-full h-14 rounded-xl">
                  Sign in
                </button>
              </div>
            </form>
          </>
        }
      </div>
    );
  };

  return (
    <>
      {createPortal(<ModalOverlay />, overlayElement)}
      {createPortal(<ModalContent />, modalElement)}
    </>
  );
};
export default AuthModal;
