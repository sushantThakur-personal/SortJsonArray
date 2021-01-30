import React from "react";

import { compare } from "../tools/sortArray";
import DropDown from "./DropDown";

import { filedata } from "../tools/fileSearch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorter: "",
      data: [],
      releaseName: ""
    };
  }

  sortedStocks = (sorter) => {
    return this.state.data.sort(compare(sorter)).map((data, key) => {
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
  handleChange = async (file) => {
    this.setState({
      data: await (await filedata(file.target.value)).data,
      releaseName: file.target.value
    });
  };
  render() {
    if (this.state.data.length === 0) {
      return (
        <div>
          <h1 className="ui blue inverted header" style={{ textAlign: "center" }}>SINGLE USER PROFILING</h1>
          <DropDown onChange={this.handleChange} />
          <h1 style={{ color: "white" }}>Please make a selection</h1>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1 className="ui blue inverted header" style={{ textAlign: "center" }}>SINGLE USER PROFILING</h1>
          <DropDown onChange={this.handleChange} />
          <br />
          <div className="ui red inverted statistic">

            <div className="label">
              Drupal
            </div>
            <div className="value">
              {this.state.releaseName.substring(0, this.state.releaseName.length - 5)}
            </div>
          </div>
          <table
            className="ui celled sortable structured inverted blue table"
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
}

export default App;
