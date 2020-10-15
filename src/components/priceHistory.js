import React, { Component } from "react";
import {VictoryChart, VictoryArea, VictoryStack, VictoryTheme, VictoryContainer} from "victory";

export default class priceHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.getData(this.props.priceHistory) };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData(this.props.priceHistory) });
    }, 2000);
  }

  getData(priceHistory) {
     return priceHistory.map(() => {
      return [
        { x: 1, y: priceHistory[0] },
        { x: 2, y: priceHistory[1] },
        { x: 3, y: priceHistory[2] },
        { x: 4, y: priceHistory[3] },
        { x: 5, y: priceHistory[4] },
      ];
    })
  }

  render() {
    return (
      <VictoryChart theme={VictoryTheme.material} animate={{ duration: 1000 }}>
          <VictoryStack colorScale={"blue"}>
            {this.state.data.map((item, i) => {
              return (
                <VictoryArea key={i} data={item} interpolation={"basis"} />
              );
            })}
          </VictoryStack>
        </VictoryChart>
    );
  }
}
