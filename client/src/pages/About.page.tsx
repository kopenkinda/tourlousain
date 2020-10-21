import React from 'react';
import { Link } from 'react-router-dom';
import { Counter } from '../components/custom/Counter';

export const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to='/'>Home</Link>
      <Counter />
    </div>
  );
};
