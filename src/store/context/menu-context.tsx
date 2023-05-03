import React, { useState } from "react";

type MenuContextObj = {
  showMenu: boolean;
  toggle: () => void;
};

const MenuContext = React.createContext<MenuContextObj>({
  showMenu: false,
  toggle: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const MenuContextProvider: React.FC<Props> = (porps) => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((pervState) => (pervState = !pervState));
    console.log(showMenu);
  }

  const contextValue: MenuContextObj = {
    showMenu,
    toggle: toggleMenu,
  };
  return (
    <MenuContext.Provider value={contextValue}>
      {porps.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
