import React from "react";
import "./InvestorList.css";
import {investor} from "./Group 15950.png"

// const investors = [
//   {
//     name: "Rahul Kumar",
//     discCall: "34521",
//     softCommit: "Capital Hub",
//     fund: "12,00,000",
//     negotiation: "Prem",
//     dd: "Yes",
//   },
//   {
//     name: "Karthik",
//     discCall: "23412",
//     softCommit: "Infosys",
//     fund: "19,00,000",
//     negotiation: "Prem",
//     dd: "Yes",
//   },
//   {
//     name: "Hardeep",
//     discCall: "23412",
//     softCommit: "Infosys",
//     fund: "19,00,000",
//     negotiation: "Prem",
//     dd: "Yes",
//   },
//   {
//     name: "Upma Singh",
//     discCall: "23412",
//     softCommit: "Infosys",
//     fund: "19,00,000",
//     negotiation: "Prem",
//     dd: "Yes",
//   },
//   {
//     name: "Kiran",
//     discCall: "23412",
//     softCommit: "Infosys",
//     fund: "19,00,000",
//     negotiation: "Prem",
//     dd: "Yes",
//   },
// ];

function InvestorList() {
  return (
    <div className="investor-list">
      <img src={investor} alt="" width="100%" height="100%" />


      {/* <h2>120 Total Investors</h2>
      <div className="investor-table">
        {investors.map((investor, index) => (
          <div key={index} className="investor-row">
            <span>{investor.name}</span>
            <span>{investor.discCall}</span>
            <span>{investor.softCommit}</span>
            <span>{investor.fund}</span>
            <span>{investor.negotiation}</span>
            <span>{investor.dd}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default InvestorList; 