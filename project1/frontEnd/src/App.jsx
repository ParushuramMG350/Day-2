import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList';
import UserForm from './userForm';

const App = () =>{
  const [users, setUsers] = useState([]);
  const handledUserAdded = (newUser) =>{
    setUsers([...users, newUser]);
  }

  return (
    <div>
      <h1>User Management System</h1>
      <UserForm OnUserAdded={handledUserAdded} />
      <UserList />
    </div>
  );
};

export default App;
