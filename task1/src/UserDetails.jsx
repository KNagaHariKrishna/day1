import React, { useState } from 'react'
// import { createContext, useContext } from "react";
import "./App.css"


// const UserContext = createContext();
function UserDetails() {

  // const user = useContext(UserContext)
  // console.log(user);
  // const [a,seta]=useState("")

  // const showUser=()=>{
  //   fetch(`http://localhost:5000/userdetails?username=${user}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       seta(data)
  //       console.log(a);
  //     });
  // }

  return (
    <>
      <div className='header'>
        <h4>LOGO</h4>
        <div>
          <span className='name'>Name</span>
          <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="profileimg" />
        </div>
      </div>
      <div className='body'>
        mobile num:-
        <br />
        age:- 
      </div>
    </>
  )
}

export default UserDetails