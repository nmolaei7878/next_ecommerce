import React, { useContext } from "react";
import MenuContext from "../../store/context/menu-context";
import ThemeContext from "../../store/context/theme-context";
import Link from "next/link";

const Header = () => {
  const menuContext = useContext(MenuContext);
  const themeContext = useContext(ThemeContext);

  return (
    <React.Fragment>
      <header className="sticky top-0 z-50">
        <div className="flex justify-between items-center dark:bg-slate-200 bg-background p-4">
          <div className="flex items-center gap-2 ">
            <div className="cursor-pointer flex items-center gap-2">
              <p
                onClick={themeContext.toggle}
                className="text-2xl text-white font-extrabold uppercase"
              >
                fashion
              </p>
            </div>
          </div>
          <div className="flex text-2xl gap-10">
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
                <li>ENG</li>
              </ul>
            </nav>
            <div className="flex gap-1 sm:px-10 items-center justify-start ">
              {/* <div className={`cursor-pointer ${authContext.isLoggedIn ? `text-blue-400` : ` text-slate-400`}` } onClick={onClickCard}>
      <UilShoppingBag size="30"  />
      </div> */}
              <div className="cursor-pointer text-slate-400"></div>
              <div
                onClick={menuContext.toggle}
                className="sm:hidden block ml-3 cursor-pointer text-slate-400"
              >
                menu
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
