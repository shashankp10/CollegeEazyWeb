import React from 'react'
import Navbar from './Navbar'
import photo1 from '../img/note.jpg'

export default function Note2() {
    return (
        <div className='pagenote'>
            <Navbar />
            <div className="rightcard" style={{ float: "left", marginLeft: "150px",marginTop: "10px" }}>
                <div class="card" style={{ borderRadius: "1.3rem", height: "250px", width: "360px", overflow: "hidden" }}>
                    <img src={photo1} class="card-img-top" style={{ borderRadius: "1.3rem", padding: "15px 10px", height: "150px", width: "350px", overflow: "hidden" }} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title" style={{ paddingLeft: "0%", top: "20%", color: "black", textAlign: "center", fontSize: "70px" }}>Card title</h5>
                    </div>
                </div>
                <div class="card" style={{ borderRadius: "1.3rem", height: "250px", width: "360px", overflow: "hidden" }}>
                    <img src={photo1} class="card-img-top" style={{ borderRadius: "1.3rem", padding: "15px 10px", height: "200px", width: "350px", overflow: "hidden" }} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title" style={{ paddingLeft: "0%", top: "20%", color: "black", textAlign: "center", fontSize: "70px" }}>Card title</h5>
                    </div>
                </div>
            </div>


            <div className="leftcard" style={{ float: "right", marginRight: "150px",marginTop: "10px" }}>
                <div class="card" style={{ borderRadius: "1.3rem", height: "250px", width: "360px", overflow: "hidden" }}>
                    <img src={photo1} class="card-img-top" style={{ borderRadius: "1.3rem", padding: "15px 10px", height: "200px", width: "350px", overflow: "hidden" }} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title" style={{ paddingLeft: "0%", top: "20%", color: "black", textAlign: "center", fontSize: "70px" }}>Card title</h5>
                    </div>
                </div>
                <div class="card" style={{ borderRadius: "1.3rem", height: "250px", width: "360px", overflow: "hidden" }}>
                    <img src={photo1} class="card-img-top" style={{ borderRadius: "1.3rem", padding: "15px 10px", height: "200px", width: "350px", overflow: "hidden" }} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title" style={{ paddingLeft: "0%", top: "20%", color: "black", textAlign: "center", fontSize: "70px" }}>Card title</h5>
                    </div>
                </div>

            </div>
        </div >
    )
}
