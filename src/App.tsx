import React, { useEffect, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import { BtnClickCount } from './UI/BtnClickCount';
import { AppState } from './State/AppState';
import { makeAutoObservable, observable } from 'mobx';

interface AppProps {}

const globalState = observable({
  appState: makeAutoObservable(new AppState())
})

function App({}: AppProps) {

  const appState = globalState.appState
  const onClick = () => appState.addClick()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          State does not reset on update! cool!
        </p>
        <p>
          <BtnClickCount onClick={onClick} count={appState.clickCount} />
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default observer(App);
