import React, { useState } from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [placeHolder, setPlaceholder] = useState("placeholder");
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Context.Provider
      value={{
        placeHolder,
        setPlaceholder,
        scrollTop
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
