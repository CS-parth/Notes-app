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
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjE2MWMxOTUxOGZiMTNmNDJlMDdiIn0sImlhdCI6MTY5MjUzODM5Nn0.pVAy3hQqSdNO7IifVZpsoRvIW7KhdxGN5Xn8q61IQcM"
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
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjE2MWMxOTUxOGZiMTNmNDJlMDdiIn0sImlhdCI6MTY5MjUzODM5Nn0.pVAy3hQqSdNO7IifVZpsoRvIW7KhdxGN5Xn8q61IQcM"
      },
      body: JSON.stringify({title,description,tag})
    });
    // const json =  response.json();

    const note = {
      "_id": "64db0f18bb2106cc1973f84c",
      "user": "64d7bd9d467d9f82f167d071",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-08-15T05:37:28.156Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  // Deleting a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjE2MWMxOTUxOGZiMTNmNDJlMDdiIn0sImlhdCI6MTY5MjUzODM5Nn0.pVAy3hQqSdNO7IifVZpsoRvIW7KhdxGN5Xn8q61IQcM"
      }
      // body: JSON.stringify()
    });
    const json =  response.json();
    console.log("The item is deleted with id:" + id)
    const newNote = notes.filter((obj) => {
      return obj._id !== id;
    })
    setNotes(newNote);
  }
  // Editing a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMjE2MWMxOTUxOGZiMTNmNDJlMDdiIn0sImlhdCI6MTY5MjUzODM5Nn0.pVAy3hQqSdNO7IifVZpsoRvIW7KhdxGN5Xn8q61IQcM"
      },
      body: JSON.stringify()
    });
    const json =  response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
      } else {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;