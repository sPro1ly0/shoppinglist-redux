import React from 'react';
import './App.css';
import store from './store/index';
import { addArticle } from './actions/index';

window.store = store;
window.addArticle = addArticle;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
    </div>
  );
}

export default App;
