import React from "react";

import "./Form.scss";

const AddThresholdForm = ({
  threshold,
  handleThresholdSubmit,
  handleChange,
  input
}) => {
  return (
    <form onSubmit={event => handleThresholdSubmit(event)} className="form">
      <div className="box">
        <div>
          {" "}
          <input
            className="field"
            placeholder="Enter a threshold between 0 and 100"
            type="text"
            onChange={handleChange}
            value={input}
          />
          <button className="submitButton" type="submit">
            Submit
          </button>
        </div>
        <br />
        <h4>
          Current Threshold: <span>-{threshold}</span> to{" "}
          <span>+{threshold}</span>
        </h4>
      </div>
    </form>
  );
};

export default AddThresholdForm;
