import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  'margin': '10px',
  color: `#FFF8DC`,
  backgroundColor: '#2F4F4F',
  transition: `all 0.4s`,
  '&:hover': {
    backgroundColor: `#FFF8DC`,
    color: '#2F4F4F',
    transform: `scale(1.1)`,
    transition: `all 0.4s`
  }
}));



const buttonSX = {
    'margin-top': '2vh',
    bgcolor: '#2F4F4F',
    color: '#FFF8DC',
    boxShadow: 5,
    // hover: {
    //   `box-shadow`: `0 0 16px 0 #222`,
    //   `background-color`: `DarkSlateGray`,
    //   `transform`: `scale(1.1)`,
    //   `color`: `Cornsilk`,
    // }
  }

export default function FormDialog({id, quantity, phase, lat, lon, callback, index}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (id, index) => {
    callback(id, document.getElementById('quantity-textfield').value,
    document.getElementById('phase-textfield').value,
    document.getElementById('lat-textfield').value,
    document.getElementById('lon-textfield').value,
    index
       );
    setOpen(false);
  };

  return (
    <div>
      <ColorButton variant="contained" onClick={handleClickOpen}>
        Edit
      </ColorButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Entry</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update this equipment's quantity and location. 
            Add new equipment for multiple pieces of the same equipment in different locations. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            placeholder={quantity.toString()}
            id="quantity-textfield"
            // value=''
            label="Quantity"
            // type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phase-textfield"
            placeholder={phase}
            label="Phase of Mission"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="lat-textfield"
            placeholder={lat}
            label="Latitude"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="lon-textfield"
            placeholder={lon}
            label="Longitude"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setOpen(false)}}>Cancel</Button>
          <Button onClick={()=>{handleClose(id, index)}}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
