import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <React.Fragment>
      <div className="bg-red-200 p-1 flex items-center rounded-sm " onClick={handleClickOpen}>
            <span className="text-xs text-red-600">Delete all</span>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
       
      >
        <DialogTitle>{"Delete All Carousels"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You can not undo the deleted crousels . Carefull while Deleting 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <div className='p-2 bg-red-200 rounded-md cursor-default' onClick={handleClose}>
            <span className='text-red-600'>DELETE All</span>
            </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
