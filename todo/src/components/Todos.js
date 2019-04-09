import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';

const Todos = props => {
    return(
        <div>
            {props.todos.map(todo => (
                 <li
                className = {todo.completed ? 'finished' : 'todoText'}
                onClick = {() => props.completeTodo(todo.id)}
                key = {todo.id}
                >
                 {todo.text}
                 {/* {todo.completed} */}
                </li>
            ))}
        </div>
    )
}

export default connect(null, {completeTodo})(Todos);