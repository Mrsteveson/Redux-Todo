import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';

const Todos = props => {
    return(
        <div>
            {props.todos.map(todo => (
                 <p
                className = {todo.completed ? 'finished' : 'todoText'}
                onClick = {() => props.completeTodo(todo.id)}
                key = {todo.id}
                >
                 {todo.text}
                 {/* {todo.completed} */}
                 <button onClick = {() => props.deleteTodo(props.todos.id)}>X</button>
                </p>
                
            ))}
            <button onClick = {() => props.deleteTodo(props.todos.id)}>X</button>
        </div>
    )
}

export default connect(null, {completeTodo})(Todos);