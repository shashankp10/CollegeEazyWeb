import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import photo1 from '../img/not.png'
import photo2 from '../img/att.png'
import photo3 from '../img/sell.png'
import { useEffect } from 'react';

export default function LandingPage() {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("Token")) {
            navigate('/')
        }
    }, [])
    return (
        <>
            <div className="LandingPage">
                <div className='pagecontainer'>
                <div className="containerRight" style={{ }}>
                        <img src={photo1} alt="img" style={{ width: "70%" }} />
                    </div>
                    <div className="containerleft" >
                        <Link to="/Notes" style={{ textDecoration: "none" }}>
                            <div className="notedesc" style={{ textAlign: "center" }}>
                                <h1>NOTES</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum deleniti assumenda voluptatum maxime eius illum sit facere nam molestiae temporibus velit sint corporis, perspiciatis, est tempora aperiam perferendis totam.</span>
                            </div>
                        </Link>
                    </div>
                   
                </div>
            </div>
            <div className="LandingPageA">
                <div className='pagecontainerA'>
                    <div className="containerleftA">
                        <Link to="/AttendancePage" style={{ textDecoration: "none",}}>
                            <div className="notedesc">
                                <h1>ATTENDANCE</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, expedita eveniet nesciunt cum voluptatem sit necessitatibus consectetur autem maxime repudiandae odit! Deleniti ipsum animi ipsa saepe cupiditate voluptas amet unde!</span>
                            </div>
                        </Link>
                    </div>
                    <div className="containerRightA" style={{ overflow: "hidden" }}>
                        <img src={photo2} alt="img" style={{ width: "60%" }} />
                    </div>
                </div>
            </div>

            <div className="LandingPageB">
                <div className='pagecontainerB'>

                <div className="containerRightB" style={{ overflow: "hidden" }}>
                        <img src={photo3} alt="img" style={{ width: "60%" }} />
                    </div>
                    <div className="containerleftB">
                        <div className="notedesc">
                            <h1>BUY AND SELL</h1>
                            <span >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum veritatis beatae aliquid quia, ab vel! Tenetur sed odio, repellendus eaque quibusdam aperiam quas, eos ea fugiat illo ipsam quos laudantium.</span>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="LandingPageabout">
                <div className='pagecontainerabout'>
                    <h1>ABOUT</h1>
                    <div className="boxabout">
                        <h1 >The World Wide Web, commonly known as the Web, is an information system enabling documents and other web resources to be accessed over the Internet. Documents and downloadable media are made available to the network through web servers and can be accessed by programs such as web browsers.</h1>
                    </div>


                    <br />

                </div>
            </div>

            <div className="footer">

                <div className="footerSection">

                    <div className='left'>
                        <h2>CONTACT US:</h2>
                        <div className="contact">
                            <span>www.collegeazy.com</span>
                            <br />
                            <span>Mobile: +91 76782 58***</span>
                            <br />
                            <span>Email: collegeazy@gmail.com</span>
                        </div>
                    </div>

                    <div className="contributors">
                        <h2>OUR TEAM</h2>
                        <div className='namess'>

                            <span>Shashank Pandey</span>
                            <br />
                            <span>Mohd Azam</span>
                            <br />
                            <span>Samir Khan</span>
                            <br />
                            <span>Yashi Vaish</span>

                        </div>

                    </div>

                </div>
                <div className='copyright' style={{marginTop:"20px"}}>

                    <h4 style={{ backgroundColor: "#110875", color: "#dfe8fd", textAlign: "center", padding: "15px 15px " }}>
                        Copyright &copy; collegeazy.com
                    </h4>
                </div>


            </div>
        </>
    )
}
