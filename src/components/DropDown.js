import React from "react";
import { fileList, filedata } from "../tools/fileSearch";

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

  componentDidMount() {
    this.stateFunc();
  }
  dropDownList = () => {
    return this.state.fileLists.map((file, key) => {
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
        <select
          className="ui compact selection dropdown"
          onChange={this.props.onChange}
        >
          {this.dropDownList()}
        </select>
        {/* <div className="ui inverted red button">Search</div> */}
      </div>
    );
  }
}

export default DropDown;
