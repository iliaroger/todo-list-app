import React, {useEffect, useCallback, useState, useContext} from 'react';
import '../Components/Input.css';
import {ContextData} from './Context';

function Input(props){

    const [todo, setCurrentTodo] = useState('');

    const {todos, setTodo} = useContext(ContextData);

    const saveTodo = useCallback((e)=>{
        setCurrentTodo(e.target.value);
    },[])

    const addTodo = useCallback(()=>{
        
        setTodo([
            ...todos,
            {
                id: todo.length +1,
                content: todo
            }
        ])              

        setCurrentTodo('');
        
    }, [todos, todo])

    useEffect(()=>{
        console.log("todos changed");
    },[todos])

    return(
        <div className="centerItems">
            <br></br>
            <h1>Add a todo:</h1>
            <input placeholder="add your todo..." type="text" onChange={saveTodo} value={todo}></input>
            <br></br>
            <p>{todos}</p>
            <button id="addButton" onClick={addTodo}> add todo </button>
            <br></br>
            <button id="markButton"> mark all todos as done </button>
            <br></br>
            <button id="removeButton"> remove all todos </button>
        </div>
    )
}

export default Input;