import { createContext } from "react";

export interface IGlobalContext {
  state: IGlobalState;
  setState: (newState: IGlobalState) => void;
}

export interface IGlobalState {
  counter: number;
}

export const GlobalContext = createContext<IGlobalContext>({
  state: {
    counter: 0,
  },
  setState: (newState: IGlobalState) => void 0,
});