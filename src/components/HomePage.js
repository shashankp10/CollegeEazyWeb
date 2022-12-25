import React from 'react'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import photo from '../img/homelogo.png'

export default function HomePage() {
  return (
    <>
      <div className='page3'>
      <Navbar/> 
      <div className="heading" style={{float:"left",  marginLeft:"150px",marginTop:"150px"}}>
      <h1 style={{ textAlign:"center",marginTop:"40px", color: "#3ec8ea", fontSize:"80px", fontFamily: "Playfair Display SC', serif"}}>WELCOME</h1>

      <h1 style={{ textAlign:"center", color: "#3ec8ea", fontSize:"30px",fontFamily: "Playfair Display SC', serif"}}> TO  <span style={{color:"#9b87ff",fontSize:"50px"}}> College eazy </span> </h1>
      
      </div>
      <div className="img" style={{float:"right", marginRight:"70px",marginTop:"0px" }}>
        <img src={photo} alt="img" style={{height: "550px", width: "570px",}} />
      </div>
      </div>
      <LandingPage/>
      </>
  )
}
