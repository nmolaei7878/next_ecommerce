import React from "react";

type ModalContextObj = {
  showModal: boolean;
  toggle: () => void;
};

const ModalContext = React.createContext<ModalContextObj>({
  showModal: false,
  toggle: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const ModalContextProvider: React.FC<Props> = (porps) => {
  const [showModal, setShowModal] = React.useState(false);

  function toggle() {
    setShowModal((pervState) => (pervState = !pervState));
  }

  const contextValue: ModalContextObj = {
    toggle,
    showModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {porps.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
