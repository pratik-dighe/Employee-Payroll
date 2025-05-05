import React, { useState } from 'react';

function AddEmployee({ onAdd }) {
  const [form, setForm] = useState({ name: '', position: '', salary: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.position && form.salary) {
      onAdd(form);
      setForm({ name: '', position: '', salary: '' });
      alert("Employee Added!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="position" placeholder="Position" value={form.position} onChange={handleChange} />
      <input name="salary" type="number" placeholder="Salary" value={form.salary} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddEmployee;
