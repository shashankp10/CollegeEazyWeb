import React from 'react'
import photo from '../img/logo2.png'
import Navbar from './Navbar'


export default function AttendancePage() {
  return (
    <>

            <div className='page3'>
                <Navbar />
                <div className="carouselForNotes" style={{ height: "450px", width: "800px", marginLeft: "253px", marginTop: "60px" }}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={photo} className="d-block w-100" style={{ height: "450px", width: "30px", position: "relative",  filter: "blur(5px)" }} alt="..." />
                            </div>
                            <div className="text" style={{ justifyContent: "center", display: "flex" }}>
                                <h1 style={{ position: "absolute", top: "50%", textAlign: "center", color: "black", fontSize: "50px" }} >This is AttendancePage</h1>
                            </div>

                            <div className="carousel-item">
                                <img src={photo} className="d-block w-100" style={{ height: "450px", width: "300px", position: "relative",  filter: "blur(5px)" }} alt="..." />
                            </div>
                            <div className="text" style={{ justifyContent: "center", display: "flex" }}>
                                <h1 style={{ position: "absolute", top: "50%", textAlign: "center", color: "black", fontSize: "50px" }} >This is AttendancePage</h1>
                            </div>

                            <div className="carousel-item">
                                <img src={photo} className="d-block w-100" style={{ height: "450px", width: "300px", position: "relative",  filter: "blur(5px)" }} alt="..." />
                            </div>
                            <div className="text" style={{ justifyContent: "center", display: "flex" }}>
                                <h1 style={{ position: "absolute", top: "50%", textAlign: "center", color: "black", fontSize: "50px" }} >This is AttendancePage</h1>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </>
  )
}
