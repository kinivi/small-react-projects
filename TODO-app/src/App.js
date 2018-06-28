import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TodoItem = ({ text }) => (
  <li>{text}</li>
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: '' });
  }


  render() {
    const { newTodo } = this.state;
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} />
    ));

    return (
      <div className="App">
        <h1>Simple TODO app</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="textarea"
            label="What to do?"
            placeholder="Placeholder"
            multiline
            className="todo-input"
            margin="normal"
            name="newTodo"
            value={newTodo}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <div className="save-button">
          <Button
              variant="contained"
              color="primary"
              className="save-button"
              type="sumbit"
            >

              Save
            </Button>
          </div>
          <div className="todo-content">
            <ol>
              {todos}
            </ol>
          </div>
        </form>
      </div>
    )
  }
}

export default App;