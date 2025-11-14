import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import AddTaskModal from './AddTaskModal';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const fetchTasks = () => {
    axios.get('http://localhost:8080/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8080/api/tasks/${id}`)
      .then(() => fetchTasks())
      .catch(err => console.error(err));
  };

  const updateStatus = (task, status) => {
    axios.put(`http://localhost:8080/api/tasks/${task.id}`, {...task, status})
      .then(() => fetchTasks())
      .catch(err => console.error(err));
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h3>Welcome Back, Lahari 👋</h3>
        <button className="add-btn" onClick={() => setShowAdd(true)}>+ New Task</button>
      </div>

      <div className="card">
        <table className="task-table">
          <thead>
            <tr><th>Title</th><th>Description</th><th>Assigned To</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {tasks.map(t => (
              <tr key={t.id}>
                <td>{t.title}</td>
                <td>{t.description}</td>
                <td>{t.assignedTo}</td>
                <td><span className={`status ${t.status?.toLowerCase()}`}>{t.status}</span></td>
                <td>
                  <button onClick={() => updateStatus(t, 'Open')}>Open</button>
                  <button onClick={() => updateStatus(t, 'Pending')}>Pending</button>
                  <button onClick={() => updateStatus(t, 'Closed')}>Close</button>
                  <button onClick={() => deleteTask(t.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAdd && <AddTaskModal onClose={() => { setShowAdd(false); fetchTasks(); }} />}
    </div>
  );
}

export default Dashboard;
