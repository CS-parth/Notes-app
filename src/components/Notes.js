import { React, useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, addNote,editNote } = context;
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token') != null){
            getNotes();
        }else{
            navigate('/login');
        }
    }, [])

    const updateNote = (note) => {
        ref.current.click();
        setNote({id: note._id,etitle: note.title,edescription: note.description,etag: note.tag});
        props.showAlert("Note Successfully updated","success");
    }
    const ref = useRef(null);

    const [note,setNote] = useState({
        id:"",
        etitle: "",
        edescription: "",
        etag: ""
    });
    const handleAddNote = (e)=>{
        e.preventDefault();
        addNote(note);
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    const handleClick = (e)=>{
        // console.log("Updating the note...", note);
        editNote(note.id,note.etitle,note.edescription,note.etag);
        close.current.click();
    }

    const close = useRef(null);

    return (
        <>
            <Addnote showAlert={props.showAlert}/>
            {/*<!-- Button trigger modal -->*/}
            <button type="button" className="btn btn-primary d-none" ref={ref} data-toggle="modal" data-target="#exampleModal">
                 Launch demo modal
            </button>

            {/*<!-- Modal -->*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <htmlForm>
                                <div className="mb-3">
                                    <label htmlFor="title" className="htmlForm-label d-block">Title</label>
                                    <input type="text" className="htmlForm-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="htmlForm-label d-block" >Description</label>
                                    <input type="text" className="htmlForm-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="htmlForm-label d-block">Tag</label>
                                    <input type="text" className="htmlForm-control" id="etag" value={note.etag} name="etag" onChange={onChange} />
                                </div>
                                {/*<button type="submit" className="btn btn-primary" onClick={handleAddNote}>Add Note</button>*/}
                            </htmlForm>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={close}className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button disabled={(note.etitle.length < 5 || note.edescription.length < 5) && true} type="button" onClick= {handleClick} className="btn btn-primary">Update changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h1>Your Notes</h1>
                <div className='container'>
                    {notes.length === 0 && "No notes to display"}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>;
                })}
            </div>
        </>
    )
}

export default Notes