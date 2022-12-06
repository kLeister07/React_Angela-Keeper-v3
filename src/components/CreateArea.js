import React, { useState } from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
// Fab adds hover effect
import Zoom from '@mui/material/Zoom';
// zoom animates anything it wraps with a zoom effect, uses a prop to identify how to function

function CreateArea(props) {

const [isExpanded, setIsExpanded] = useState(false)

  const [note, setNote] = useState({
    title: '',
    content: ''
})

    function handleChange(event) {
      const { name, value } = event.target;
      setNote((prevNote) => {
        return {
          ...prevNote,
          [name]: value /* [] turns key from string into the value of the passed in name constant  */
        }
      })
    }
  
  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
        title: '',
        content: '',
    });
  }

  function expand() {
    setIsExpanded(true)
  }

    return (
        <div>
            <form className='create-note'>
{isExpanded && <input
                    onChange={handleChange}
                    value={note.title}
                    name='title'
                    placeholder='Title'
                />}
                <textarea
            onChange={handleChange}
            onClick={expand}
                    value={note.content}
                    name='content'
                    placeholder='Take a note...'
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <NoteAddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
