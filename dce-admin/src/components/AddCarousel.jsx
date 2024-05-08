import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
//import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import menu from "../images/img.jpeg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AddCarousel = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleBackdropClick = (event) => {
    event.stopPropagation();
  };

  return (
    <React.Fragment>
      <div
        className="bg-blue-200 p-1 flex items-center rounded-sm "
        onClick={handleClickOpen}
      >
        <span className="text-xs text-blue-600">Add New</span>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        onBackdropClick={{
          onClick: handleBackdropClick,
        }}
      >
        <DialogTitle>{"Add New Carousel"}</DialogTitle>
        <DialogContent>
          <div className="flex items-center space-x-6">
            <div className="w-52">
              <img src={menu} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 ">
              <div className="flex flex-col items-center justify-center p-2 bg-gray-400 rounded-md">
                <div>Get image from gallery</div>
              </div>
              <span className="text-center">
                Drag and drop image here, you can add multiple image at a time
              </span>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <div
            className="p-2 bg-blue-600 rounded-md cursor-default"
            onClick={handleClose}
          >
            <span className="text-white font-bold">Add Carousel</span>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddCarousel;
