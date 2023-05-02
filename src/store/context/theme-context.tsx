import React from "react";

type ThemeContextObject = {
  toggle: () => void;
};

const ThemeContext = React.createContext<ThemeContextObject>({
  toggle: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const ThemeContextProvider: React.FC<Props> = (props) => {
  let isDarkMode = false;

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    console.log("THEME");

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  const contextValue: ThemeContextObject = {
    toggle: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
