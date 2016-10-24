import {KEY_PRESSED, KEY_RELEASED} from '../actions/notes_actions.js';
// import KEY_RELEASED from '../actions/notes_actions.js';
import NOTE_NAMES from '../util/tones';

const _defaultState = {
  notes: []
};

const notesReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case KEY_PRESSED:

      if ( !NOTE_NAMES.includes(action.key) ) {
        return oldState;
      }

      return {
        notes: [...oldState.notes, action.key]
      };
    case KEY_RELEASED:
      if ( !NOTE_NAMES.includes(action.key) ) {
        return oldState;
      }

      let result = oldState.notes.indexOf(action.key);

      if (result === -1) {
        return oldState;
      } else {
        let newArray = [];
        newArray = newArray.concat(oldState.notes.slice(0,result));
        newArray = newArray.concat( oldState.notes.slice( (result+1) ) );

        return {
          notes: newArray
        };
      }

    default:
      return oldState;
  }
};

export default notesReducer;
