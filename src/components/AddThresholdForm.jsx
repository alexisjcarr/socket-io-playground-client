import React, { useState } from "react";

const styles = {
  height: "200px",
  width: "900px",
  borderRadius: "20px",
  fontSize: "50px"
};

const AddThresholdForm = ({ data, threshold, handleThresholdChange }) => {
  console.log(data.length > 1 ? data[data.length - 1]["value"] : null);
  //const [threshold, setThreshold] = useState(NaN);

  // const handleThresholdChange = event => {
  //   setThreshold(event.target.value);
  // };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("threshold: ", threshold);
  };

  return (
    <form
      onSubmit={event => handleSubmit(event)}
      style={{ textAlign: "center" }}
    >
      <input
        placeholder="Enter a threshold between 0 and 100"
        type="text"
        onChange={event => handleThresholdChange(event)}
        style={styles}
      />
      <button
        type="submit"
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "20px",
          backgroundColor: "lightgreen",
          fontSize: "30px"
        }}
      >
        Submit
      </button>
      <button
        style={{
          height: "200px",
          width: "500px",
          borderRadius: "20px",
          // backgroundColor: "lightgreen",
          fontSize: "30px"
        }}
      >
        {data.length > 1 ? (
          Math.abs(data[data.length - 1].value) > 0 &&
          Math.abs(data[data.length - 1].value) > threshold ? (
            <p>Threshold Range Exceeded</p>
          ) : (
            <p>Within Range</p>
          )
        ) : null}
      </button>
    </form>
  );
};

export default AddThresholdForm;
