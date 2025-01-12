import React, { useState } from 'react'
import axios from 'axios';
import Header from '../Layout/Header';

export default function AddEmp() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [department, setDepartment] = useState('');
  let [role, setRole] = useState('');
  let [salary, setSalary] = useState(0.0);

  let addemployee = (event) => {
    event.preventDefault();
    const employee = { name, email, department, role, salary };
    axios.post("http://localhost:8081/api/admin/save", employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <Header></Header>
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/046/478/918/non_2x/human-resource-management-human-resources-hr-choosing-qualities-best-people-to-join-the-team-for-management-recruitment-employment-headhunting-photo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        <h1 className="text-center mb-4">Add Employee</h1>
        <form onSubmit={addemployee}>
          <div className="mb-3 row align-items-center">
            <label className="col-sm-3 col-form-label text-end" for="name">Name:</label>
            <div className="col-sm-9">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Enter name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-sm-3 col-form-label text-end" for="email">Email:</label>
            <div className="col-sm-9">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-sm-3 col-form-label text-end" for="department">Department:</label>
            <div className="col-sm-9">
              <input
                type="text"
                name="department"
                className="form-control"
                id="department"
                placeholder="Enter department"
                onChange={(event) => setDepartment(event.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-sm-3 col-form-label text-end" for="role">Role:</label>
            <div className="col-sm-9">
              <input
                type="text"
                name="role"
                className="form-control"
                id="role"
                placeholder="Enter role"
                onChange={(event) => setRole(event.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-sm-3 col-form-label text-end" for="salary">Salary:</label>
            <div className="col-sm-9">
              <input
                type="text"
                name="salary"
                className="form-control"
                id="salary"
                placeholder="Enter salary"
                onChange={(event) => setSalary(event.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Employee
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
