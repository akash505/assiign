import React, { useState } from 'react';
import axios from 'axios';

import { InputText } from 'primereact/inputtext';
        
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const CreateUser = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();  // Replace useHistory with useNavigate

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(response => {
        navigate('/');  // Use navigate instead of history.push('/')
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (

  //   <div className="card ">
      
  //   <Button onClick={()=> CreateNew()} className="primary" label="Create New User"/>
  //   <DataTable value={users}  resizableColumns showGridlines  tableStyle={{ minWidth: '50rem' }} responsiveLayout="scroll">
  //     <Column field="name" header="Name" body={(rowData) => rowData.name}></Column>
  //     <Column field="email" header="Email" body={(rowData) => rowData.email}></Column>
  //     <Column field="phone" header="Phone" body={(rowData) => rowData.phone}></Column>
  //     <Column header="Actions" body={(rowData) => (
  //       <div>            
  //         <Button onClick={() => handleEdit(rowData.id)} label="Edit" className="mr-2" severity="warning" />
  //         <Button onClick={() => handleDelete(rowData.id)} label="Delete" severity="danger" />
  //         <Button onClick={() => handleView(rowData.id)} label="View" className="ml-2" severity="info" />
  //       </div>
  //     )}></Column>
  //   </DataTable>
  // </div>
    <div className="card flex flex-column md:flex-row gap-3">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        {/* <DataTable> */}
        <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
            </div>
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-envelope"></i>
                </span>
                <InputText type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
            </div>
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-phone"></i>
                </span>
                <InputText type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} required />
            </div>
       
        
       
        <Button type="submit" className="btn btn-primary" label="Create"/>
        {/* </DataTable> */}
      </form>
    </div>
  );
};

export default CreateUser;
