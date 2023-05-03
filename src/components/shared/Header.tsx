import React, { useContext } from "react";
import MenuContext from "../../store/context/menu-context";
import ThemeContext from "../../store/context/theme-context";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../util/hooks/hooks";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CardModalContext from "@/store/context/card-modal";

const Header = () => {
  const menuContext = useContext(MenuContext);
  const themeContext = useContext(ThemeContext);
  const cardContext = useContext(CardModalContext);

  const { card } = useAppSelector((state) => state.card);

  return (
    <React.Fragment>
      <header className="sticky top-0 z-50">
        <div className="flex justify-between items-center dark:bg-slate-200 bg-background p-4">
          <div className="flex items-center gap-2 ">
            <div className="cursor-pointer flex items-center gap-2">
              <div
                onClick={themeContext.toggle}
                className="text-slate-100 dark:text-slate-500 text-3xl flex"
              >
                <DarkModeIcon fontSize="inherit" />
              </div>
              <p className="text-2xl text-slate-100 dark:text-slate-500 font-extrabold uppercase">
                fashion
              </p>
            </div>
          </div>
          <div className="flex text-2xl gap-10 items-center justify-center">
            <nav className="sm:block hidden">
              <ul className="flex font-semibold text-2xl gap-16 text-slate-400 ">
                <li>
                  <Link
                    href={"/"}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    href={"/product"}
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    href={"/new"}
                  >
                    New
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    href={"/sales"}
                  >
                    Sales
                  </Link>
                </li>
              </ul>
            </nav>

            <div onClick={cardContext.toggle} className=" sm:px-5 ">
              <div className="cursor-pointer text-slate-100 text-3xl w-28 rounded-md bg-slate-500 flex items-center justify-around">
                <LocalMallIcon fontSize="medium" />
                <p className="text-[1.5rem]">{card.length}</p>
              </div>

              {
                <div
                  onClick={menuContext.toggle}
                  className={`sm:hidden block ml-3 cursor-pointer  ${
                    menuContext.showMenu ? "text-slate-400" : "text-red-400"
                  } `}
                >
                  menu
                </div>
              }
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
