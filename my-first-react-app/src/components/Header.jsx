import React from 'React';

class Header extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <div>
                <h1 className="text-center">{text}</h1>
            </div>
        );
    }
}

export default Header;