import { createContext, useContext } from "react";

interface INameContext {
  name: string;
  setName: any;
}

export const NameContext = createContext<INameContext>({
  name: "",
  setName: null,
});

export const useUser = () => useContext(NameContext);
