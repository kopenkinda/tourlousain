import React from 'react';

export interface Props {
  children: React.ReactNode | React.ReactNodeArray;
  onClick: () => void;
}

export const Button: React.FC<Props> = ( props ) => {
  return <button onClick={ props.onClick }> { props.children } </button>;
};
