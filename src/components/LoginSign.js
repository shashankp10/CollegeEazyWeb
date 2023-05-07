import React, { useEffect } from 'react'
import Navbar from './Navbar'
import LoginPage from './LoginPage'
import {  useNavigate } from 'react-router-dom'

export default function LoginSign() {

  const navigate = useNavigate()


  useEffect(() => {
    if (localStorage.getItem("Token")) {
      console.log("login and sign up")
      navigate("/")
    } else {
      console.log("not found stored")
    }
  }, [navigate])


  return (
    <>
 <div className="log">
      <Navbar/>
    <div className="page" style={{paddingTop:"",backgroundColor:"white"}}>
        <LoginPage/>
    </div>
 </div>
    </>
  )
}
