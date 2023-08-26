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
        setNote({title: "",description: "", tag: ""});
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
                    <input value={note.title} type="text" className="htmlForm-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="htmlForm-label d-block" >Description</label>
                    <input value={note.description} type="text" className="htmlForm-control" id="description" name="description" onChange={onChange} minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="htmlForm-label d-block">Tag</label>
                    <input value={note.tag} type="text" className="htmlForm-control" id="tag" name="tag" onChange={onChange} minLength={5}/>
                </div>
                <button disabled={(note.title.length < 5 || note.description.length < 5) && true} type="submit" className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
            </htmlForm>
        </div>
    )
}

export default Addnote