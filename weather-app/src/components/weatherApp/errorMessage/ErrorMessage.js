import "./ErrorMessage.css";
import React from "react";

const ErrorMessage = (props) => {
  return (
    <div className="error-container animated fadeInDown">
      <p className="error">{props.errorMessage.message}</p>
    </div>
  );
};

export default ErrorMessage;
