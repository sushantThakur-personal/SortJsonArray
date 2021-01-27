import React from "react";

import { compare } from "../tools/sortArray";
import DropDown from "./DropDown";
import { stockData } from "../Data/data - Copy";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorter: "",
    };
  }

  sortedStocks = (sorter) => {
    return stockData.sort(compare(sorter)).map((data, key) => {
      return (
        <tr className="row" key={key}>
          <td className="field" data-label="Company">
            {data.company}
          </td>
          <td className="field" data-label="Stock Price">
            {data.stockPrice}
          </td>
          <td className="field" data-label="Ticker">
            {data.ticker}
          </td>
          <td className="field" data-label="Time Elapsed">
            {data.timeElapsed}
          </td>
        </tr>
      );
    });
  };
  onClickedSort = (sort) => {
    this.setState({
      sorter: sort,
    });
  };
  render() {
    return (
      <div className="container">
        <DropDown />

        <table
          className="ui celled structured inverted blue table"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th
                style={{ textTransform: "uppercase" }}
                onClick={() => this.onClickedSort("company")}
              >
                Company
              </th>
              <th
                style={{ textTransform: "uppercase" }}
                onClick={() => this.onClickedSort("stockPrice")}
              >
                Stock Price
              </th>
              <th
                style={{ textTransform: "uppercase" }}
                onClick={() => this.onClickedSort("ticker")}
              >
                Ticker
              </th>
              <th
                style={{ textTransform: "uppercase" }}
                onClick={() => this.onClickedSort("timeElapsed")}
              >
                Time Elapsed
              </th>
            </tr>
          </thead>
          <tbody>{this.sortedStocks(this.state.sorter)}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
