import React, { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext';

const Noteitem = (props) => {
    const { note, updatenote } = props;
    const context = useContext(NoteContext)
    const { deleteNote } = context
    var newdate = new Date(note.date)
    const dd = newdate.getDate();
    const mm = newdate.getMonth();
    const yyyy = newdate.getFullYear();
    newdate = dd + "/" + mm + "/" + yyyy
    return (
        <div className='col-md-3 m-auto' style={{ width: "90%" }}>
            <div className="card my-3" style={{ border: "2px solid blue" }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "bold" }}>Title : {note.title}</h5>
                    <p className="card-text"><b>Description : </b>{note.description}</p>
                    <div className='d-flex my-3' >
                        <i style={{ cursor: "pointer" }} className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
                        <i style={{ cursor: "pointer" }} className="far fa-edit mx-2" onClick={() => { updatenote(note) }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
