import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
                <input
                    type = 'text'
                    name = 'todo'
                    placeholder = 'Add To-Do'
                    value = {props.todo}
                    onChange = {props.handleChange}
                />
            </form>
            <button onClick = {props.addTodo}>Add To List</button>
        </div>
    )
}

export default TodoForm;