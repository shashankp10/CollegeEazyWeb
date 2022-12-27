import React from 'react'
import { Link } from "react-router-dom";
import photo1 from '../img/NOTESLO.jpg'
import photo2 from '../img/notelogo1.jpg'
import photo3 from '../img/buyandsell.jpg'

export default function LandingPage() {
    return (
        <>
            <div className="LandingPage">
                <div className='pagecontainer'>
                    <div className="containerleft">
                        <Link to="/Notes" style={{ textDecoration: "none", color: "#3ec8ea" }}>
                            <div className="notedesc" style={{ width: "500px", textAlign: "center" }}>
                                <h1>NOTES</h1>
                                <span style={{ color: "#9b87ff", fontSize: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum deleniti assumenda voluptatum maxime eius illum sit facere nam molestiae temporibus velit sint corporis, perspiciatis, est tempora aperiam perferendis totam.</span>
                            </div>
                        </Link>
                    </div>
                    <div className="containerRight" style={{ overflow: "hidden" }}>
                        <img src={photo1} alt="img" style={{ width: "450px" }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="LandingPageA">
                <div className='pagecontainerA'>
                    <div className="containerleftA">
                        <Link to="/AttendancePage" style={{ textDecoration: "none", color: "#3ec8ea" }}>
                            <div className="notedesc" style={{ width: "500px" }}>
                                <h1>ATTENDANCE</h1>
                                <span style={{ color: "#9b87ff", fontSize: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, expedita eveniet nesciunt cum voluptatem sit necessitatibus consectetur autem maxime repudiandae odit! Deleniti ipsum animi ipsa saepe cupiditate voluptas amet unde!</span>
                            </div>
                        </Link>
                    </div>
                    <div className="containerRightA" style={{ overflow: "hidden" }}>
                        <img src={photo2} alt="img" style={{ width: "500px" }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="LandingPageB">
                <div className='pagecontainerB'>
                    <div className="containerleftB">
                        <div className="notedesc" style={{ width: "400px" }}>
                            <h1>BUY AND SELL</h1>
                            <span style={{ color: "#9b87ff", fontSize: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum veritatis beatae aliquid quia, ab vel! Tenetur sed odio, repellendus eaque quibusdam aperiam quas, eos ea fugiat illo ipsam quos laudantium.</span>
                        </div>
                    </div>
                    <div className="containerRightB" style={{ overflow: "hidden" }}>
                        <img src={photo3} alt="img" style={{ width: "500px" }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="LandingPageabout">
                <div className='pagecontainerabout'>
                    <h1>ABOUT</h1>
                    <div className="boxabout" style={{ backgroundColor: "white", height: "14rem" }}>
                        <h1 style={{ color: "#9b87ff" }}>The World Wide Web, commonly known as the Web, is an information system enabling documents and other web resources to be accessed over the Internet. Documents and downloadable media are made available to the network through web servers and can be accessed by programs such as web browsers.</h1>
                    </div>

                    <div className="footer"style={{boxShadow: "1px 0px 10px #9b87ff", borderRadius:"1rem", margin:"10px 10px"}}>

                        <div className="footerSection" style={{display:"inline-flex",marginLeft:"5rem"}}>

                            <div style={{ textAlign: "center",padding:"40px 40px "}}>
                               <h2>CONTACT US:</h2>
                                <div className="contact" style={{   fontSize: "25px",padding:"0px 20px " }}>
                                    <span>www.collegeazy.com</span>
                                     <br/>
                                    <span>Mobile: +91 76782 58***</span>
                                     <br/>
                                    <span>Email: collegeazy@gmail.com</span>
                                </div>
                            </div>

                            <div className="contributors" style={{ marginLeft:"16rem", textAlign: "center", padding:"40px 40px " }}>
                                <h2>OUR TEAM</h2>
                                <div style={{ fontSize: "25px",padding:"0px 20px " }}>

                                    <span>Shashank Pandey</span>
                                    <br/>
                                    <span>Mohd Azam</span>
                                    <br/>
                                    <span>Samir Khan</span>
                                    <br/>
                                    <span>Yashi Vaish</span>

                                </div>

                            </div>
                        </div>
                    </div>
                  <br/>
                  <div>
                    
                        <h4 style={{ backgroundColor:"#110875" , color:"#dfe8fd",textAlign: "center",padding:"15px 15px "  }}>
                            Copyright &copy; collegeazy.com
                        </h4>
                  </div>
                </div>
            </div>
        </>
    )
}
