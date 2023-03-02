import React, { useEffect } from 'react'
import { useState } from 'react'
// import axios from 'axios';'react-router-dom'
import { Link, Outlet } from "react-router-dom"
// import UserDetails from './UserDetails';
// import { createContext, useContext } from "react";
// const UserContext = createContext();

function Login() {
  const [userdata, setUserdata] = useState("")
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    // e.preventDefault()
    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)

    fetch(`http://localhost:5000/userdetails?username=${username}`)
      .then(res => res.json())
      .then(data => {
        setUserdata(data)
        // alert("login success")
        console.log(userdata)
      })


    fetch("http://localhost:5000/login", {
      method: 'POST',
      body: new URLSearchParams(formData).toString(),
      headers: {
        // "Authorization": tok,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },)
  }

  return (
    <>
      <label htmlFor="userName">userName</label>
      <input type="text" name="" id="userName" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="password">password</label>
      <input type="text" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Link to="/UserDetails">
        <button onClick={handleLogin}>Login</button>
      </Link>     
      <Outlet/>
    </>
  )
}

export default Login