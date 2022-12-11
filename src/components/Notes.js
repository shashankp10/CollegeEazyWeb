import React from 'react'
import Navbar from './Navbar'


export default function Notes() {
    return (
        <>


            <div className='page3'>
                <Navbar />
                <div className="notesPage" >
                    <div className="noteboxdropdown">
                        <div >
                            <div >
                                <div className='heading' >
                                    <h1 style={{ float: "LEFT", fontSize: "50px", paddingLeft: "50px", margin: "10px 40px 15px 30px" }}>NOTES</h1>
                                </div>

                                <div style={{ float: "right" }}>
                                    <div className="boxnote">

                                        <div class="dropdown">
                                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                               NOTES
                                            </a>

                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                        {/* <h1>NOTES</h1> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

