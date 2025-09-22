import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {

        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.props.img}
                    Clicked {this.state.count} times
                </button>
            </div>
        );
    }

}

export default Button;
