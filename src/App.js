import React from 'react';
import './App.css';
import store from './store/index';
import { addItem } from './actions/index';
import ShoppingList from './ShoppingList';
import AddItemForm from './AddItemForm';

//test in console
window.store = store;
window.addItem = addItem;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
      <AddItemForm />
      <ShoppingList />
    </div>
  );
}

export default App;
