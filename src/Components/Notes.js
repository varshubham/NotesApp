import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import Noteitem from './Noteitem'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
    const navigate = useNavigate();
    const context = useContext(NoteContext)
    const ref = useRef(null)
    const refclose = useRef(null)
    const { notes, getNotes, editNote } = context
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "" })
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addnotes = () => {
        navigate('/add')
    }

    const updatenote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description })
    }

    const handleclick = () => {
        editNote(note.id, note.etitle, note.edescription)
        refclose.current.click()
    }


    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    // a modal for editing of the note 
    return (<>
       
        
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
            Launch demo modal
        </button>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="etitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edesc" className="form-label">Description</label>
                                <input type="text" className="form-control" id="edesc" name='edescription' value={note.edescription} onChange={onChange} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" ref={refclose} className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleclick}>Update</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='row my-3' style={{ width: "70%",marginLeft:"auto",marginRight:"auto",marginTop:"30px"}}>
            <div className='d-flex' style={{ width: "100%", justifyContent: "space-between" }}>
                <h2>Your Notes</h2>
                <button className='btn btn-primary' onClick={addnotes}>Add Note +</button>
            </div>
            {notes.map((note) => {
                return <Noteitem key={note._id} updatenote={updatenote} note={note} />
            })}
        </div>

    </>
    )
}

export default Notes
