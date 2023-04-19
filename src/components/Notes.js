import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import { SiGooglesheets } from "react-icons/si";
import photo from '../img/note.jpg'
import axios from 'axios';
import PrePage from './PrePage';
// import Pdfviewer from './Pdfviewer';



export default function Notes() {
    const [SelectedPath, setSelectedPath] = useState()

    const handleClickPath = (path) => {
        setSelectedPath(path);
      };


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

    const [dataNote, setNoteData] = useState([
        // { id: 1, title: "Note 1", path: "/sample.pdf" },
        // { id: 2, title: "Note 2", path: "path/to/note2" },
        // { id: 3, title: "Note 3", path: "/sample.pdf" },
    ]);


    const [loading, setLoading] = useState(true);




    // onsubmit
    const handleSubmit = async (e) => {

        try {
            // Call server API to send the data
            e.preventDefault();
            console.log(val);
            const { Branch, Semester, subjectId, type } = val;
            const setData = `
            Branch: ${Branch},
            Semester: ${Semester},
            Subject: ${subjectId},
            Opt: ${type}
            `;

            // post the data
            console.log(setData);
            console.log(dataNote);

            setLoading(true);
            const response = await axios.get(`http://localhost:8080/collegeazy/notes/fetch/${subjectId}/${type}`);
             setNoteData(response.data);
            console.log(dataNote);
           // update the state with the fetched data
            console.log("Successfully Submitted");
            alert("Successfully Submitted");

        } catch (error) {
            console.log(error);
            alert("An error occurred while submitting the form.");
        }
        finally {
            // make sure to set the loading state to false after data is fetched
            setLoading(false);
        }

    }




const Sub = () => {
    if (val.Branch === "CSE" && val.Semester === "1st") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-101">Programming in C</option>
                <option value="BS-103">Applied Chemistry</option>
                <option value="BS-105">Applied Physics–I</option>
                <option value="BS-107">Electrical Science</option>
                <option value="BS-109">Environmental Studies</option>
                <option value="BS-111">Applied Mathematics–I</option>
                <option value="HS-113">Communications Skills</option>
                <option value="HS-115">Indian Constitution</option>
                <option value="HS-117">Human Values and Ethics</option>
                <option value="ES-119">Manufacturing Process</option>
            </>
        );
    }

    else if (val.Branch === "CSE" && val.Semester === "2nd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-102">Programming in C</option>
                <option value="BS-104">Applied Chemistry</option>
                <option value="BS-106">Applied Physics–II</option>
                <option value="BS-108">Electrical Science</option>
                <option value="BS-110">Environmental Studies</option>
                <option value="BS-112">Applied Mathematics–II</option>
                <option value="HS-114">Communications Skills</option>
                <option value="HS-116">Indian Constitution</option>
                <option value="HS-118">Human Values and Ethics</option>
                <option value="ES-114">Engineering Mechanics</option>
            </>
        );
    }

    else if (val.Branch === "CSE" && val.Semester === "3rd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-201">Computational Methods </option>
                <option value="HS-203 ">Indian Knowledge System</option>
                <option value="CIC-205 ">Discrete Mathematics</option>
                <option value="ECC-207">Digital Logic and Computer Design</option>
                <option value=" CIC-209 ">Data Structures </option>
                <option value=" CIC-211 ">Object-Oriented Programming using C++</option>
            </>
        );
    }

    else if (val.Branch === "CSE" && val.Semester === "4th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="BS-202">Probability, Statistics and Linear Programming  </option>
                <option value="HS-204">Technical Writing</option>
                <option value="CIC-206">Theory of Computation</option>
                <option value="EEC-208">Circuits and Systems </option>
                <option value=" CIC-210">Database Management Systems  </option>
                <option value=" CIC-212">Programming in Java </option>
            </>
        );
    }

    else if (val.Branch === "CSE" && val.Semester === "5th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="HS-301 ">Economics for Engineers   </option>
                <option value="CIC-303 ">Compiler Design </option>
                <option value="CIC-305 ">Operating Systems </option>
                <option value="CIC-307 ">Computer Networks  </option>
                <option value=" CIC-309 ">Software Engineering   </option>
                <option value=" CIC-311 ">Design and Analysis of Algorithm  </option>
            </>
        );
    }

    else if (val.Branch === "IT" && val.Semester === "1st") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-101">Programming in C</option>
                <option value="BS-103">Applied Chemistry</option>
                <option value="BS-105">Applied Physics–I</option>
                <option value="BS-107">Electrical Science</option>
                <option value="BS-109">Environmental Studies</option>
                <option value="BS-111">Applied Mathematics–I</option>
                <option value="HS-113">Communications Skills</option>
                <option value="HS-115">Indian Constitution</option>
                <option value="HS-117">Human Values and Ethics</option>
                <option value="ES-119">Manufacturing Process</option>
            </>
        );
    }

    else if (val.Branch === "IT" && val.Semester === "2nd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-102">Programming in C</option>
                <option value="BS-104">Applied Chemistry</option>
                <option value="BS-106">Applied Physics–II</option>
                <option value="BS-108">Electrical Science</option>
                <option value="BS-110">Environmental Studies</option>
                <option value="BS-112">Applied Mathematics–II</option>
                <option value="HS-114">Communications Skills</option>
                <option value="HS-116">Indian Constitution</option>
                <option value="HS-118">Human Values and Ethics</option>
                <option value="ES-114">Engineering Mechanics</option>
            </>
        );
    }

    else if (val.Branch === "IT" && val.Semester === "3rd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-201">Computational Methods </option>
                <option value="HS-203 ">Indian Knowledge System</option>
                <option value="CIC-205 ">Discrete Mathematics</option>
                <option value="ECC-207">Digital Logic and Computer Design</option>
                <option value=" CIC-209 ">Data Structures </option>
                <option value=" CIC-211 ">Object-Oriented Programming using C++</option>
            </>
        );
    }

    
    else if (val.Branch === "IT" && val.Semester === "4th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="BS-202">Probability, Statistics and Linear Programming  </option>
                <option value="HS-204">Technical Writing</option>
                <option value="CIC-206">Theory of Computation</option>
                <option value="EEC-208">Circuits and Systems </option>
                <option value=" CIC-210">Database Management Systems  </option>
                <option value=" CIC-212">Programming in Java </option>
            </>
        );
    }
    else if (val.Branch === "IT" && val.Semester === "5th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="HS-301 ">Economics for Engineers   </option>
                <option value="CIC-303 ">Compiler Design </option>
                <option value="CIC-305 ">Operating Systems </option>
                <option value="CIC-307 ">Computer Networks  </option>
                <option value=" CIC-309 ">Software Engineering   </option>
                <option value=" CIC-311 ">Design and Analysis of Algorithm  </option>
            </>
        );
    }
    else if (val.Branch === "ECE" && val.Semester === "1st") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-101">Programming in C</option>
                <option value="BS-103">Applied Chemistry</option>
                <option value="BS-105">Applied Physics–I</option>
                <option value="BS-107">Electrical Science</option>
                <option value="BS-109">Environmental Studies</option>
                <option value="BS-111">Applied Mathematics–I</option>
                <option value="HS-113">Communications Skills</option>
                <option value="HS-115">Indian Constitution</option>
                <option value="HS-117">Human Values and Ethics</option>
                <option value="ES-119">Manufacturing Process</option>
            </>
        );
    }

    else if (val.Branch === "ECE" && val.Semester === "2nd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-102">Programming in C</option>
                <option value="BS-104">Applied Chemistry</option>
                <option value="BS-106">Applied Physics–II</option>
                <option value="BS-108">Electrical Science</option>
                <option value="BS-110">Environmental Studies</option>
                <option value="BS-112">Applied Mathematics–II</option>
                <option value="HS-114">Communications Skills</option>
                <option value="HS-116">Indian Constitution</option>
                <option value="HS-118">Human Values and Ethics</option>
                <option value="ES-114">Engineering Mechanics</option>
            </>
        );
    }

    else if (val.Branch === "ECE" && val.Semester === "3rd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-201">Computational Methods </option>
                <option value="HS-203 ">Indian Knowledge System</option>
                <option value="ECC-205  ">Signals and Systems </option>
                <option value="ECC-207">Digital Logic and Computer Design</option>
                <option value=" ECC-209  ">Analog Communications  </option>
                <option value=" ECC-211 ">Analog Electronics</option>
            </>
        );
    }

    
    else if (val.Branch === "ECE" && val.Semester === "4th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="BS-202">Probability, Statistics and Linear Programming  </option>
                <option value="HS-204">Technical Writing</option>
                <option value="EEC-206">Network Analysis and Synthesis </option>
                <option value="ECC-210 ">Microprocessors and Microcontrollers  </option>
                <option value=" ECC-212 ">Digital Communications   </option>
                <option value=" ECC-214 ">Analog Electronics-II  </option>
                <option value=" ECC-216  ">Electromagnetic Field Theory   </option>
            </>
        );
    }

    else if (val.Branch === "ECE" && val.Semester === "5th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="HS-301 ">Economics for Engineers   </option>
                <option value="ECC-303 ">Digital Signal Processing  </option>
                <option value="ECC-305 ">Microelectronic </option>
                <option value="EEC-307 ">Introduction to Control Systems  </option>
                <option value=" ECC-309 ">Transmission Lines, Waveguides and Antenna   </option>
                <option value=" ECC-311 ">Data Communication and Networking  </option>
            </>
        );
    }


    else if (val.Branch === "EE" && val.Semester === "1st") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-101">Programming in C</option>
                <option value="BS-103">Applied Chemistry</option>
                <option value="BS-105">Applied Physics–I</option>
                <option value="BS-107">Electrical Science</option>
                <option value="BS-109">Environmental Studies</option>
                <option value="BS-111">Applied Mathematics–I</option>
                <option value="HS-113">Communications Skills</option>
                <option value="HS-115">Indian Constitution</option>
                <option value="HS-117">Human Values and Ethics</option>
                <option value="ES-119">Manufacturing Process</option>
            </>
        );
    }

    else if (val.Branch === "EE" && val.Semester === "2nd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-102">Programming in C</option>
                <option value="BS-104">Applied Chemistry</option>
                <option value="BS-106">Applied Physics–II</option>
                <option value="BS-108">Electrical Science</option>
                <option value="BS-110">Environmental Studies</option>
                <option value="BS-112">Applied Mathematics–II</option>
                <option value="HS-114">Communications Skills</option>
                <option value="HS-116">Indian Constitution</option>
                <option value="HS-118">Human Values and Ethics</option>
                <option value="ES-114">Engineering Mechanics</option>
            </>
        );
    }

    else if (val.Branch === "EE" && val.Semester === "3rd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-201">Computational Methods </option>
                <option value="HS-203 ">Indian Knowledge System</option>
                <option value="ECC-205 ">Signals and Systems </option>
                <option value="EEC-209 ">Electrical Materials </option>
                <option value="EEC-211 ">Electrical Machines - I</option>
                <option value="ECC-213 ">Electromagnetic Field Theory</option>
                <option value="ECC-215 ">Electronics – I</option>
            </>
        );
    }

    
    else if (val.Branch === "EE" && val.Semester === "4th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="BS-202">Probability, Statistics and Linear Programming  </option>
                <option value="HS-204">Technical Writing</option>
                <option value="EEC-206">Network Analysis and Synthesis </option>
                <option value="EEC-210">Electrical Machines - II </option>
                <option value="EEC-212">Power Systems - I </option>
                <option value="ECC-218">Electronics - II </option>
            </>
        );
    }
    else if (val.Branch === "EE" && val.Semester === "5th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="HS-301 ">Economics for Engineers   </option>
                <option value="EEC-303 ">Power Systems – II </option>
                <option value="EEC-305 ">Electrical and Electronics Measurements  </option>
                <option value="EEC-307 ">Introduction to Control Systems </option>
                <option value="EEC-309 ">Power Electronics </option>
                <option value="ECC-313 ">Microprocessors and Microcontrollers </option>
            </>
        );
    }

    else if (val.Branch === "CE" && val.Semester === "1st") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-101">Programming in C</option>
                <option value="BS-103">Applied Chemistry</option>
                <option value="BS-105">Applied Physics–I</option>
                <option value="BS-107">Electrical Science</option>
                <option value="BS-109">Environmental Studies</option>
                <option value="BS-111">Applied Mathematics–I</option>
                <option value="HS-113">Communications Skills</option>
                <option value="HS-115">Indian Constitution</option>
                <option value="HS-117">Human Values and Ethics</option>
                <option value="ES-119">Manufacturing Process</option>
            </>
        );
    }

    else if (val.Branch === "CE" && val.Semester === "2nd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-102">Programming in C</option>
                <option value="BS-104">Applied Chemistry</option>
                <option value="BS-106">Applied Physics–II</option>
                <option value="BS-108">Electrical Science</option>
                <option value="BS-110">Environmental Studies</option>
                <option value="BS-112">Applied Mathematics–II</option>
                <option value="HS-114">Communications Skills</option>
                <option value="HS-116">Indian Constitution</option>
                <option value="HS-118">Human Values and Ethics</option>
                <option value="ES-114">Engineering Mechanics</option>
            </>
        );
    }

    else if (val.Branch === "CE" && val.Semester === "3rd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-201">Computational Methods </option>
                <option value="HS-203 ">Indian Knowledge System</option>
                <option value="CEC-205 ">Structural Analysis - I</option>
                <option value="CEC-207">Structural Design - I </option>
                <option value="CEC-209 ">Fluid Mechanics  </option>
                <option value="CEC-211 ">Geomatics Engineering </option>
            </>
        );
    }

    
    else if (val.Branch === "CE" && val.Semester === "4th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="BS-202">Probability, Statistics and Linear Programming  </option>
                <option value="HS-204">Technical Writing</option>
                <option value="CEC-206">Soil Mechanics </option>
                <option value="CEC-208">Hydraulics and Hydrology </option>
                <option value=" CEC-210">Environmental Engineering - I  </option>
                <option value=" CEC-212">Transportation Engineering </option>
            </>
        );
    }
    else if (val.Branch === "CE" && val.Semester === "5th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="HS-301 ">Economics for Engineers   </option>
                <option value="CEC-303 ">Structural Analysis - II </option>
                <option value="CEC-305 ">Structural Design - II </option>
                <option value="CEC-307 ">Geotechnical Engineering </option>
                <option value="CEC-309 ">Environmental Engineering - II </option>
                <option value="CEC-311 ">Traffic Engineering and Pavement Design  </option>
            </>
        );
    }

    
    else if (val.Branch === "ME" && val.Semester === "1st") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-101">Programming in C</option>
                <option value="BS-103">Applied Chemistry</option>
                <option value="BS-105">Applied Physics–I</option>
                <option value="BS-107">Electrical Science</option>
                <option value="BS-109">Environmental Studies</option>
                <option value="BS-111">Applied Mathematics–I</option>
                <option value="HS-113">Communications Skills</option>
                <option value="HS-115">Indian Constitution</option>
                <option value="HS-117">Human Values and Ethics</option>
                <option value="ES-119">Manufacturing Process</option>
            </>
        );
    }

    else if (val.Branch === "ME" && val.Semester === "2nd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-102">Programming in C</option>
                <option value="BS-104">Applied Chemistry</option>
                <option value="BS-106">Applied Physics–II</option>
                <option value="BS-108">Electrical Science</option>
                <option value="BS-110">Environmental Studies</option>
                <option value="BS-112">Applied Mathematics–II</option>
                <option value="HS-114">Communications Skills</option>
                <option value="HS-116">Indian Constitution</option>
                <option value="HS-118">Human Values and Ethics</option>
                <option value="ES-114">Engineering Mechanics</option>
            </>
        );
    }

    else if (val.Branch === "ME" && val.Semester === "3rd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-201">Computational Methods </option>
                <option value="HS-203 ">Indian Knowledge System</option>
                <option value="MEC-205 ">Theory of Machines</option>
                <option value="MEC-207">Strength of Materials</option>
                <option value="MEC-209 ">Manufacturing Science and Technology-I </option>
                <option value="MEC-211 ">Thermal Engineering-I</option>
            </>
        );
    }

    
    else if (val.Branch === "ME" && val.Semester === "4th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="BS-202">Probability, Statistics and Linear Programming  </option>
                <option value="HS-204">Technical Writing</option>
                <option value="MEC-206">Theory of Computation</option>
                <option value="MEC-208">Circuits and Systems </option>
                <option value="MEC-210">Database Management Systems  </option>
                <option value="MEC-212">Programming in Java </option>
            </>
        );
    }
    else if (val.Branch === "ME" && val.Semester === "5th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="HS-301 ">Economics for Engineers   </option>
                <option value="MEC-303 ">Machine Design-II</option>
                <option value="MEC-305 ">Fluid Mechanics and Hydraullic Machines </option>
                <option value="MEC-307 ">Metrology and Instrumentation </option>
                <option value="MEC-309 ">Industrial Engineering  </option>
                <option value="MEC-311 ">Heat and Mass Transfer </option>
            </>
        );
    }

    
    else if (val.Branch === "AI&DS" && val.Semester === "1st") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-101">Programming in C</option>
                <option value="BS-103">Applied Chemistry</option>
                <option value="BS-105">Applied Physics–I</option>
                <option value="BS-107">Electrical Science</option>
                <option value="BS-109">Environmental Studies</option>
                <option value="BS-111">Applied Mathematics–I</option>
                <option value="HS-113">Communications Skills</option>
                <option value="HS-115">Indian Constitution</option>
                <option value="HS-117">Human Values and Ethics</option>
                <option value="ES-119">Manufacturing Process</option>
            </>
        );
    }

    else if (val.Branch === "AI&DS" && val.Semester === "2nd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-102">Programming in C</option>
                <option value="BS-104">Applied Chemistry</option>
                <option value="BS-106">Applied Physics–II</option>
                <option value="BS-108">Electrical Science</option>
                <option value="BS-110">Environmental Studies</option>
                <option value="BS-112">Applied Mathematics–II</option>
                <option value="HS-114">Communications Skills</option>
                <option value="HS-116">Indian Constitution</option>
                <option value="HS-118">Human Values and Ethics</option>
                <option value="ES-114">Engineering Mechanics</option>
            </>
        );
    }

    else if (val.Branch === "AI&DS" && val.Semester === "3rd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="AIDS-201">Data Structures  </option>
                <option value="AIDS-203 ">Foundations of Data Science</option>
                <option value="AIDS-205 ">Digital Logic Design </option>
                <option value="AIDS-207">Principles of Artificial Intelligence</option>
                <option value="AIDS-209 ">Probability, Statistics and Linear Algebra </option>
                <option value="AIDS-211 ">Universal Human Values- II </option>
                <option value="AIDS-213 ">Critical Reasoning and Systerns Thinking</option>
                <option value="AIDS-215 ">Selected readings</option>
            </>
        );
    }

    
    else if (val.Branch === "AI&DS" && val.Semester === "4th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="AIDS-202">Object Oriented Programming</option>
                <option value="AIDS-204">Database Management Systems</option>
                <option value="AIDS-206">Software Engineering</option>
                <option value="AIDS-208">Computer Networks and Internet Protocol </option>
                <option value="AIDS-210">Fundamentals of Machine Learning</option>
                <option value="AIDS-212">Computational Methods</option>
                <option value="AIDS-214">Effective Technical Writing</option>
                <option value="AIDS-216">Emerging Trends in Technological Industries</option>
            </>
        );
    }
    
    else if (val.Branch === "AI&ML" && val.Semester === "1st") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-101">Programming in C</option>
                <option value="BS-103">Applied Chemistry</option>
                <option value="BS-105">Applied Physics–I</option>
                <option value="BS-107">Electrical Science</option>
                <option value="BS-109">Environmental Studies</option>
                <option value="BS-111">Applied Mathematics–I</option>
                <option value="HS-113">Communications Skills</option>
                <option value="HS-115">Indian Constitution</option>
                <option value="HS-117">Human Values and Ethics</option>
                <option value="ES-119">Manufacturing Process</option>
            </>
        );
    }

    else if (val.Branch === "AI&ML" && val.Semester === "2nd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="ES-102">Programming in C</option>
                <option value="BS-104">Applied Chemistry</option>
                <option value="BS-106">Applied Physics–II</option>
                <option value="BS-108">Electrical Science</option>
                <option value="BS-110">Environmental Studies</option>
                <option value="BS-112">Applied Mathematics–II</option>
                <option value="HS-114">Communications Skills</option>
                <option value="HS-116">Indian Constitution</option>
                <option value="HS-118">Human Values and Ethics</option>
                <option value="ES-114">Engineering Mechanics</option>
            </>
        );
    }

    else if (val.Branch === "AI&ML" && val.Semester === "3rd") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="AIML-201">Data Structures  </option>
                <option value="AIML-203 ">Foundations of Data Science</option>
                <option value="AIML-205 ">Digital Logic Design </option>
                <option value="AIML-207">Principles of Artificial Intelligence</option>
                <option value="AIML-209 ">Probability, Statistics and Linear Algebra </option>
                <option value="AIML-211 ">Universal Human Values- II </option>
                <option value="AIML-213 ">Critical Reasoning and Systerns Thinking</option>
                <option value="AIML-215 ">Selected readings</option>
            </>
        );
    }
    
    else if (val.Branch === "AI&ML" && val.Semester === "4th") {
        return (
            <>
                <option style={{ color: "blue" }}>SUBJECT</option>
                <option value="AIDS-202">Object Oriented Programming</option>
                <option value="AIDS-204">Database Management Systems</option>
                <option value="AIDS-206">Software Engineering</option>
                <option value="AIDS-208">Computer Networks and Internet Protocol </option>
                <option value="AIDS-210">Fundamentals of Machine Learning</option>
                <option value="AIDS-212">Computational Methods</option>
                <option value="AIDS-214">Effective Technical Writing</option>
                <option value="AIDS-216">Emerging Trends in Technological Industries</option>
            </>
        );
    }
}

    return (
        <>


            <Navbar />

            <div className="notepageLand" >
                    <div className="headtext">
                        <h1> <SiGooglesheets />NOTES
                        </h1>
                        <span>We are here to provid best Notes for all semseter and all branch</span>
                    </div>
                    </div>
                {/* filter */}
                <div className="filter">
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
                            <select id='subjectId' name='subjectId' value={val.subjectId} onChange={handleInput} >
                                <option style={{ color: "blue" }}>SUBJECT</option>
                                <Sub />
                            </select>
                        </label>




                        <label placeholder='OPTION'>
                            <select id='type' name='type' value={val.type} onChange={handleInput} >
                                <option style={{ color: "blue" }}>OPTION</option>
                                <option value="pdf">NOTES</option>
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
                <div className="heaaaadaplly">
                 <h2>APPLY FILTER FOR BETTER.</h2>
                </div>

           

            {loading ? (
                <p className='notepre'>No data available...</p>
            ) : (
                <div className="notesPage" >
                    <div className="notebox">
                        <div className="table">
                            <div className="row">
                                <div>
                                    <body>
                                        <table className="fixed_header" id='fixed_header'>
                                            <thead>
                                                <tr>
                                                    <th>Subject</th>
                                                    <th>Downlod</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                            {dataNote.map((note) => (
                                            <tr key={note.id}>
                                                        <td>{note.data}</td>
                                                        <td>
                                                            <Link
                                                                onClick={() => handleClickPath(note.id)}
                                                                style={{ textDecoration: "none" }}
                                                                to={`/note/PrePage/${note.id}`}
                                                                state={{ data: dataNote}}
                                                            >
                                                                Download
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                 ))}
                                               
                                            </tbody>

                                        </table>
                                    </body>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


