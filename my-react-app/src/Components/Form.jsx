import React from 'React';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = { values: [] };
        console.log(this.props);
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

      //  this.setState({ value: 'btn-pressed' });
        // if (isPressed) {
        //     btnClass += ' btn-pressed';
        // } else if (isHovered) {
        //     btnClass += ' btn-over';
        // }
    }

    createList = () => {
        const { data } = this.props;
        return data.map(data => <li key={data.id}><a href="#" className={this.state.values[data.id]} onClick={(e) => this.handleClick(data.id, e)}>{data.name}</a></li>);
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