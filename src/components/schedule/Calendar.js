import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Client Meeting",
    start: new Date(2024, 2, 5, 10, 0),
    end: new Date(2024, 2, 5, 11, 0),
  },
  {
    title: "Web Design",
    start: new Date(2024, 2, 13, 13, 0),
    end: new Date(2024, 2, 13, 14, 0),
  },
  {
    title: "CEO Birthday",
    start: new Date(2024, 2, 20, 9, 0),
    end: new Date(2024, 2, 20, 10, 0),
  },
];

const Calendar = () => {
  return (
    <div style={{ height: "500px", margin: "20px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", background: "white", color: "black" }}
      />
    </div>
  );
};

export default Calendar; 