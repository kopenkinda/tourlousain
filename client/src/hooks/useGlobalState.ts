import { useContext } from 'react';
import { GlobalContext } from '../components/core/GlobalState/GlobalState.context'


export const useGlobalState = () => {
  const {state, setState} = useContext(GlobalContext);
  return {
    globalState: state,
    setGlobalState: setState,
  }
}