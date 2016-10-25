import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';

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
    return (
      <div>
        <ul>
          {this.notes.map( (note, index) => (
            <li key={ index }>{ NOTE_NAMES[index] }</li>
          ) ) }
        </ul>
      </div>
    );
  }
}

export default Synth;
