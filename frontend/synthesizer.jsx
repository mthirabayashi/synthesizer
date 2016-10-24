import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note.js';

// const Synth = () => (
//
// );

window.Note = Note;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <div><p>it works!</p></div>, document.getElementById('root')
  );
});
