import Stack from '@mui/material/Stack';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AddMovie_UI() {
  return (
   
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <Stack direction="row"  useFlexGap flexWrap="wrap" spacing={{ xs: 1, sm: 2 }}>
  
        {/* MOVIE NAME */}
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Movie Name"
        />

        {/* MOVIE POSTER */}
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Movie Poster"
        />
        <br />

            {/* MOVIE Rating */}
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Rating"
        />

            {/* Category */}
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Category"
        />
          <br />

        {/* MOVIE CAST */}
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Movie Cast"
        />

            {/* MOVIE TRAILER */}
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Movie Trailer"
        />
          <br />
            {/* Publish Year */}
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Publish Year"
        />

            {/* Like Num */}
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Like Number"
        />
          <br />
            {/* DISLIKE NUM */}
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Dislike Number"
        />
       
            {/* MOVIE GEnres */}
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Genres"
        />
       
            {/* Summary */}
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Summary" 
        />
     
        {/* ADD MOVIE */}
        <Button  type="submit" variant="contained">ADD MOVIE</Button>

        {/* Back */}
        <Button type="submit" variant="contained" onClick={()=>{navigate('/allmovies')}} >BACK</Button>
         
    </Stack>
    </Box>
   
  );
}

// use stack
//  <Stack spacing={2} direction="row">
//</Stack>