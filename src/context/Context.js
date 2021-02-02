import React, { useState } from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [placeHolder, setPlaceholder] = useState("placeholder");

  return (
    <Context.Provider
      value={{
        placeHolder,
        setPlaceholder,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
