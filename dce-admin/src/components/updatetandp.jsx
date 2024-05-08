import * as React from "react";
import { GrClose } from "react-icons/gr";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
//import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
//import DialogContentText from '@mui/material/DialogContentText';
//import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
//import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Update = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleClickOpen} className=" bg-blue-700  text-white w-40 p-1 rounded-md ">Update</button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
       
        <DialogContent className="bg-sky-900">
         <div className=" min-h-40">
          <div className="flex justify-end">
          <Button onClick={handleClose}> <GrClose /> </Button>
          </div>
        
          <form >
            <p className=" font-semibold text-white text-xl text-center mb-4 ">Enter  About Placement</p>
            <textarea id="message" name="message"  placeholder="Enter your message" className="w-80 min-h-40 p-4 border-2 border-white rounded-lg bg-sky-950 text-white"></textarea>
            <div className="flex justify-center">
            <button className=" bg-black  text-white w-40 p-1 rounded-md ">Submit</button>
            </div>
            
          </form>
         </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Update;
 