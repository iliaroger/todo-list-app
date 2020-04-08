import React, {useContext, useCallback} from 'react';
import '../Components/Display.css';
import {ContextData} from './Context';

function Display(props){

    const {todos, setTodos} = useContext(ContextData);


    const itemChecked = useCallback((value)=>{
        console.log("checkbox checked", value);
    },[])

    return(
        <div>
            <h1>Todo list:</h1>
            <div className="todoBox">
                <ul>
                    {todos.map(todo =>{
                        return (
                        <div key={todo.id} className = "custom-control custom-checkbox" >
                            <input type="checkbox" className="custom-control-input" id="customCheck1" checked={todo.checked} onChange={itemChecked}/>
                            <label className="custom-control-label" htmlFor="customCheck1">{todo.content}</label>
                        </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}


export default Display;