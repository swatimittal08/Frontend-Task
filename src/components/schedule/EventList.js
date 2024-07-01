import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const events = [
  { title: "Presentation of the new department", time: "Today | 6:00 PM" },
  { title: "Meeting with team", time: "Today | 6:00 PM" },
  { title: "Presentation of the new department", time: "Today | 6:00 PM" },
  { title: "Client Meeting to demo the app", time: "Today | 6:00 PM" },
  { title: "Meeting with Teammates", time: "Today | 6:00 PM" },
];

const EventList = () => {
  return (
    <div
      style={{
        margin: "20px",
        background: "#2c2c2c",
        padding: "10px",
        borderRadius: "5px",
        color: "white",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Calendar
      </Typography>
      <List>
        {events.map((event, index) => (
          <ListItem key={index} style={{ borderBottom: "1px solid gray" }}>
            <ListItemText primary={event.title} secondary={event.time} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EventList; 