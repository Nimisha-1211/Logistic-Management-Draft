import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const roles = [
  { name: 'Admin', icon: '🧑‍💼' },
  { name: 'Warehouse Manager', icon: '🏢' },
  { name: 'Delivery Staff', icon: '🚚' },
];

function LoginPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    employment:''
  });
  const navigate=useNavigate()

  const handleLoginClick = (role) => {
    setFormData((prev)=>({
      ...prev,
      employment: role,
    }))
    setSelectedRole(role);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();


     const body={
       method:'POST',
       headers:{'content-Type':'application/json'},
       body:JSON.stringify(formData)
     } 
   

    if (isRegistering) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Registration API logic here (MongoDB)
      alert(
        Registering ${formData.name} as ${selectedRole} with email: ${formData.email}
      );

      // Example POST request (backend required)
      /*
      fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: selectedRole }),
      }).then(...);
      */
   
       const fetching=await fetch('http://localhost:3000/register',body)
      
       const response=await fetching.json()
       console.log(response)
      
     


    } else {
      // Login API logic here (MongoDB)
      alert(
        Logging in as ${selectedRole} with email: ${formData.email}
      );

      // Example POST request (backend required)
      /*
      fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      }).then(...);
      */

      const fetching=await fetch('http://localhost:3000/login',body)
       const response=await fetching.json()
       console.log(response)
          if(fetching.status===201 && selectedRole==='Admin'){
           navigate('/admin')
        }
    }
  };

  return (
    <div className="container">
      <h1 className="title">Logistics Management System</h1>

      {!selectedRole ? (
        <div className="card-container">
          {roles.map((role) => (
            <div className="role-card" key={role.name}>
              <div className="icon">{role.icon}</div>
              <h2>{role.name}</h2>
              <button onClick={() => handleLoginClick(role.name)}>
                Login as {role.name}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>{isRegistering ? 'Register' : 'Login'} as {selectedRole}</h2>

          {isRegistering && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />

          {isRegistering && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          )}

          <button type="submit">
            {isRegistering ? 'Register' : 'Login'}
          </button>

          <button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Already have an account? Login' : 'New user? Register'}
          </button>

          <button
            type="button"
            className="back"
            onClick={() => {
              setSelectedRole(null);
              setIsRegistering(false);
            }}
          >
            Back
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginPage;