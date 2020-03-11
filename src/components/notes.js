import React from 'react'
import Note from '../components/note';

function Notes({notes}) {

  notes = notes.map((note, index) => {
    return <Note note={note} key={index} />
  });

  return (
    <div className={'notes'}>
      {notes}
    </div>
  )
}

export default Notes;
