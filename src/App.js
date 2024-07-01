import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/dashboard/Sidebar";
import Header from "./components/dashboard/Header";
import Dashboard from "./components/dashboard/Dashboard";
import InvestorList from "./components/investor/InvestorList";
import TaskList from "./components/task/TaskList";
import AssignTeam from "./components/assignteam/AssignTeam"; 
import Schedule from "./components/schedule/Calendar";
import Schedule from "./components/schedule/EventList";
import { Schedule } from "@mui/icons-material";
import Form from "./components/form/Form";

function App() {
  return (
    // <div className="App">
    //   <Sidebar />
    //   <div className="main-content">
    //     <Header />
    //     <Dashboard />
    //     <InvestorList />
    //     <TaskList />
    //     <AssignTeam />
    //     <Schedule />
    //     <Form />
    //   </div>
    // </div>

    <BrowserRouter>
      <Routes>
        <Sidebar />
        <Header />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="investor" element={<InvestorList />} />
          <Route path="tasks" element={<TaskList />} />
          <Route path="/" element={<AssignTeam />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="/" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
