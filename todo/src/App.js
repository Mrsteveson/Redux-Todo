import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './actions';

import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    }
  }

  addTodo = () => {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  deleteTodo = () => {
    this.props.deleteTodo(this.state.todo);
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List Redux Edition</h1>
        <Todos
          todos = {this.props.todos}
          deleteTodo = {this.deleteTodo}
        />
        <TodoForm
          todo = {this.state.todo} 
          handleChange = {this.handleChange}
          addTodo = {this.addTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, {addTodo, deleteTodo}) (App);
