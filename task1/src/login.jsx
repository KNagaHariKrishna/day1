import React from 'react'
// import { renderMatches } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom"
function Login() {
  return (
    <>
      <label htmlFor="userName">userName</label>
      <input type="text" name="" id="userName" />
      <label htmlFor="password">password</label>
      <input type="text" name="" id="password" />
      <Link to={"/UserDetails"}>
        <button>Login</button>
      </Link>
      <Outlet />
    </>
  )
}

export default Login