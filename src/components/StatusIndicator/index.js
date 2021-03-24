import React from "react";

import "./styles.css";

function StatusIndicator({ text, indicatorStatus }) {
  return (
    <div className="indicator">
      <div
        className={
          indicatorStatus ? "indicator-icon bg-green" : "indicator-icon bg-red"
        }
      ></div>
      <p>{text}</p>
    </div>
  );
}

export default StatusIndicator;
