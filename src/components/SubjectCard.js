import React from 'react'
import Notes from './Notes'
import OptionCard from './OptionCard'

export default function SubjectCard() {
    return (
        <>
            <button style={{ float: "right" }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <h3 style={{ float: "left", marginTop: "10px", fontSize: "30px", color: "blue" }}>Subject</h3>
            <div >
                <ul className="subjectcard" style={{ height: "460px", width: "200px" }}>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subPage"><span href="">Physics</span></li></div>
                        <div className="modal  cardPage fade" id="subPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "360px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px", marginLeft:"200px" }}>
                                    <OptionCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subPage"><span href="">Chemistery</span></li></div>
                        <div className="modal  cardPage fade" id="subPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "360px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px" , marginLeft:"200px"}}>
                                <OptionCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subPage"><span href="">Maths</span></li></div>
                        <div className="modal  cardPage fade" id="subPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "360px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px" , marginLeft:"200px"}}>
                                <OptionCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subPage"><span href="">DSA</span></li></div>
                        <div className="modal  cardPage fade" id="subPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "360px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px" , marginLeft:"200px"}}>
                                <OptionCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subPage"><span href="">OOPS</span></li></div>
                        <div className="modal  cardPage fade" id="subPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "360px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px" , marginLeft:"200px"}}>
                                <OptionCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subPage"><span href="">IKS</span></li></div>
                        <div className="modal  cardPage fade" id="subPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "360px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px" , marginLeft:"200px"}}>
                                <OptionCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subPage"><span href="">CM</span></li></div>
                        <div className="modal  cardPage fade" id="subPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "360px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px" , marginLeft:"200px"}}>
                                <OptionCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subPage"><span href="">DM</span></li></div>
                        <div className="modal  cardPage fade" id="subPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "360px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px" , marginLeft:"200px"}}>
                                <OptionCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}
