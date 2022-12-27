import React , { useState } from 'react'
import Navbar from './Navbar'
import { FaDownload } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import profile from '../img/profile.png'
import Pdfviewer from './Pdfviewer';
import Note from './Note';






export default function PrePage() {


  const [view, setView] = useState(false);

  const handleClick = () => {
    setView(!view);
  }

  return (


    <>
      <div className='prePage'>
        <Navbar />
        <div className="container">


          <div className="prebox">
            <div className="title" style={{ padding: "30px 30px", color: "#27a9d4" }}>
              <h1>Physics unit-1 Mechanics-motion and its type</h1>
            </div>
            <button className='btn1' > Free Download <FaDownload /></button>
            <button className='btn2' onClick={handleClick}>Preview <FaBookReader /></button>
            <div className="userpro">

              <div className="user" >
                <h2 style={{ fontSize: "20px" }}>Uploded By</h2>
                <img src={profile} alt="profile" style={{ width: "90px" }} />
                <h4 style={{ fontSize: "20px" }}>Aadil khan</h4>
                <h6 style={{ fontSize: "15px" }}>IT 2nd year</h6>
                <h5 style={{ fontSize: "15px" }}>ADGITM</h5>
              </div>

              <div className="download" style={{ float: "right", marginTop: "-190px" }}>
                <h1 style={{ fontSize: "80px" }}>500</h1>
                <h4>Downloads</h4>
              </div>
            </div>
          </div>
          <br />

        </div>
        <div className="PDF-viewer">

          {" "} {view ? (

            <Pdfviewer />

          ) : (<Note/>)}


        </div>
      </div>
    </>
  )
}
