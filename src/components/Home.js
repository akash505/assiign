import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => {
        setError('Error deleting user');
      });
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Use navigate to go to the edit page
  };

  const handleView = (id) => {
    navigate(`/user/${id}`); // Use navigate to go to the user view page
  };

  const CreateNew =() => {
    navigate(`/create`); // Use navigate to go to the create page
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card ">
      
      <Button onClick={()=> CreateNew()} className="primary" label="Create New User"/>
      <DataTable value={users}  resizableColumns showGridlines  tableStyle={{ minWidth: '50rem' }} responsiveLayout="scroll">
        <Column field="name" header="Name" body={(rowData) => rowData.name}></Column>
        <Column field="email" header="Email" body={(rowData) => rowData.email}></Column>
        <Column field="phone" header="Phone" body={(rowData) => rowData.phone}></Column>
        <Column header="Actions" body={(rowData) => (
          <div>            
            <Button onClick={() => handleEdit(rowData.id)} icon="pi pi-user" rounded text severity="info" aria-label="User"  />
            <Button onClick={() => handleDelete(rowData.id)} icon="pi pi-trash" rounded text severity="danger" aria-label="Cancel"/>
            <Button onClick={() => handleView(rowData.id)} icon="pi pi-eye" rounded text severity="info" aria-label="User"  />
          </div>
        )}></Column>
      </DataTable>
    </div>
  );
};

export default Home;
