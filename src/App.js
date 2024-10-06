import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import UserDetail from './components/UserDetail';
import 'primereact/resources/themes/saga-blue/theme.css'; // You can choose a different theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold mb-4">User Management App</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
