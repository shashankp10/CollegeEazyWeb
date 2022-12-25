import React from 'react'
import { useState } from 'react'
import LoginPage from './LoginPage';




export default function SignUp() {

    const [SignUp, setSignUp] = useState(true);

    const handleClick = () => {
        setSignUp(!SignUp);
  }
  

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        EnrollmentNo: "",
        Branch: "",
        Section: "",
        Semester: "",
        PhoneNo: "",
        Email: "",
        passward: ""
    });

    const [Data, setData] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = { ...userRegistration, id: new Date().toString() }

        setData([...Data, newData]);
        console.log(Data);

        setUserRegistration({
            username: "",
            EnrollmentNo: "",
            Branch: "",
            Semester: "",
            PhoneNo: "",
            passward: ""
        });


    }


    return (
        <>

            <div>

                {" "} {SignUp ? (

                    <div className="cardsignup">
                        <div className="column">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="containerS">
                                    <div className="headingS">
                                        <h1>Sign Up </h1>
                                    </div>
                                    <input type="text" className="form-control"
                                        value={userRegistration.username}
                                        onChange={handleInput}
                                        id="username" autoComplete="off" name='username' placeholder="Name" />

                                    <input type="text" className="form-control"
                                        value={userRegistration.EnrollmentNo}
                                        onChange={handleInput}
                                        id="floatingInput" autoComplete="off" name='EnrollmentNo' placeholder="Enrollment No." />

                                    <input type="text" className="form-control"
                                        value={userRegistration.Branch}
                                        onChange={handleInput}
                                        id="floatingInput" autoComplete="off" name='Branch' placeholder="Branch" />



                                    <input type="text" className="form-control"
                                        value={userRegistration.Semester}
                                        onChange={handleInput}
                                        id="floatingInput" autoComplete="off" name='Semester' placeholder="Semester" />

                                    <input type="text" className="form-control"
                                        value={userRegistration.PhoneNo}
                                        onChange={handleInput}
                                        id="floatingInput" autoComplete="off" name='PhoneNo' placeholder="Phone No." />


                                    <input type="passward" className="form-control"
                                        value={userRegistration.password}
                                        onChange={handleInput}
                                        id="floatingInput" autoComplete="off" name='password' placeholder="Password" />

                                    <div className="column">
                                        <div className="button">
                                            <button className="btn " type="submit">SignUp</button>
                                            <span style={{cursor:"pointer", alignItem:"left",color:"blue", textDecoration: "underline"}} onClick={handleClick}>Already has Account</span>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                ) : (<LoginPage/>)}

            </div>
        </>
    )
}

