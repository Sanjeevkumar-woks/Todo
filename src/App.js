import './index.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function FormTodo ({addTodo}){
const [value ,setValue]=useState("");
const HandelSubmit=()=>{
  addTodo(value);
  setValue("");
}

  return(
    <div className='formtodo'>
      <TextField fullWidth label="fullWidth"  id="filled-basic" variant="filled" type="text" placeholder='Add New Task' 
      onChange={(e)=>{setValue(e.target.value)}} onKeyDown={function(e) {
        if (e.key === 'Enter') {
         HandelSubmit();
        }
      }} />
      <div className='submit'>
      <Button type='submit' onClick={HandelSubmit} variant="contained" size="large">Submit</Button>
      </div>
    </div>
  );
};
function Todo({todo, index,markTodo,removeTodo}){
  return (
      <Card>
        <CardContent>
        <div className="todo">
          <span style={{ textDecoration: todo.isDone ? "line-through" : "", color:"orange"}}>
            {todo.text}
          </span>
          <div>
            <Button  variant="outlined" onClick={() => markTodo(index)}>✓</Button>{" "}
            <Button variant="outlined" color="error" startIcon={<DeleteForeverOutlinedIcon />} onClick={() => removeTodo(index)}></Button>
          </div>
        </div>
        </CardContent>
        </Card>
      );

}

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
