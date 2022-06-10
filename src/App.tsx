import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import { BtnClickCount } from './UI/BtnClickCount';
import { globalStore } from './Stores/globalStore';

interface AppProps {}

function App({}: AppProps) {

  const appStore = globalStore.appStore
  const onClick = () => appStore.addClick()
  
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
          <BtnClickCount onClick={onClick} count={appStore.clickCount} />
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
