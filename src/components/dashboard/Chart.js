import React from "react";

const Chart = ({ title }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <div className="chart-placeholder"></div>
    </div>
  );
};

export default Chart; 