import List from "./components/List";
import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      title: '',
      items: [
        {id: 1, name: 'Do something', state: 'link-primary'},
        {id: 2, name: 'Be somewhere', state: 'link-primary'},
        {id: 3, name: 'Go somewhere', state: 'link-primary'},
      ]
    }
  }

  handleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      const newValues = [...prevState.items];
      const lastIndex = this.state.items.length ;
      newValues.push({id:lastIndex+1, name:this.state.title,state:'link-primary'});
      this.setState({title: ''});
      return { items: newValues };
    });
  };

  render() {


    return (
        <>
          <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
          <div className="container">

            <List data={this.state.items}/>
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

          </div>
        </>
    )
  }
}

export default App
