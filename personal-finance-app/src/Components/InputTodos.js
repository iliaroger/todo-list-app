import React from 'react';
import '../Components/Input.css'

function Input(props){
    return(
        <div className="centerItems">
            <br></br>
            <h1>Add a todo:</h1>
            <input placeholder="add your todo..."></input>
            
        </div>
    )
}

export default Input;