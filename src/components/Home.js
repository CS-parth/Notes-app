import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import Notes from "./Notes";

export const Home = (props) => {


    return (
        <div>
            <Notes showAlert={props.showAlert}/>
        </div>
    )
}