import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
    
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'> 
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.note.tag}</h6>
                    <p className="card-text">{props.note.description}</p>
                    {/** 
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                     */} 
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);
                        props.showAlert("Successfully Deleted a Note","success")}}></i>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>(updateNote(note))}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem