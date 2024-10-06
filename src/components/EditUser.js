import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
        
import { Button } from 'primereact/button';
import { useParams, useNavigate } from 'react-router-dom';  

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();  
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
      .then(response => {
        navigate('/'); 
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <InputText type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
        <InputText type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <InputText type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} required />
        <Button type="submit" className="btn btn-primary">Update</Button>
      </form>
    </div>
  );
};

export default EditUser;
