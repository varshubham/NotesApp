import React, { useContext, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import Alert from './Alert';

const Addnote = () => {
  const context = useContext(NoteContext);
  const [show, setShow] = useState(false)
  const { notes, addNote } = context;
  const [note, setNote] = useState({ title: "", description: "" })
  const [alerts,setAlerts] = useState(null)
  var stitle = false;
  var desc = false

  const handleclick = (e) => {
    e.preventDefault();
    notes.map((data) => {
      if (data.title === note.title) {
        stitle = true
      }
      return stitle
    })
    
    if(note.title.length < 10)
    {
      if(note.description.length === 0)
      {
          desc=true
      }
    }

    if (!stitle && !desc) {
      addNote(note.title, note.description)
      setAlerts({type:"success",msg:"Todo Added Successfully"})
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 1500);
    }

    if(stitle) {
      setAlerts ({
        type:"danger",
        msg:"Note with this Title Already Exist"
      })
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 1500);
    }


    if(desc && !stitle){
      setAlerts({
        type:"danger",
        msg:"Please add some description"
      })
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 1500);
    }
    
    document.getElementById('form').reset()
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      {show && <Alert alert={alerts} />}
      <div className="container my-3" style={{ width: "60%" }}>
        <h1>Add a Note</h1>
        <form id='form'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" id="desc" name='description' onChange={onChange} />
          </div>


          <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Addnote
