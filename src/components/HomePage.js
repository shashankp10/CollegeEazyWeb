import React from 'react'
import Navbar from './Navbar'

export default function HomePage() {
  return (
    <>
      <div className='page3'>
      <Navbar/>
      <h1 style={{textAlign: "center",marginTop:"20px", textShadow: "0 0 5px white", color: "#FF7800", fontSize:"150px"}}>WELCOME</h1>
      <h1 style={{textAlign: "center",marginTop:"", textShadow: "0 0 5px white", color: "#FF7800", fontSize:"80px"}}> TO </h1>
      <h1 style={{textAlign: "center",marginTop:"", textShadow: "0 0 10px white", color: "#0087ff", fontSize:"150px"}}> COLLEGE EAZY </h1>
      </div>
      </>
  )
}
