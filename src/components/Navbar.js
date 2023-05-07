import React, { useEffect } from 'react'
import LoginPage from './LoginPage';
import { Link, useNavigate } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
import { MdSell } from "react-icons/md";
import Notes from './Notes';
import SemesterCard from './SemesterCard';
import { useState } from 'react';

export default function Navbar() {

  const handleColse = (e) => {
    // window.location.reload(false);
  }

  const [navbar, setNavbar] = useState(false);

  const setBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', setBackground);

  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setIsLoggedIn(true);
      console.log("this is useeffect login ")
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  
  const handleLogin = () => {
    if (localStorage.getItem("Token")) {
      alert("Successfully login");
      setIsLoggedIn(true);
      navigate("/")
    }
  };


  const handleLogout = () => {
    {
      localStorage.removeItem("Token")
      alert("Successfully log out");
      setIsLoggedIn(false);
      navigate("/")
    }
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top "  >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ margin: "auto" }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ margin: "auto" }}>
              <li className="nav-item">
                <Link className="nav-link active" to="/Notes"><SiGooglesheets /> Notes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/AttendancePage"><SiGooglesheets /> Attendance</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Shop"><MdSell />Store</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#"><BsFillQuestionCircleFill /> About</a>
              </li>
            </ul>

            <div className='modalCard' >
              <Link to="/Logisign">
                <button className="btn btn-primary " type="submit" onClick={isLoggedIn ? handleLogout : handleLogin}>
                  {isLoggedIn ? 'Logout' : 'Login'}
                </button>
              </Link>
            </div>

          </div>
        </div>
      </nav>

    </>
  )
}