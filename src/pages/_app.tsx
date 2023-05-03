import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "@/store/store";
import { ModalContextProvider } from "@/store/context/modal-context";
import { ThemeContextProvider } from "@/store/context/theme-context";
import { MenuContextProvider } from "@/store/context/menu-context";
import { Provider } from "react-redux";
import Layout from "@/layout/layout";
import { CardModalContextProvider } from "@/store/context/card-modal";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeContextProvider>
          <MenuContextProvider>
            <ModalContextProvider>
              <CardModalContextProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </CardModalContextProvider>
            </ModalContextProvider>
          </MenuContextProvider>
        </ThemeContextProvider>
      </Provider>
    </>
  );
}
