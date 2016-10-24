import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore( {notes: ["a", "s"]} );
  const rootEl = document.getElementById('root');

  ReactDOM.render(<h1> Synthesizer </h1>, rootEl);

  window.store = store;
});
