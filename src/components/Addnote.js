import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';

const Addnote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    // console.log(addNote);
    const [note,setNote] = useState({
        title: "",
        description: "",
        tag: ""
    });
    const handleAddNote = (e)=>{
        e.preventDefault();
        addNote(note);
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h1>Add a Note</h1>
            <htmlForm>
                <div className="mb-3">
                    <label htmlFor="title" className="htmlForm-label d-block">Title</label>
                    <input type="text" className="htmlForm-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="htmlForm-label d-block" >Description</label>
                    <input type="text" className="htmlForm-control" id="description" name="description" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="htmlForm-label d-block">Tag</label>
                    <input type="text" className="htmlForm-control" id="tag" name="tag" onChange={onChange}/>
                </div>
                <div className="mb-3 htmlForm-check">
                    <input type="checkbox" className="htmlForm-check-input mx-3" id="exampleCheck1"/>
                    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
            </htmlForm>
        </div>
    )
}

export default Addnote