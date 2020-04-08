import React, {useContext, useCallback} from 'react';
import '../Components/Display.css';
import {ContextData} from './Context';

function Display(props){

    const {todos, setTodos} = useContext(ContextData);


    const itemChecked = (todo,index) => (event) => {
        
        const newArray = [...todos];

        newArray.splice(index, 1, {
            ...todo,
            checked: !todo.checked
        })

        setTodos(newArray);

    }

    return(
        <div>
            <h1>Todo list:</h1>
            <div className="todoBox">
                <ul>
                    {todos.map((todo, index) =>{
                        return (
                        <div key={todo.id} className = "custom-control custom-checkbox" >
                            <input type="checkbox" className='custom-control-input' 
                            id={todo.id} checked={todo.checked} onChange={itemChecked(todo, index)}/>
                            <label className={todo.checked ? 'custom-control-label todoDone ' : 'custom-control-label todoNotDone'} htmlFor={todo.id}>{todo.content}</label>
                        </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}


export default Display;