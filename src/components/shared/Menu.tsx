import React, { useContext } from "react";
import MenuContext from "../../store/context/menu-context";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const Menu = () => {
  const menuContext = useContext(MenuContext);

  return (
    <>
      <div className="h-full w-full bg-slate-800 dark:bg-slate-200 fixed  right-0 top-0 z-60  p-10">
        <div
          onClick={menuContext.toggle}
          className="sm:hidden block ml-3 cursor-pointer dark:text-slate-400 text-slate-200"
        >
          <CloseIcon fontSize="large" />
        </div>

        <ul className="flex flex-col font-semibold text-2xl gap-6 items-center text-slate-200 dark:text-slate-500">
          <li className="">
            <Link onClick={menuContext.toggle} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={menuContext.toggle} href={"/product"}>
              Collections
            </Link>
          </li>
          <li>
            <Link onClick={menuContext.toggle} href={"/new"}>
              New
            </Link>
          </li>
          <li>
            <Link onClick={menuContext.toggle} href={"/sales"}>
              Sales
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
