import React from 'react';
import { Link } from 'react-router-dom';
import { Counter } from '../components/custom/Counter';
import { useGlobalState } from '../hooks/useGlobalState';

export const Homepage = () => {
  const { globalState } = useGlobalState();
  return (
    <div>
      <h1>Homepage { globalState.counter } </h1>
      <Link to="/about">About</Link>
      <Counter />
    </div>
  );
};
