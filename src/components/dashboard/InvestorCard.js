import React from 'react';

const InvestorCard = ({ name, discCall, softCommit, fund }) => {
  return (
    <div className="investor-card">
      <div className="investor-name">{name}</div>
      <div className="investor-info">
        <div>Disc Call: {discCall}</div>
        <div>Soft Commit: {softCommit}</div>
        <div>Fund: {fund}</div>
      </div>
    </div>
  );
};

export default InvestorCard;