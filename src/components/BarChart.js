import React, { PureComponent } from "react";
import Plot from "react-plotly.js";

class BarChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: "bar",
      x: Object.keys(this.props.count),
      y: Object.values(this.props.count),
      layout: { width: 1000, height: 500, title: "A Fancy Plot" }
    };
  }

  componentDidMount() {
    this.setState(prevState => {
      return [
        {
          ...prevState.data,
          y: Object.values(this.props.count)
        }
      ];
    });
  }

  render() {
    return (
      <>
        {console.log(this.props)}
        <Plot
          data={[
            {
              type: this.state.type,
              x: this.state.x,
              y: this.state.y
            }
          ]}
          layout={this.state.layout}
          onInitialized={figure => this.setState(figure)}
          onUpdate={figure => this.setState(figure)}
        />
      </>
    );
  }
}

export default BarChart;
