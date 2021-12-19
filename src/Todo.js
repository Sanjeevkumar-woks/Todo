import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <Card>
      <CardContent>
        <div className="todo">
          <span style={{ textDecoration: todo.isDone ? "line-through" : "", color: "orange" }}>
            {todo.text}
          </span>
          <div>
            <Button variant="outlined" onClick={() => markTodo(index)}>✓</Button>{" "}
            <Button variant="outlined" color="error" startIcon={<DeleteForeverOutlinedIcon />} onClick={() => removeTodo(index)}></Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

}
