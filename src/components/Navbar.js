import React from 'react'
import LoginPage from './LoginPage';
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
import { MdSell } from "react-icons/md";
import Notes from './Notes';

export default function Navbar() {

  const handleColse = (e) => {
    // window.location.reload(false);
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">College Eazy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* pop up for note */}
            <li className="nav-item">
              <div className="notesModal">
                <Link className="nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal"><GiNotebook /> Notes </Link>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{float:"right"}}></button>
                      <div className="modal-body">
                        <ul>
                          <div className='modalCard'>
                          <div> <li data-bs-toggle="modal" data-bs-target="#NotesPage"><span href="">NOTES</span></li></div>
                            <div className="modal  login fade" id="NotesPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog">
                                <div className="modal-content" style={{widht:"700px", height:"500px", display:"flex",alignItems: "center", justifyContent: "center",marginLeft:"140px", marginTop:"0px"}}>
                                  <Notes />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div><li><span href="#">BOOKS PDF</span></li></div>
                          <div><li><span href="#">YOUTUBE LINKS</span></li></div>
                          <div><li><span href="#">WEB LINKS</span></li></div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/AttendancePage"><SiGooglesheets /> Attendance</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><MdSell /> Sell & Buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><BsFillQuestionCircleFill /> About</a>
            </li>
          </ul>

          <div className='modalCard'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginPage">
              Login
            </button>
            <div className="modal  login fade" id="LoginPage" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <button type="button" className="btn-close" onClick={handleColse} data-bs-dismiss="modal" aria-label="Close"></button>
                  <LoginPage />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}
