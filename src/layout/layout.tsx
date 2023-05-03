import React from "react";
import MenuContext from "@/store/context/menu-context";
import Menu from "@/components/shared/Menu";
import { useContext } from "react";
import Header from "@/components/shared/Header";
import AuthModal from "@/components/shared/Auth";
import ModalContext from "@/store/context/modal-context";
import CardModalContext from "@/store/context/card-modal";
import CardModal from "@/components/shared/Card";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const menuContext = useContext(MenuContext);
  const modalContext = useContext(ModalContext);
  const cardContext = useContext(CardModalContext);

  return (
    <>
      {menuContext.showMenu && <Menu />}
      {!menuContext.showMenu && <Header />}
      {modalContext.showModal && <AuthModal />}
      {cardContext.showModal && <CardModal />}

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
