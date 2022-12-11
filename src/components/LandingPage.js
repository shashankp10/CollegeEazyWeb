import React from 'react'
import { Link } from "react-router-dom";
import photo1 from '../img/notebg.jpg'
import photo2 from '../img/bg.jpg'
import photo3 from '../img/bg3.jpg'

export default function LandingPage() {
    return (
        <>
            <div className="LandingPage">
                <div className='pagecontainer'>
                    <div className="containerleft">
                        <Link to="/Notes" style={{ textDecoration: "none", color: "#990011FF" }}>
                            <h1>NOTES</h1>
                        </Link>
                    </div>
                    <div className="containerRight" style={{ width: "450px", overflow: "hidden" }}>
                        <img src={photo1} alt="img" style={{ height: "400px", width: "600px" }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="LandingPageA">
                <div className='pagecontainerA'>
                    <div className="containerleftA">
                        <Link to="/AttendancePage" style={{ textDecoration: "none", color: "#990011FF" }}>
                            <h1>ATTENDANCE</h1>
                        </Link>
                    </div>
                    <div className="containerRightA" style={{ height: "400px", width: "400px", overflow: "hidden" }}>
                        <img src={photo2} alt="img" style={{ height: "400px", width: "600px" }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="LandingPageB">
                <div className='pagecontainerB'>
                    <div className="containerleftB">
                        <h1>BUY AND SELL</h1>
                    </div>
                    <div className="containerRightB" style={{ height: "400px", width: "450px", overflow: "hidden" }}>
                        <img src={photo3} alt="img" style={{ height: "400px", width: "450px" }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="LandingPageabout">
                <div className='pagecontainerabout'>
                    <h1>ABOUT</h1>
                    <div className="boxabout">
                        <h1>The World Wide Web, commonly known as the Web, is an information system enabling documents and other web resources to be accessed over the Internet. Documents and downloadable media are made available to the network through web servers and can be accessed by programs such as web browsers.</h1>
                    </div>
                    <h2>@copyright</h2>
                </div>
            </div>
        </>
    )
}
