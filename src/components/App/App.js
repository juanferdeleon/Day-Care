import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import './App.css';
import RegisterBaby from '../Register/index';

const store = configureStore();

function App() {
  return (
    <Provider store = {store}>
      <RegisterBaby/>
    </Provider>
  );
}

export default App;
