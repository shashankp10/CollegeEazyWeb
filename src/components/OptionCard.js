import React from 'react'
import Notes from './Notes'

export default function OptionCard() {
    return (
        <>
            <button style={{ float: "right" }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <h3 style={{ float: "left", marginTop: "10px", fontSize: "30px", color: "blue" }}>Subject</h3>
            <div >
                <ul className="subjectcard" style={{ height: "260px", width: "200px" }}>

                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#optionPage"><span href="">NOTES</span></li></div>
                        <div className="modal  cardPage fade" id="optionPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "290px", marginLeft:"130px" }}>
                                    <Notes />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#optionPage"><span href="">BOOKS PDF</span></li></div>
                        <div className="modal  cardPage fade" id="optionPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "290px", marginLeft:"130px" }}>
                                    <Notes />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#optionPage"><span href="">YOUTUBE LINKS</span></li></div>
                        <div className="modal  cardPage fade" id="optionPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "290px", marginLeft:"130px" }}>
                                    <Notes />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cardPage'>
                        <div> <li data-bs-toggle="modal" data-bs-target="#optionPage"><span href="">LINKS</span></li></div>
                        <div className="modal  cardPage fade" id="optionPage" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{ widht: "700px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "290px", marginLeft:"130px" }}>
                                    <Notes />
                                </div>
                            </div>
                        </div>
                    </div>


                </ul>
            </div>
        </>
    )
}
