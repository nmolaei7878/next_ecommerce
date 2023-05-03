import React from "react";

type CardModalContextObj = {
  showModal: boolean;
  toggle: () => void;
};

const CardModalContext = React.createContext<CardModalContextObj>({
  showModal: false,
  toggle: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const CardModalContextProvider: React.FC<Props> = (porps) => {
  const [showModal, setShowModal] = React.useState(false);

  function toggle() {
    setShowModal((pervState) => (pervState = !pervState));
    if (showModal) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  const contextValue: CardModalContextObj = {
    toggle,
    showModal,
  };

  return (
    <CardModalContext.Provider value={contextValue}>
      {porps.children}
    </CardModalContext.Provider>
  );
};

export default CardModalContext;
