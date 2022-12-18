import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";


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

    return (
        <>


            <Navbar />

            <div className="notepage" >
                <h1 style={{ float: "left", margin: "0 30px 0  20px", fontSize: "67px", marginTop: "-11px" }}>NOTES</h1>
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
                                <option value="PHYSICS">PHYSICS</option>
                                <option value="MATHS">MATHS</option>
                                <option value="CHEMISRTY">CHEMISRTY</option>
                                <option value="DSA">DSA</option>
                                <option value="OOPS">OOPS</option>
                                <option value="CM">CM</option>
                                <option value="DM">DM</option>
                                <option value="IKS">IKS</option>
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
                                                    <Link style={{textDecoration:"none"}} to="/Notes/PrePage">Notes</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2.</td>
                                                <td>Chemistry</td>
                                                <td>1</td>
                                                <td>8-12-2022</td>
                                                <td>
                                                    <Link style={{textDecoration:"none"}} to="/Notes/PrePage">Notes</Link>
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

