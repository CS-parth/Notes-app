import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import Notes from "./Notes";

export const Home = () => {


    return (
        <div>
            <Notes/>
        </div>
    )
}