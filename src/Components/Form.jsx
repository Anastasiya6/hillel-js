import React from 'react';

class Form extends React.Component {

    render() {

        return (

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
                                required/>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value="Create Task!"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;