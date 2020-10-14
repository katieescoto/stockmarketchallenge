import React, { Component } from "react";
import {VictoryChart, VictoryArea, VictoryStack, VictoryTheme} from "victory";

export default class priceHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.getData(this.props.priceHistory) };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 4000);
  }

  getData(priceHistory) {
    console.log(priceHistory)
    let priceHistoryData = []
    return priceHistory.map((data, i) => {
      let currPriceObj = Object.create({x: i+1, y: data})
      priceHistoryData.push(currPriceObj)
      return priceHistoryData;
    });
  }

  render() {
    return (
      <VictoryChart theme={VictoryTheme.material} animate={{ duration: 1000 }}>
        <VictoryStack colorScale={"blue"}>
          {this.state.data.map((item, i) => {
            return <VictoryArea key={i} data={item} interpolation={"basis"} />;
          })}
        </VictoryStack>
      </VictoryChart>
    );
  }
}
