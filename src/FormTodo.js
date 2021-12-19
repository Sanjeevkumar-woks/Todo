import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const HandelSubmit = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <div className='formtodo'>
      <TextField fullWidth label="fullWidth" id="filled-basic" variant="filled" type="text" placeholder='Add New Task'
        onChange={(e) => { setValue(e.target.value); }} onKeyDown={function (e) {
          if (e.key === 'Enter') {
            HandelSubmit();
          }
        }} />
      <div className='submit'>
        <Button type='submit' onClick={HandelSubmit} variant="contained" size="large">Submit</Button>
      </div>
    </div>
  );
}
;
