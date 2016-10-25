import {KEY_PRESSED, KEY_RELEASED} from '../actions/notes_actions.js';
// import KEY_RELEASED from '../actions/notes_actions.js';
import {NOTE_NAMES} from '../util/tones';

const _defaultState = []
;

const notesReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case KEY_PRESSED:

      if ( !NOTE_NAMES.includes(action.key) ) {
        return oldState;
      } else if ( oldState.includes(action.key) ) {
        return oldState;
      }
      return [...oldState, action.key];

    case KEY_RELEASED:
      if ( !NOTE_NAMES.includes(action.key) ) {
        return oldState;
      }

      let result = oldState.indexOf(action.key);

      if (result === -1) {
        return oldState;
      } else {
        let newArray = [];
        newArray = newArray.concat(oldState.slice(0,result));
        newArray = newArray.concat( oldState.slice( (result+1) ) );

        return newArray;
      }

    default:
    console.log("default entered");
      return oldState;
  }
};

export default notesReducer;
