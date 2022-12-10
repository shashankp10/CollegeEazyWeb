import React from 'react'
import SubjectCard from './SubjectCard'

export default function SemesterCard() {
    return (
        <>
            <button style={{ float: "right" }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <h3 style={{ float: "left", marginTop: "10px", fontSize: "30px", color: "blue" }}>Semseter</h3>
            <div >
                <ul className="semestercard" style={{ height: "470px" }}>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subjectPage"><span href="">1st</span></li></div>
                        <div className="modal  cardPage fade" id="subjectPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "580px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px", marginLeft:"150px"  }}>
                                    <SubjectCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                     <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subjectPage"><span href="">2nd</span></li></div>
                        <div className="modal  cardPage fade" id="subjectPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "530px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px", marginLeft:"150px" }}>
                                    <SubjectCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                     <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subjectPage"><span href="">3rd</span></li></div>
                        <div className="modal  cardPage fade" id="subjectPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "530px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px", marginLeft:"150px" }}>
                                    <SubjectCard />
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subjectPage"><span href="">4th</span></li></div>
                        <div className="modal  cardPage fade" id="subjectPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "530px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px", marginLeft:"150px" }}>
                                    <SubjectCard />
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subjectPage"><span href="">5th</span></li></div>
                        <div className="modal  cardPage fade" id="subjectPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "530px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px", marginLeft:"150px" }}>
                                    <SubjectCard />
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subjectPage"><span href="">6th</span></li></div>
                        <div className="modal  cardPage fade" id="subjectPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "530px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px", marginLeft:"150px" }}>
                                    <SubjectCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                     <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subjectPage"><span href="">7th</span></li></div>
                        <div className="modal  cardPage fade" id="subjectPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "530px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px", marginLeft:"150px" }}>
                                    <SubjectCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                     <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#subjectPage"><span href="">8th</span></li></div>
                        <div className="modal  cardPage fade" id="subjectPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "530px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0px", marginLeft:"150px" }}>
                                    <SubjectCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </ul>
            </div>

        </>
    )
}
