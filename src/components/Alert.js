import React from 'react'

const Alert = (props) => {

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toLowerCase() + lower.slice(1);
    }
    return (
        <div>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert