import React, { useEffect } from 'react'
import { useState } from 'react'
// import axios from 'axios';'react-router-dom'
// import { Link, Outlet } from "react-router-dom"
// import UserDetails from './UserDetails';
// import { createContext, useContext } from "react";
// const UserContext = createContext();
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  // const [userdata, setUserdata] = useState("")
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState("")
  const [response, setResponse] = useState([]);
  const handleLogin = async (e) => {
    // e.preventDefault()
    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)

    // fetch(`http://localhost:5000/userdetails?username=${username}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setUserdata(data)
    //     // alert("login success")
    //     console.log(userdata)
    //   })


    // fetch("http://localhost:5000/login", {
    //   method: 'POST',
    //   body: new URLSearchParams(formData).toString(),
    //   headers: {
    //     // "Authorization": tok,
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // },)
    const resp = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),

    });
    const data = await resp.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem("jwt", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      // window.location.href = '/landing'
      navigate('/UserDetails');
    }
    setResponse(data);
    console.log(response.message === "Login Successful");
    console.log(JSON.stringify(response) === "Login Successful");
    console.log(response.token);
  }

  return (
    <div className='container'>
      <label htmlFor="userName">userName</label>
      <input type="text" name="" id="userName" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="password">password</label>
      <input type="text" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='btnlogin' onClick={handleLogin}>Login</button>
      <div id="mess">
        {response.message ? (
          <div style={{ color: "red" }}>{response.message}</div>
        ) : null}
      </div>
    </div>
  )
}

export default Login
