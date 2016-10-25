import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.notes = NOTE_NAMES.map( (name) => (
      new Note(TONES[name])
    ) );
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    // console.log(e.key);
    // debugger;
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    // console.log(e.key);
    this.props.keyReleased(e.key);
  }

  playNotes () {
    let tones = TONES;

    this.notes.forEach( (note) => {
      note.stop();
      this.props.notes.forEach( (noteKey) => {
        if (tones[noteKey] === note.freq) {
          note.start();
        }
      });
    });
  }

  render() {
    console.log("render entered");
    this.playNotes();

    let pressed = {

    };

    this.props.notes.forEach( (note) => (
      pressed[note] = true
    ));

    return (
      <div>
        <ul>
          {this.notes.map( (note, index) => (
            <NoteKey key={index} note={NOTE_NAMES[index]} pressed={ pressed[NOTE_NAMES[index]] === true ? true : false }/>
          ) ) }
        </ul>
      </div>
    );
  }
}

export default Synth;
