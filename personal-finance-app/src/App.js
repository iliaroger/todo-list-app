import React, {useState} from 'react';
import './App.css';
import DisplayTodos from './Components/DisplayTodos';
import Input from './Components/InputTodos';
import {ContextData} from './Components/Context';

function App() {

  const [todos, setTodo] = useState();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ContextData.Provider value={{todos, setTodo}}>
            <DisplayTodos></DisplayTodos>
            <Input></Input>
          </ContextData.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
