import React, { useState } from 'react';
import axios from 'axios';
import './AddTaskModal.css';

const AddTaskModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const submit = () => {
    axios.post('http://localhost:8080/api/tasks', { title, description, assignedTo, status: 'Pending' })
      .then(() => onClose())
      .catch(err => console.error(err));
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>New Task</h3>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
        <input placeholder="Assigned To" value={assignedTo} onChange={e=>setAssignedTo(e.target.value)} />
        <div className="modal-actions">
          <button onClick={submit} className="save">Save</button>
          <button onClick={onClose} className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default AddTaskModal;
