import React, { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState = (props)=>{

     const notesInitial = [
        {
          "_id": "64d7c0b6467d9f82f167d076",
          "user": "64d7bd9d467d9f82f167d071",
          "title": "hacker chnaged the title",
          "description": "hacker changed the description",
          "tag": "hacking",
          "date": "2023-08-12T17:26:14.673Z",
          "__v": 0
        },
        {
          "_id": "64db0f18bb2006cc1973f84c",
          "user": "64d7bd9d467d9f82f167d071",
          "title": "Note for shalay",
          "description": "She needs to be resued",
          "tag": "Defence",
          "date": "2023-08-15T05:37:28.156Z",
          "__v": 0
        }
      ]

      const [notes,setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value = {{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;