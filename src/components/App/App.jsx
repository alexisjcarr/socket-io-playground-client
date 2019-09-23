// NOTE: I decided to go with a component-centric directory architecture (i.e. each folder contains every file that pertains to the component). Should this app grow, I would abstract out the .scss files into a styles folder and import them all into an index.scss file that would feed into the root level index.js. I decided to go with Sass because I like taking adavantage of the nesting.

// Additionally, for a larger app, I would integrate either the Context API or Redux for state management.

import React from "react";
import { useSocket, useThreshold } from "../../hooks";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LineGraph from "../Line";
import BarGraph from "../Bar";
import Form from "../Form";

import "./App.scss";

const App = () => {
  const [data, barData] = useSocket("https://just-for-practice.herokuapp.com/");
  const [
    threshold,
    handleChange,
    handleThresholdSubmit,
    toast,
    input
  ] = useThreshold(data);

  return (
    <div className="App">
      <ToastContainer
        position={toast.POSITION.BOTTOM_RIGHT}
        hideProgressBar={true}
      />
      <div className="Graphs">
        <div className="Graph">
          <LineGraph data={data} threshold={threshold} />
        </div>
        <div className="Graph">
          <BarGraph data={barData} />
        </div>
      </div>

      <div className="form">
        <Form
          data={data}
          threshold={threshold}
          handleThresholdSubmit={handleThresholdSubmit}
          handleChange={handleChange}
          input={input}
        />
      </div>
    </div>
  );
};

export default App;
