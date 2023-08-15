import React from 'react'

const Noteitem = (props) => {
    return (
        <div className='col-md-3'> 
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{props.note.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{props.note.tag}</h6>
                    <p class="card-text">{props.note.description}</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}

export default Noteitem