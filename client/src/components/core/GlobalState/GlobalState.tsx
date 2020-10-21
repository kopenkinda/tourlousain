import React, { useState } from 'react';

import { GlobalContext, IGlobalState } from './GlobalState.context';

export interface Props {
  children: React.ReactNode | React.ReactNodeArray | null;
}

export const GlobalState: React.FC<Props> = ( props ) => {
  const [ state, setState ] = useState<IGlobalState>( {
    counter: 0,
  } );
  return (
    <GlobalContext.Provider value={ { state, setState } }>
      { props.children }
    </GlobalContext.Provider>
  );
};
