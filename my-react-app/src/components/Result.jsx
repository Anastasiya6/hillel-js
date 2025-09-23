import React from "react";

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {

    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Result
                </button>
            </div>
        );
    }
}

export default Result;