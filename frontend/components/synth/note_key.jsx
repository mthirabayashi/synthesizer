import React from 'react';

const NoteKey = ({note, pressed}) => {
  return(
    <li className={pressed}>{ note }</li>
    );
};

export default NoteKey;
