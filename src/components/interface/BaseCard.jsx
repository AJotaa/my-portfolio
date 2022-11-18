import React from "react";

function BaseCard({ children }) {
  return (
    <div className="base-card-container">
      <div className="base-card" 
      >
        {children}
      </div>
      <div className="base-card-decoration"></div>
    </div>
  );
}

export default BaseCard;
