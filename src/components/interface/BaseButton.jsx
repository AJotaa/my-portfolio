import React from "react";

function BaseButton({ mode, children, onclick, type, value, disabled }) {
  if (mode === "flat") {
    return (
      <div className="btn-container">
        <button className="btn-flat btn" onClick={onclick}>
          {children}
        </button>
      </div>
    );
  } else if (mode === "header") {
    return (
      <div className="btn-container">
        <button className="btn-header btn">{children}</button>
      </div>
    );
  } else if (mode === "small") {
    return (
      <div className="btn-container">
        <button className="btn-small btn" onClick={onclick}>
          {children}
        </button>
      </div>
    );
  } else {
    return (
      <div className="btn-container">
        <button
          className={
            !disabled ? "btn-default btn" : "btn-default btn btn-disabled"
          }
          onClick={onclick}
          type={type}
          value={value}
          disabled={disabled}
        >
          {children}
        </button>
      </div>
    );
  }
}

export default BaseButton;
