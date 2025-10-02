import React from "react";

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = { values: [] };
    }

    handleClick = (i,e) => {
        e.preventDefault();
        this.setState(prevState => {
            const newValues = [...prevState.values];
            if(newValues[i] === 'link-success'){
                newValues[i] = 'link-primary';
            }else{
                newValues[i] = 'link-success';
            }
            return { values: newValues };
        });

    }

    createList = () => {
        const { data } = this.props;
        return data.map(data => <li key={data.id}><a href="#" className={this.props.values[data.id]} onClick={(e) => this.handleClick(data.id, e)}>{data.name}</a></li>);
    }

    render() {


        return (
            <div className="row">
                <div className="col-md-3">
                    <nav>
                        <ul>
                            {this.createList()}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default List;