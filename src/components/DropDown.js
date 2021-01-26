import React from "react";
import { fileList } from "../tools/fileSearch"



class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileLists: []
        };
    }

    stateFunc = () => {
        this.setState = {
            fileLists: fileList()

        }

    }


    dropDownList = () => {
        // console.log(await fileList());
        console.log(this.state.fileLists);
        this.stateFunc();
        // console.log(this.state.fileLists);
        return this.state.fileLists.map((file, key) => {
            return (

                <option value="all" key={key}>{file}</option>
            )
        })
    }



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
