import React from 'react'
import LandingPage from './LandingPage'
import Navbar from './Navbar'

export default function HomePage() {
  return (
    <>
      <div className='page3'>
      <Navbar/> 
      <h1 style={{textAlign: "center",marginTop:"20px", textShadow: "0 0 5px white", color: "#990011FF", fontSize:"150px", fontFamily: "Playfair Display SC', serif"}}>WELCOME</h1>

      <h1 style={{textAlign: "center",marginTop:"", textShadow: "0 0 5px white", color: "#990011FF", fontSize:"80px",fontFamily: "Playfair Display SC', serif"}}> TO </h1>
      
      <h1 style={{textAlign: "center",marginTop:"", textShadow: "0 0 10px white", color: "#0087ff", fontSize:"150px" ,fontFamily: "Playfair Display SC', serif"}}> COLLEGE EAZY </h1>
      </div>
      <LandingPage/>
      </>
  )
}
