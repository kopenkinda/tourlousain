import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { HashRouter, Switch } from 'react-router-dom';
import { GlobalState } from './components/core/GlobalState/GlobalState';

import { AboutPage } from './pages/About.page';
import { Homepage } from './pages/Home.page';

import styles from './App.module.scss';
import './styles/global/typography.scss';

const App: React.FC = () => {

  return (
    <React.StrictMode>
      <GlobalState>
        <HashRouter>
          <h1 className={ styles.h1 }>Styled h1</h1>
          <Switch>
            <Route path="/" exact><Homepage /></Route>
            <Route path="/about" exact><AboutPage /></Route>
          </Switch>
        </HashRouter >
      </GlobalState>
    </React.StrictMode>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById( 'root' )
);
