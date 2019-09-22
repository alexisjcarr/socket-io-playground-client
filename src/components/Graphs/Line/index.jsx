import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer
} from "recharts";

const LineGraph = ({ data, threshold }) => (
  <ResponsiveContainer height={400} width="100%">
    <LineChart data={data}>
      <ReferenceLine
        y={threshold}
        label="Max Threshold"
        stroke="red"
        strokeDasharray="3 3"
      />
      <ReferenceLine
        y={0 - threshold}
        label="Min Threshold"
        stroke="red"
        strokeDasharray="3 3"
      />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <XAxis dataKey="timestamp" />
      <YAxis />
    </LineChart>
  </ResponsiveContainer>
);

LineGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ),
  threshold: PropTypes.number
};

export default LineGraph;
