import React from 'react';
import { useGlobalState } from '../../hooks/useGlobalState';
import { Button } from '../core/Button';

export const Counter = () => {
  const { globalState, setGlobalState } = useGlobalState();
  return (
    <div>
      <p>Count is { globalState.counter }</p>
      <Button onClick={ () => setGlobalState( {
        ...globalState,
        counter: globalState.counter - 1
      } ) }>
        Decrement
      </Button>
      <Button onClick={ () => setGlobalState( {
        ...globalState,
        counter: globalState.counter + 1
      } ) }>
        Increment
      </Button>
    </div >
  );
};
