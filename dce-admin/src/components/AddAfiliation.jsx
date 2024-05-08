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

const AddAfiliation = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Afiliation
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogActions>
          <Button onClick={handleClose}>
            
            <GrClose />
          </Button>
        </DialogActions> */}
       
        <DialogContent className="bg-gray-800">
           <div className="flex justify-end">
           <Button onClick={handleClose}><GrClose /></Button>
           </div>
       
          <form  className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto text-white">
            
            <div>
              <label htmlFor="Name of Department"> Name </label>
              <input className="w-full px-3 py-2 bg-gray-700 border border-solid border-gray-600 rounded focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Name of Department"
                id="Name"
                autoComplete="off"
                required
              ></input>
            </div>


            <div>
              <label htmlFor="Approved intake"> Approved intake </label>
              <input className="w-full px-3 py-2 bg-gray-700 border border-solid border-gray-600 rounded focus:outline-none focus:border-blue-500"
                type="number"
                placeholder="strength of class"
                id="strength"
                autoComplete="off"
                required
              ></input>
            </div>

            <div>
              <label htmlFor="year">  Since </label>
              <input className="w-full px-3 py-2 bg-gray-700 border border-solid border-gray-600 rounded focus:outline-none focus:border-blue-500"
                type="number"
                placeholder="year"
                id="year"
                autoComplete="off"
                required
              ></input>
            </div>

            <button type="submit" className="w-40 flex justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6 rounded-md">Submit</button>


          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AddAfiliation;
 