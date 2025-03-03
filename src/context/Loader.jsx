import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loader, setLoaderStatus] = useState(false);

  return (
    <LoaderContext.Provider value={{ loader, setLoaderStatus }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
