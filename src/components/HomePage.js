import React from 'react'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import photo from '../img/stu1.png'
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'

export default function HomePage() {

  
  // const navigate = useNavigate()



  // useEffect(() => {

  //   if (localStorage.getItem('Token')) {
  //     console.log("stored")
  //   } else {
  //     console.log("not found stored")
  //   }
  //     if (!localStorage.getItem("Token")) {
  //         console.log("this is homw useeffect")
  //     }
  // }, [])


  return (
    <>
    <div className="body">
      <div className='page3'>
      <Navbar/> 
      <div className="con">
      <div className="headingH" >
      <h1 className='welcome'>WELCOME TO
      College eazy <br/><h6 >we provides Organized Concise Accurate Comprehensive Visual Personalized Reviewable notes for you. Best notes are organized in a logical and easy-to-follow manner, with headings, subheadings, and bullet points</h6>
      <button className='btn btn-primary' style={{justifyContent:"center"}}>browsers notes</button>
      </h1>
      </div>
      <div className="imgN">
        <img src={photo} alt="img" />
      </div>
      </div>
      </div>
      <LandingPage/>
      </div>
      </>
  )
}
