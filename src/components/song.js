import React from 'react'
import Notes from '../components/notes'
import Text from '../components/text'
import {TYPES} from "../js/constants";

function Song({song}) {

  const lines = song.map((line, index) => {
    return line.type === TYPES.notes ? <Notes notes={line.value} key={index}/> : <Text text={line.value} key={index}/>
  });

  return (
    <div id={'board'} >
      {lines}
    </div>
  )
}

export default Song;
