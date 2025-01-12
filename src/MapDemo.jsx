import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function MapDemo() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                console.log(users);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h1>User data</h1>
            <table className='table table-bordered border-black table-success'>
            <thead>
                <tr className='table-danger'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                  
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) =>
                        <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><button className='btn btn-outline-warning'>update</button><button className='btn btn-outline-danger'>delete</button></td>
                
                </tr>
                    )

                }
            </tbody>
            </table>
        </div>
    )
}
