import React from "react";
import { fileList } from "../tools/fileSearch";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileLists: [],
    };
  }

  stateFunc = async () => {
    this.setState({
      fileLists: await (await fileList()).data,
    });
  };

  dropDownList = () => {
    this.stateFunc();
    return this.state.fileLists.map((file, key) => {
      console.log(file);
      return (
        <option value={file} key={key}>
          {file}
        </option>
      );
    });
  };

  render() {
    return (
      <div className="ui action input">
        <select className="ui compact selection dropdown">
          {this.dropDownList()}
        </select>
        <div className="ui inverted red button">Search</div>
      </div>
    );
  }
}

export default DropDown;
