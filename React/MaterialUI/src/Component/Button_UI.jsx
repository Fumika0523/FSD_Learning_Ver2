import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

 function Button_UI() {
  return (
    <>
      <Button variant="contained">Add Movie</Button>
      <Button variant="outlined">Back</Button><br /><br />

    
      <TextField sx={{backgroundColor:"blue",}} id="outlined-basic" label="Outlined" variant="outlined" /> <br /><br />
      <TextField sx={{backgroundColor:"grey"}} id="filled-basic" label="Filled" variant="filled" /><br /><br />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    
    </>
  );
}
export default Button_UI