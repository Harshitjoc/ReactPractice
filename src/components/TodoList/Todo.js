import React, { useState } from 'react';
import './Todo.css'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, { id: todos.length + 1, title: newTodo, completed: false }]);
    };

    const markComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const completedCount = todos.filter((todo) => todo.completed).length;

    return (
        <div className='main'>
            <div className='main-section'>
                <h2>Todo List</h2>
                <ul>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} markComplete={markComplete} />
                    ))}
                </ul>
                <AddTodo addTodo={addTodo} />
                <p>Total Todos: {todos.length}</p>
                <p>Completed Todos: {completedCount}</p>
            </div>

        </div>
    );
};

const TodoItem = ({ todo, markComplete }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => markComplete(todo.id)}
            />
            {todo.title}
        </li>
    );
};

const AddTodo = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoList;
