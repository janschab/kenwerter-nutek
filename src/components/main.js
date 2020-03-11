import React, {useEffect, useState} from 'react'
import Song from '../components/song';
import {Controlled as CodeMirror} from 'react-codemirror2'

import getSong from '../js/getSongs'

function Main() {

  const [song, setSong] = useState();
  const [code, setCode] = useState();

  const handleSongChange = (e) => {
    setSong(getSong(e.target.value));
  };

  useEffect(() => {
    if (document.getElementById('board')) {
      setCode(document.getElementById('board').innerHTML);
    }
  }, [song]);

  return (
    <div className={'container flex align-items-stretch'}>
      <textarea className={'flex col-sm-4'} name="song" id="song" onChange={handleSongChange} />
      <div className={'flex col-sm-4'}>
        {
          song && <Song song={song} />
        }
      </div>
      <div className="flex col-sm-4">
        <div className={'full-width'}>
          <CodeMirror className={'full-width full-height'}
            value={code}
            options={{
              mode: 'html',
              theme: 'material',
              lineNumbers: true,
              lineWrapping: true,
              readOnly: true
            }}
            onFocus={(editor) => {
              editor.execCommand('selectAll');
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Main;
