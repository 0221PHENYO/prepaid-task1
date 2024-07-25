import React, { useState } from 'react';

const PrepaidServicesPage = () => {
  const [data, setData] = useState([
    { name: 'John Doe', service: 'Mobile Recharge' },
    { name: 'Jane Smith', service: 'DTH Recharge' },
    { name: 'Sam Wilson', service: 'Electricity Bill' },
    { name: 'Paul Brown', service: 'Gas Bill' },
    { name: 'Emily Davis', service: 'Water Bill' },
  ]);

  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || service.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    const newData = [...data];
    if (editingIndex === null) {
      newData.push({ name, service });
    } else {
      newData[editingIndex] = { name, service };
      setEditingIndex(null);
    }

    setData(newData);
    setName('');
    setService('');
  };

  const handleEdit = (index) => {
    setName(data[index].name);
    setService(data[index].service);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Prepaid Services Management</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ borderRadius: '5px', padding: '5px', marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Prepaid Service:
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ borderRadius: '5px', padding: '5px', marginLeft: '10px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px' }}>
          {editingIndex === null ? 'Create' : 'Update'}
        </button>
      </form>
      <ul>
        {data.map((entry, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span>{entry.name} - {entry.service}</span>
            <button onClick={() => handleEdit(index)} style={{ marginLeft: '10px' }}>Edit</button>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrepaidServicesPage;
