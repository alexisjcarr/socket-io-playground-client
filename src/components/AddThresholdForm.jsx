import React from "react";

const styles = {
  //display: "flex",
  //flexDirection: "column",
  height: "50px",
  width: "200px",
  borderRadius: "20px"
  //fontSize: "50px"
};

const AddThresholdForm = ({
  data,
  threshold,
  handleThresholdSubmit,
  handleChange,
  input
}) => {
  return (
    <form
      onSubmit={event => handleThresholdSubmit(event)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
        //alignItems: "center"
      }}
    >
      <div>
        <input
          placeholder="Enter a threshold between 0 and 100"
          type="text"
          onChange={handleChange}
          style={styles}
          value={input}
        />
        <button
          type="submit"
          style={{
            height: "50px",
            width: "100px",
            borderRadius: "20px",
            backgroundColor: "lightgreen"
            //fontSize: "30px"
          }}
        >
          Submit
        </button>
      </div>
      <button
        style={{
          height: "50px",
          width: "310px",
          borderRadius: "20px"
          // backgroundColor: "lightgreen",
          //fontSize: "30px"
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
