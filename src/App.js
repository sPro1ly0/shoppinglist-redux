import React from 'react';
import './App.css';
import store from './store/index';
import { addArticle } from './actions/index';
import List from './ShoppingList';
import AddItemForm from './AddItemForm';

window.store = store;
window.addArticle = addArticle;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
      <AddItemForm />
      <List />
    </div>
  );
}

export default App;
