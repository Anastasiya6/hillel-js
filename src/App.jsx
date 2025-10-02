import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            items: [
                { id: 1, name: 'Do something', state: 'link-primary' },
                { id: 2, name: 'Be somewhere', state: 'link-primary' },
                { id: 3, name: 'Go somewhere', state: 'link-primary' },
            ]
        };
    }

    createList = () => {
        return this.state.items.map(item => (
            <li key={item.id}>
                <a
                    href="#"
                    className={item.state}
                    onClick={(e) => this.handleClick(item.id, e)}
                >
                    {item.name}
                </a>
            </li>
        ));
    };

    handleClick = (id, e) => {
        e.preventDefault();
        this.setState(prevState => {
            const updated = prevState.items.map(item =>
                item.id === id
                    ? { ...item, state: item.state === 'link-success' ? 'link-primary' : 'link-success' }
                    : item
            );
            return { items: updated };
        });
    };

    handleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            const newValues = [...prevState.items];
            const lastIndex = prevState.items.length;
            newValues.push({
                id: lastIndex + 1,
                name: prevState.title,
                state: 'link-primary'
            });

            return {
                items: newValues,
                title: ''
            };
        });
    };

    render() {
        return (
            <>
                <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <nav>
                                <ul>
                                    {this.createList()}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Task title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        placeholder="Title"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Create Task!"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;