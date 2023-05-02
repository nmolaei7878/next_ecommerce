import Header from "@/components/shared/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "@/store/store";
import { ModalContextProvider } from "@/store/context/modal-context";
import { ThemeContextProvider } from "@/store/context/theme-context";
import MenuContext, { MenuContextProvider } from "@/store/context/menu-context";
import Menu from "@/components/shared/Menu";
import { useContext } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const menuContext = useContext(MenuContext);
  return (
    <>
      <ThemeContextProvider>
        <ModalContextProvider>
          <MenuContextProvider>
            {menuContext.showMenu && <Menu />}
            {!menuContext.showMenu && <Header />}
            <Component {...pageProps} />
          </MenuContextProvider>
        </ModalContextProvider>
      </ThemeContextProvider>
    </>
  );
}
