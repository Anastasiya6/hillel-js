import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <button onClick={this.props.onButtonClick}>
                    {this.props.smile}
                    Clicked {this.props.value} times
                </button>
            </div>
        );
    }

}

export default Button;
