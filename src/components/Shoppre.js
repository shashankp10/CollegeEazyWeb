import React from 'react'
import photoS from '../img/book.jpg'

export default function Shoppre() {
    return (
        <div>
            <div className="card" >
                <div className="first row">
                <div className="photo" style={{ width: "50%" }}>
                <img src={photoS} className="card-img-top" alt="..."style={{ width: "200px", marginLeft:"50px" }} />
                </div>
                <div className="price row"style={{margin:"0", width: "50%" ,display:"flex",alignItems:"center",}}>
                    <span style={{fontSize:"1.5rem",fontWeight:'500', textAlign:"center",padding:"10px 30px"}}> 
                    <span style={{fontSize:"30px"}} > Mathamatics book </span>
                   <br/>
                    ₹ <span style={{color:"blue"}}> 100 </span>  
                    <br/>
                    <span style={{fontSize:"20px"}}> Inclusive of all taxes </span>
                    </span>
                </div>
                </div>                
                <div className="card-body">
                    <p className="card-text">This is a maths book of second semester b tech if you wnat to buy you can contact through my any number mail and social media</p>
                </div>
                <div className="contact " style={{padding:"10px 20px",}}>
                    {/* <h2>CONTACT DELAITS</h2> */}
                    <h6 >Name : <span style={{color:"blue"}}>Aadil khan</span></h6>
                    {/* <h6 >Phone No. : <span style={{color:"blue"}}>9438832951</span></h6> */}
                    <h6 >e mail : <span style={{color:"blue"}}>collegeeazy@123gmail.com</span></h6>
                    {/* <h6 >Social Media : <span style={{color:"blue"}}>aadil@003</span></h6> */}
                </div>
            </div>
        </div>
    )
}
