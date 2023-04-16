import React from 'react'
import Navbar from './Navbar'
import photo from '../img/book.jpg'
import photoS from '../img/buyandsell.jpg'
import { SiGooglesheets } from 'react-icons/si'
import { MdSell } from 'react-icons/md'
import Shoppre from './Shoppre'

export default function Shop() {
    return (
        <div className='page3 '>

            <Navbar /> 

            <div className="containershop " >


                <div className="imgS row">


                    <div className="headtextS">
                        <h1 style={{ fontSize: "60px", fontFamily: "Playfair Display SC', serif", color: "#3ec8ea", }}> <MdSell />STORE EAZY
                        </h1>
                        <div className="dropdownS" >
                            <label>
                                <select id='Branch' name='Branch'  >
                                    <option style={{ color: "blue" }}>CATEGORY</option>
                                    <option value="CSE">BOOKS</option>
                                    <option value="IT"> STATIIONERY</option>
                                    <option value="AIDS">TOOLS</option>
                                </select>
                            </label>
                        </div>
                        <span style={{ color: "#9b87ff", fontSize: "20px" }}>We are here to provid best Notes for all semseter and all branch</span>
                    </div>
                    <div className="shopimg">
                        <img src={photoS} alt="shop" style={{ width: "550px" }} />
                    </div>

                </div>
            </div>
            <hr/>



            {/* <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}s
            > */}

            <div className="conCard  row">
                <div className="container  ">
                    <div className="card"  >
                        <img src={photo} className="card-img-top" alt="..." style={{ height: "200px", width: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>



                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                               Read more
                            </button>

                            <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" style={{maxWidth:"600px"}}>
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">S h o p  E a z y</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div>
                                            <Shoppre/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <br />
                            <br />
                            <h5 className="card-title">₹ 100</h5>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="card" >
                        <img src={photo} className="card-img-top" alt="..." style={{ height: "200px", width: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                               Read more
                            </button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-dialog modal-dialog-centered">
                                            <Shoppre/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <h5 className="card-title">₹ 100</h5>

                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="card" >
                        <img src={photo} className="card-img-top" alt="..." style={{ height: "200px", width: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                               Read more
                            </button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-dialog modal-dialog-centered">
                                            <Shoppre/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <h5 className="card-title">₹ 100</h5>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card" >
                        <img src={photo} className="card-img-top" alt="..." style={{ height: "200px", width: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                               Read more
                            </button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-dialog modal-dialog-centered">
                                            <Shoppre/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <h5 className="card-title">₹ 100</h5>

                        </div>
                    </div>
                </div>
            </div>
            {/* </InfiniteScroll> */}
        </div>
    )
}
