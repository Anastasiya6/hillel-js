import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Task title</label>
                    <input
                        type="text"
                        name="title"
                        value={this.props.title}
                        onChange={this.props.onChange}
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
        );
    }
}

export default TaskForm;