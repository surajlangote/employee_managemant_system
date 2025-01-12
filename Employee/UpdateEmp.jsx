import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateEmp() {
  const { id } = useParams(); 
  console.log('Received ID from URL:', id);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [role, setRole] = useState('');
  const [salary, setSalary] = useState(0.0);

  useEffect(() => {
    axios.get(`http://localhost:8081/api/admin/findbyid/${id}`)
      .then(response => {
        const employee = response.data;
        setName(employee.name);
        setEmail(employee.email);
        setDept(employee.department);
        setRole(employee.role);
        setSalary(employee.salary);
      })
      .catch(error => {
        console.error('Error fetching employee:', error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      name,
      email,
      department: dept,
      role,
      salary: parseFloat(salary),
    };

    axios.put(`http://localhost:8081/api/admin/update/${id}`, updatedEmployee)
      .then(response => {
        alert('Employee updated successfully');
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error updating employee:', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-info text-white text-center">
              <h2>Update Employee</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <input
                    type="text"
                    className="form-control"
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    placeholder="Enter Department"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Enter Role"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Salary</label>
                  <input
                    type="number"
                    className="form-control"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="Enter Salary"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success w-50">
                    Update
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center text-muted">
              Employee Management System
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
