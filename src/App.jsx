import React, { Component } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

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

    handleClick = (id, e) => {
        e.preventDefault();
        this.setState(prevState => ({
            items: prevState.items.map(item =>
                item.id === id
                    ? { ...item, state: item.state === 'link-success' ? 'link-primary' : 'link-success' }
                    : item
            )
        }));
    };

    handleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            items: [
                ...prevState.items,
                { id: prevState.items.length + 1, name: prevState.title, state: 'link-primary' }
            ],
            title: ''
        }));
    };

    render() {
        return (
            <>
                <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <nav>
                                <TaskList items={this.state.items} onClick={this.handleClick} />
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <TaskForm
                                title={this.state.title}
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;