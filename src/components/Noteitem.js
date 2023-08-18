import React from 'react'

const Noteitem = (props) => {
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
                    <i className="fa-solid fa-trash mx-2"></i>
                    <i className="fa-regular fa-pen-to-square mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem