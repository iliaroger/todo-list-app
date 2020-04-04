import React from 'react';
import './App.css';
import DisplayTodos from './Components/DisplayTodos';
import Input from './Components/InputTodos';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <DisplayTodos></DisplayTodos>
          <Input></Input>
        </div>
      </div>
    </div>
  );
}

export default App;
