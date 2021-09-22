import { ReactNode, createContext } from "react";
import { useState } from "react";

type UserAttributesContextData = {
  addExp: (expPoints: number) => void;
  exp: number;
};

type UserAttributesProviderProps = {
  children: ReactNode;
};

export const UserAttributesContext = createContext(
  {} as UserAttributesContextData
);

export function UserAttributesProvider({ children }: UserAttributesProviderProps) {
  const [exp, setExp] = useState(10);

  function addExp(points: number){
    setExp(exp + points);
  }

  return (
    <UserAttributesContext.Provider value={{ exp, addExp }}>
      {children}
    </UserAttributesContext.Provider>
  );
}
