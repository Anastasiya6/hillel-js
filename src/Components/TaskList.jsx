import React, { Component } from 'react';

class TaskList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        <a
                            href="#"
                            className={item.state}
                            onClick={(e) => this.props.onClick(item.id, e)}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}

export default TaskList;