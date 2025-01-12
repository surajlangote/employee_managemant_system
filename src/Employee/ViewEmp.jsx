import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./View.css";
import Header from "../Layout/Header";

export default function ViewEmp() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/admin/findall")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees: " + error);
      });
  }, []);

  let deleteemp = (id) => {
    axios
      .delete(`http://localhost:8081/api/admin/delete/${id}`)
      .then((res) => {
        console.log("Data deleted successfully");
        setEmployees(employees.filter((emp) => emp.id !== id));
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  return (
    <div className="img">
      <Header></Header>
      <br /><br /><br /><br />
      <h1 className="title">Employee List</h1>
      <div className="content-wrapper">
        <table className="table table-bordered border-warning table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>{emp.role}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <Link
                      to={`/updateemp/${emp.id}`}
                      className="btn btn-warning"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteemp(emp.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No employees found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
