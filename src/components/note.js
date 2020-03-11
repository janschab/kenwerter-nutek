import React from 'react'

function Note({note}) {

  let className = 'notes__note';

  for (let i = -5; i <= 5; i++) {
    if (note.indexOf(String(i)) !== -1) {
      note = note.replace(String(i), '');
      className += ' notes__note--' + String(i);
      break;
    }
  }

  return (
    <span className={className}>
      {note}
    </span>
  )
}

export default Note;
