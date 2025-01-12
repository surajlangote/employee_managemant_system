
import React from 'react'
import axios from 'axios';

export default function Axios() {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then((res)=>{
      console.log(res);
    })
    .catch((error)=>
    {
      console.log("error"+error);
    })
  return (
    <div>
     Example of get() method
    </div>
  )
}
