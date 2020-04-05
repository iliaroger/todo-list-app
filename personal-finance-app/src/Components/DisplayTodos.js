import React, {useEffect, useCallback, useContext} from 'react';
import '../Components/Display.css';
import {ContextData} from './Context';

function Display(props){

    const {todos, setTodo} = useContext(ContextData);


    return(
        <div>
            <h1>Todo list:</h1>
            <div className="todoBox">
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}


export default Display;