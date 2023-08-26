import React, { useState } from "react";

import NoteContext from "./NoteContext";
// import { defaultMethod } from "react-router-dom/dist/dom";

const NoteState = (props) => {


  const host = "http://localhost:8000";
  
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Getting all notes 
  const getNotes = async()=>{
      const response = await fetch(`${host}/api/notes/featchallnotes`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNzQwZjAyYjBhYTYyMWQwMDcxNDU5In0sImlhdCI6MTY5Mjg3NzA0MH0.qDrp-F25nPRtpNUZ8TLYogtDyHK_-yZPe_L_P1S7thU"
        }
      });
      const json = await response.json();
      // console.log(json);
      setNotes(json);
  }
  // Adding a Note
  const addNote = async ({title, description, tag}) => {
    // TODO API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNzQwZjAyYjBhYTYyMWQwMDcxNDU5In0sImlhdCI6MTY5Mjg3NzA0MH0.qDrp-F25nPRtpNUZ8TLYogtDyHK_-yZPe_L_P1S7thU"
      },
      body: JSON.stringify({title,description,tag})
    });
    const json =  await response.json();

    const note = json;
    setNotes(notes.concat(note));
  }
  // Deleting a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNzQwZjAyYjBhYTYyMWQwMDcxNDU5In0sImlhdCI6MTY5Mjg3NzA0MH0.qDrp-F25nPRtpNUZ8TLYogtDyHK_-yZPe_L_P1S7thU"
      }
      // body: JSON.stringify()
    });
    const json =  await response.json();
    console.log("The item is deleted with id:" + id)
    const newNote = notes.filter((obj) => {
      return obj._id !== id;
    })
    setNotes(newNote);
  }
  // Editing a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNzQwZjAyYjBhYTYyMWQwMDcxNDU5In0sImlhdCI6MTY5Mjg3NzA0MH0.qDrp-F25nPRtpNUZ8TLYogtDyHK_-yZPe_L_P1S7thU"
      },
      body: JSON.stringify({title,description,tag})
    });
    const json =  await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      // const element = notes[index];
      if (newNotes[index]._id === id) {
        console.log("Updating the note from frontend")
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    // console.log(newNotes)
    setNotes(newNotes);
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;