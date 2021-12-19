import './index.css';
import { useState } from "react";
import { FormTodo } from './FormTodo';
import { Todo } from './Todo';

export default function App(){
  const[todos,setTodos]=useState([{
    text:"Sample todo",
    isDone:false
  },
{
  text:"Study",
  isDone:true
}]);
  const addTodo=(text)=>{
    const newTodos=[...todos,{text}];
    setTodos(newTodos);
  };
  const markTodo=(index)=>{
    const newTodos=[...todos];
    newTodos[index].isDone=true;
    setTodos(newTodos);
  };
  const removeTodo=(index)=>{
  const newTodos=[...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
  };
  return(
    <div className='App'>
      <h1 className='heading'>Sanjeev's To-Do</h1>
      <FormTodo addTodo={addTodo}/>
      <div className='todos'>
      <div>
        {todos.map((todo, index) => (
          <div>
               <Todo
              index={index}
                todo={todo}
                markTodo={markTodo}
                 removeTodo={removeTodo}
              />
          </div>))}
      </div>
    </div>
    </div>
  );
}
