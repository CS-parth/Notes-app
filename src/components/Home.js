import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import Notes from "./Notes";

export const Home = () => {


    return (
        <div>
            <h1>Add a Note</h1>
            <htmlForm>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label d-block">Email address</label>
                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label d-block">Password</label>
                    <input type="password" className="htmlForm-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 htmlForm-check">
                    <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
                    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </htmlForm>
            <Notes/>
        </div>
    )
}