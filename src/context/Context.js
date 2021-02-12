import React from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // const [dataFromBE, setDataFromBe] = useState({})

  return (
    <Context.Provider
      value={{
        scrollTop,
        // setDataFromBe,
        // dataFromBE
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
