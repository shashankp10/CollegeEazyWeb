import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import { SiGooglesheets } from "react-icons/si";
import photo from '../img/note.jpg'


export default function Notes() {

    const [val, setVal] = useState({
        Branch: "",
        Semester: "",
        Subject: "",
        Opt: ""
    });

    // onchange
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        setVal({ ...val, [name]: value });
    }


    const [Data, setData] = useState([]);


    // onsubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...val, id: Date().toString() }
        setData([...Data, newData]);
        console.log(Data);
    }



    const Sub = () => {
        if (val.Branch === "CSE" && val.Semester === "1st") {
            return (
                <>
                    <option style={{ color: "blue" }}>SUBJECT</option>
                    <option value="ES-101">programmng in C</option>
                    <option value="BS-103">applied chemistry</option>
                    <option value="CHEMISRTY">C</option>
                    <option value="DSA">D</option>
                    <option value="OOPS">E</option>
                    <option value="CM">F</option>
                    <option value="DM">G</option>
                    <option value="IKS">H</option>
                </>
            );
        }

        else if(val.Branch === "CSE" && val.Semester === "2nd"){
            return (
                <>
                    <option style={{ color: "blue" }}>SUBJECT</option>
                    <option value="PHYSICS">G</option>
                    <option value="MATHS">H</option>
                    <option value="CHEMISRTY">I</option>
                    <option value="DSA">J</option>
                    <option value="OOPS">K</option>
                    <option value="CM">L</option>
                    <option value="DM">M</option>
                    <option value="IKS">N</option>
                </>
            );
        }

        else if(val.Branch === "CSE" && val.Semester === "3rd"){
            return (
                <>
                    <option style={{ color: "blue" }}>SUBJECT</option>
                    <option value="PHYSICS">O</option>
                    <option value="MATHS">P</option>
                    <option value="CHEMISRTY">Q</option>
                    <option value="DSA">R</option>
                    <option value="OOPS">S</option>
                    <option value="CM">I</option>
                    <option value="DM">U</option>
                    <option value="IKS">V</option>
                </>
            );
        }
    }


    return (
        <>


            <Navbar />

            <div className="notepage" style={{ marginTop: "100px 0px " }} >

                <div className="imga" style={{ marginBottom: "30px" }}>
                    <img src={photo} alt="notes" style={{ width: "650px" }} />

                    <div className="headtext" style={{ width: "500px", textAlign: "center", float: "right", margin: "90px 40px 0px 0px" }}>
                        <h1 style={{ fontSize: "90px", fontFamily: "Playfair Display SC', serif", color: "#3ec8ea", }}> <SiGooglesheets />NOTES
                        </h1>
                        <span style={{ color: "#9b87ff", fontSize: "20px" }}>We are here to provid best Notes for all semseter and all branch</span>
                    </div>
                </div>




                {/* filter */}
                <div className='toggel'>
                    <form onSubmit={handleSubmit}>
                        <label placeholder='BRANCH'>
                            <select id='Branch' name='Branch' value={val.Branch} onChange={handleInput} >
                                <option style={{ color: "blue" }}>BRANCH</option>
                                <option value="CSE">CSE</option>
                                <option value="IT">IT</option>
                                <option value="AIDS">AIDS</option>
                                <option value="AIML">AIML</option>
                                <option value="AIML">ECE</option>
                                <option value="AIML">ME</option>
                                <option value="AIML">EE</option>
                            </select>
                        </label>


                        <label placeholder='Semester'>
                            <select id='Semester' name='Semester' value={val.Semester} onChange={handleInput} >
                                <option style={{ color: "blue" }}>SEMESTER</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4th">4th</option>
                                <option value="5th">5th</option>
                                <option value="6th">6th</option>
                                <option value="7th">7th</option>
                                <option value="8th">8th</option>

                            </select>
                        </label>




                        <label placeholder='Subject'>
                            <select id='Subject' name='Subject' value={val.Subject} onChange={handleInput} >
                                <option style={{ color: "blue" }}>SUBJECT</option>
                                <Sub />
                            </select>
                        </label>




                        <label placeholder='OPTION'>
                            <select id='Opt' name='Opt' value={val.Opt} onChange={handleInput} >
                                <option style={{ color: "blue" }}>OPTION</option>
                                <option value="NOTES">NOTES</option>
                                <option value="BOOKS">BOOKS PDF</option>
                                <option value="YOUTUBE">YOUTUBE LINKS</option>
                                <option value="WEB">WEB LINKS</option>
                            </select>
                        </label>
                        <span className='but'>
                            <button type="submit">SUBMIT</button>

                        </span>
                    </form>
                </div>


                <h2 style={{ textAlign: "center", fontSize: "20px", fontFamily: "Playfair Display SC', serif", color: "#9b87ff", marginTop: "15px", }}>APPLY FILTER FOR BETTER.</h2>


            </div>

            <div className="notesPage" >
                <div className="notebox">
                    <div className="table">
                        <div className="row">
                            <div>
                                <body>
                                    <table className="fixed_header" id='fixed_header'>
                                        <thead>
                                            <tr>
                                                <th>S No.</th>
                                                <th>Subject</th>
                                                <th>Chapter</th>
                                                <th>Date</th>
                                                <th>Downlod</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1.</td>
                                                <td>Physics</td>
                                                <td>1</td>
                                                <td>9-12-2022</td>
                                                <td>
                                                    <Link style={{ textDecoration: "none" }} to="/Notes/PrePage">Notes</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2.</td>
                                                <td>Chemistry</td>
                                                <td>1</td>
                                                <td>8-12-2022</td>
                                                <td>
                                                    <Link style={{ textDecoration: "none" }} to="/Notes/PrePage">Notes</Link>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </body>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

