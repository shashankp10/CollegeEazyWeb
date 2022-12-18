import React from 'react'
import LandingPage from './LandingPage'
import Navbar from './Navbar'

export default function HomePage() {
  return (
    <>
      <div className='page3'>
      <Navbar/> 
      <h1 style={{textAlign: "left",marginTop:"40px", textShadow: "0 0 3px red", color: "#990011FF", fontSize:"100px", fontFamily: "Playfair Display SC', serif", marginLeft:"40px"}}>WELCOME</h1>

      <h1 style={{textAlign: "left",marginTop:"", textShadow: "0 0 3px red", color: "#990011FF", fontSize:"80px",fontFamily: "Playfair Display SC', serif",marginLeft:"260px"}}> TO </h1>
      
      <h1 style={{textAlign: "left",marginTop:"", textShadow: "0 0 3px black", color: "blue", fontSize:"180px" ,fontFamily: "'Caveat', cursive", marginLeft:"40px"}}> College eazy</h1>
      </div>
      <LandingPage/>
      </>
  )
}
