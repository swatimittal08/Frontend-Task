import React from "react";
// import InvestorCard from "./InvestorCard";
// import TaskCard from "./TaskCard";
// import Chart from "./Chart";
import {dashboard} from "./Frame 15942.png"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <img src={dashboard} alt="" width="100%" height="100%" />
      
      {/* <div className="investor-section">
        <h2>Investors</h2>
        <InvestorCard
          name="Rahul Kumar"
          discCall="34521"
          softCommit="Capital Hub"
          fund="12,000,000"
        />
        <InvestorCard
          name="Karthik"
          discCall="23412"
          softCommit="Infosys"
          fund="19,000,000"
        />
      </div>
      <div className="task-section">
        <h2>Tasks</h2>
        <TaskCard
          taskName="Landing Page"
          estimate="24h"
          spentTime="12h"
          assignee="A"
          priority="Medium"
          status="Done"
        />
        <TaskCard
          taskName="UX Sketches"
          estimate="4d"
          spentTime="2d 20h"
          assignee="B"
          priority="Low"
          status="In Progress"
        />
      </div>
      <div className="charts-section">
        <Chart title="Fund Ask & Utilization" />
        <Chart title="Commitments" />
      </div>
      <div className="upcoming-section">
        <h2>Up Coming</h2>
        <div>Pitch - Today 12:30 pm</div>
        <div>Follow Up - Today 02:30 pm</div>
        <div>Negotiation - Today 03:30 pm</div>
      </div> */}
      
    </div>
  );
};

export default Dashboard; 