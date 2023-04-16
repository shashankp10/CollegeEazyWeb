import React, { useState, useEffect } from "react";
import { Circle } from "rc-progress";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import tasveer from "../img/att.jpg";
import axios from "axios";
// import {enroll,Branch,Sem} from "./Navbar";

export default function AttendancePage() {

  const [userData, setUserData] = useState({  
    Branch: "CSE",
    Semester: "1st",
    enrollment: "178",
    subject1: "CIC-101",
    subject1_present: 11,
    subject1_absent: 1,
    subject2: "CIC-102",
    subject2_present: 15,
    subject2_absent: 5,
    subject3: "CIC-103",
    subject3_present: 17,
    subject3_absent: 4,
    subject4: "CIC-104",
    subject4_present: 12,
    subject4_absent: 5,
    subject5: "CIC-105",
    subject5_present: 19,
    subject5_absent: 8,
    subject6: "CIC-005",
    subject6_present: 1,
    subject6_absent: 5
  });



  const getcallAPI = async () => {
    try {
      const response = await axios.get(
        // "https://jsonplaceholder.typicode.com/posts"
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getcallAPI();
  }, []);

  // console.log(props, 'props');

  // const location = useLocation();
  // console.log(location, 'location hooks');

  // const userData = location?.state?.dataP;
  // console.log(userData, 'this is attendance page');


  const [inc, setinc] = useState(0);
  const [dec, setdec] = useState(0);
  const [sub, setSubject] = useState("All Subjects");



    
  const attendancePercentage = Math.trunc((inc / (inc + dec)) * 100);
 
  useEffect(() => {
    console.log('inc updated:', inc);
  }, [inc]);
  
  const handleIncrement = () => {
    setinc(prevInc => prevInc + 1);
    console.log('inc after update:', inc);
  };
  

  useEffect(() => {
    console.log('dec updated:', dec);
  }, [dec]);

    const handleDecrement = () => {
      setdec(prevDec => prevDec + 1); 
      console.log('dec after update:', dec);
    };


    const handleTotal = () => {
      const totalCount = inc - dec;
      console.log(totalCount, "time totalCount is printed");
    };
    
 
    
    
  const subjects = [
    { name: "Programming in C", present: "subject1_present", absent: "subject1_absent" },
    { name: "Applied chemistry", present: "subject2_present", absent: "subject2_absent" },
    { name: "v", present: "subject3_present", absent: "subject3_absent" },
    { name: "D", present: "subject4_present", absent: "subject4_absent" },
    { name: "E", present: "subject5_present", absent: "subject5_absent" },
    { name: "F", present: "subject6_present", absent: "subject6_absent" },
  ];                
  
  const Subject = () => {
    const setSubjectData = (presentKey, absentKey, subjectName) => {
      setinc(userData[presentKey]);
      setdec(userData[absentKey]);
      setSubject(subjectName);
    };
  
    if (userData.Branch === "CSE" && userData.Semester === "1st") {
      return (
        <>
          {subjects.map((subject, index) => (
            <button
            className="btnn"
            name={subject.name}
            value={index}
            onClick={() => {
              setSubjectData(subject.present, subject.absent, subject.name);
             
            }}
          >
            {subject.name}
          </button>
  
          ))}
        </>
      );
    } else {
      return null;
    }
  };



  return (
    <>
      <Navbar />
      <div className="attendance row" >
        <div className="sidebar" style={{width:"25%"}}>
           <h1 style={{ textAlign: "center", paddingBottom: "10px", paddingTop: "20px", }} > SUBJECTS 
            </h1>
             <ul style={{ listStyle: "none",padding:"0",justifyContent:"center",alignItems:"center",display:"grid" }}><Subject />
             </ul>
        </div>
        <div className="main" style={{width:"69%"}}>
          <h2 style={{ textAlign: "center" }}>Attendence in <span style={{color:"red",textTransform:"uppercase"}}> {sub}</span></h2>
          <h2 style={{ textAlign: "center", color: "blue" }}> {userData.Branch}</h2>


          <div className="bb row" style={{margin:"0",marginLeft:"60px" }}>
            <div className="cc" style={{width:'30%'}}>
              <div className="meter">
                <div className="progressCenter">{attendancePercentage}%</div>
                <div className="aa">
                  <Circle
                    percent={attendancePercentage}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                    style={{   transition: "all 0.3s ease-in-out" }}
                    gapDegree={70}
                  />
                </div>
              </div>

              <div className="count row" style={{margin:"0"}}>
                <div className="dec" style={{width:'50%',padding:"0"}}>
                  <div className="decCount" style={{ fontSize: "25px" }}>{dec}</div>
                  <button className="decs btn1" onClick={() => { handleDecrement();    handleTotal(); }} style={{ fontSize: "20px" }}>
                    <b>Absent</b>  </button>
                     </div>
                <div className="inc" style={{width:'50%',padding:"0"}}>
                  <div className="incCount" style={{ fontSize: "25px" }}>{inc}</div>
                  <button className="incss btn2" onClick={() => { handleIncrement();  handleTotal(); }} style={{ fontSize: "20px" }} >
                    <b>Present</b></button>
                </div>
              </div>
            </div>
            <div className="atte-img" style={{width:'70%',display:"grid",justifyContent:"center",alignItems:"center",paddingLeft:"130px",paddingTop:"60px" }}>
              <img src={tasveer} alt="img" style={{ width: "450px",overflow:"hidden"}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
