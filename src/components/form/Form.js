import React from "react";
import "./Form.css";
// import { dividerClasses } from "@mui/material";
// import {
//   Container,
//   Button,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
import {form} from "./Add event.png"

function Form() {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <img src={form} alt="" width="100%" height="100%" />
    </div>

    // <Container
    //   style={{
    //     backgroundColor: "#2C2C2E",
    //     minHeight: "100vh",
    //     color: "white",
    //     padding: "20px",
    //   }}
    // >
    //   <h1>Schedule</h1>
    //   <Button variant="contained" color="primary" onClick={handleClickOpen}>
    //     Add Event
    //   </Button>
    //   <Dialog open={open} onClose={handleClose}>
    //     <DialogTitle>Add Event</DialogTitle>
    //     <DialogContent>
    //       <TextField
    //         autoFocus
    //         margin="dense"
    //         id="name"
    //         label="Event Name"
    //         type="text"
    //         fullWidth
    //         variant="standard"
    //       />
    //       <FormControl fullWidth margin="dense" variant="standard">
    //         <InputLabel id="event-category-label">Event Category</InputLabel>
    //         <Select
    //           labelId="event-category-label"
    //           id="event-category"
    //           label="Event Category"
    //         >
    //           <MenuItem value={"Corporate Event"}>Corporate Event</MenuItem>
    //           <MenuItem value={"Personal Event"}>Personal Event</MenuItem>
    //         </Select>
    //       </FormControl>
    //       <FormControl fullWidth margin="dense" variant="standard">
    //         <InputLabel id="priority-label">Priority</InputLabel>
    //         <Select labelId="priority-label" id="priority" label="Priority">
    //           <MenuItem value={"Low"}>Low</MenuItem>
    //           <MenuItem value={"Medium"}>Medium</MenuItem>
    //           <MenuItem value={"High"}>High</MenuItem>
    //         </Select>
    //       </FormControl>
    //       <TextField
    //         margin="dense"
    //         id="date"
    //         label="Date"
    //         type="date"
    //         fullWidth
    //         InputLabelProps={{ shrink: true }}
    //         variant="standard"
    //       />
    //       <TextField
    //         margin="dense"
    //         id="time"
    //         label="Time"
    //         type="time"
    //         fullWidth
    //         InputLabelProps={{ shrink: true }}
    //         variant="standard"
    //       />
    //       <TextField
    //         margin="dense"
    //         id="description"
    //         label="Description"
    //         type="text"
    //         fullWidth
    //         variant="standard"
    //       />
    //     </DialogContent>
    //     <DialogActions>
    //       <Button onClick={handleClose} color="primary">
    //         Cancel
    //       </Button>
    //       <Button onClick={handleClose} color="primary">
    //         Save Event
    //       </Button>
    //     </DialogActions>
    //   </Dialog>
    // </Container>
  );
}

export default Form; 