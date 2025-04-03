import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    return (
        <div>
            <h2>Your To-Do List</h2>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add new task..."
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
        </div>
    );
}

export default TodoList;
