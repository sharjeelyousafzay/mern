import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Showdata() {
    let[user_data,setUserdata]=useState([]);
    useEffect(()=>{
     datalao();
    })
    async function datalao(){
        await axios.get("http://localhost:3005/Web/user")
        .then((abc)=>{
            console.log(abc.data)
            setUserdata(abc.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
  return (
    <div className='container'>
        <h1>User data</h1>
        <hr />
        <div className='row'>
          {(user_data.length === 0) ?(
          <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <div className="card-title text-danger"></div>
                </div>
            </div>
          </div>
          ):
          user_data.map((a)=>(
            <div className="col-md-3 mt-2">
                <div className="card">
                    <div className="card-title">{a.user_name}</div>
                    <div className="card-text">{a.user_email}</div>
                </div>
            </div>
          ))
          }
        </div>
    </div>
  )
}
