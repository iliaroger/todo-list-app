import React, {useEffect, useCallback, useState, useContext} from 'react';
import '../Components/Input.css';
import {ContextData} from './Context';

function Input(props){


    const addButton = document.getElementById('addButton');

    const [todo, setCurrentTodo] = useState('');

    const {todos, setTodo} = useContext(ContextData);

    const saveTodo = useCallback((e)=>{
        setCurrentTodo(e.target.value);

        e.preventDefault();

        if (e.keyCode === 13) {
            addButton.click();
        }

    },[])


    const addTodo = useCallback(()=>{
        
        setTodo([
            ...todos,
            {
                id: todo.length + Math.random() * 1000,
                content: todo,
                checked: true
            }
        ])              

        setCurrentTodo('');
        
    }, [todos, todo])

    const enterPressed = useCallback((e) => {
        if (e.keyCode === 13) {
            addTodo();
        }
    }, [addTodo])

    useEffect(()=>{
        console.log("todos changed");
    },[todos])

    return(
        <div className="centerItems">
            <br></br>
            <h1>Add a todo:</h1>
            <input placeholder="add your todo..." type="text" onChange={saveTodo} onKeyDown={enterPressed} value={todo} id="inputField"></input>
            <br></br>
            <button id="addButton" onClick={addTodo}> add todo </button>
            <br></br>
            <button id="markButton"> mark all todos as done </button>
            <br></br>
            <button id="removeButton"> remove all todos </button>
        </div>
    )
}

export default Input;