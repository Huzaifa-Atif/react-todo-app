import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  
  const addTask = () => {
    if (newTask.trim() === '') return;
    
    if (isEditing) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setNewTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const deleteAll = () => {
    setTasks([]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1 style={{ marginBottom: '30px' }}>📝 Huzaifa's To-Do App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: '8px', width: '250px', borderRadius: '5px', border: '1px solid gray' }}
      />

      <button
        onClick={addTask}
        style={{
          padding: '8px 16px',
          marginLeft: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isEditing ? 'Update' : 'Add'}
      </button>

      {tasks.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={deleteAll}
            style={{
              padding: '6px 14px',
              backgroundColor: 'darkred',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
            >
            Delete All
          </button>
        </div>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              marginBottom: '12px',
              backgroundColor: '#f9f9f9',
              padding: '10px',
              borderRadius: '8px',
              width: '350px',
              margin: 'auto',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>{task}</span>
            <div>
              <button
                onClick={() => editTask(index)}
                style={{
                  marginRight: '10px',
                  backgroundColor: '#ffc107',
                  border: 'none',
                  color: 'white',
                  padding: '6px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                style={{
                  backgroundColor: 'crimson',
                  border: 'none',
                  color: 'white',
                  padding: '6px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;











// import { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Hello Huzaifa 👋</h1>
//       <Counter /> {/* yahan render ho raha hai */}
//     </div>
//   );
// }

// export default App;











// import React from 'react';
// import { useState } from 'react';
// const App = () => {
//   const[name, setName] = useState('')
//   return(
//     <>
//     <input type="text" onChange={(e) => setName(e.target.value  )} />
//     {name}
//     </>
//   );
// }
// export default App;