import { ADD_TODO, COMPLETE_TODO } from '../actions';

const initialState = {
    todos: [
        {
            text: 'Wash the Dog',
            completed: false,
            id: 0
        },

        {
            text: 'Make Mac and Cheese',
            completed: false,
            id: 1
        },

        {
            text: 'Clean Kitchen',
            completed: false,
            id: 2
        },
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                { text: action.payload, completed: false, id: state.todos.length }
                ]
            }
        
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, id) => {
                    if (id === action.payload) {
                        todo.completed = !todo.completed
                        return todo;
                    } else {
                        return todo;
                    }
                })
            }

        default:
            return state;
    }
};