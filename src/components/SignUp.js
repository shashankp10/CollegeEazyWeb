import React, { useEffect } from 'react'
import { useState } from 'react'
import LoginPage from './LoginPage';
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from 'formik';




export default function SignUp() {

    const [SignUp, setSignUp] = useState(true);

    const handleClick = () => {
        setSignUp(!SignUp);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            enrollment: '',
            branch: '',
            semester: '',
            password: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().min(3).max(11).required("Please enter the name"),
            enrollment: Yup.string().min(6, 'Enrollment must be at least 6').required("Please enter the enrollment"),
            branch: Yup.string().min(1).required("Please select the branch"),
            semester: Yup.number    ().min(1).required("Please select the semester"),
            password: Yup.string().min(6).required("Please enter the password"),
        }),

        onSubmit: async (values) => {
            try {
                // Call server API to send the data
                console.log(values.name, values.enrollment, values.branch, values.semester, values.password);
                await axios.post('http://localhost:8080/collegeazy/register', {
                    name: values.name,
                    enrollment: values.enrollment,
                    branch: values.branch,
                    semester: values.semester,
                    password: values.password,
                })
                console.log("Successfully login");
                alert("Successfully Register");


                // Clear the form fields after submission
                formik.resetForm();
            } catch (error) {
                console.log(error);
                alert("An error occurred while submitting the form.");
            }
        },
    });



    return (
        <>

            <div>

                {" "} {SignUp ? (

                    <div className="cardsignup">
                        <div className="column">
                            <form action="" onSubmit={formik.handleSubmit}>
                                <div className="containerS">
                                    <div className="headingS">
                                        <h1>Sign Up </h1>
                                    </div>
                                    <input type="text" className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        id="name" autoComplete="off" name='name'  pattern="^[a-zA-Z]+$"  title="Please enter only alphabate" placeholder="Name" />
                                    <span>
                                        {formik.touched.name && formik.errors.name ? (
                                            <div style={{ fontSize: "10px", color: "red", marginLeft: "40px", marginBottom: "7px" }}>{formik.errors.name}</div>
                                        ) : null}
                                    </span>


                                    <input type="text" className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.enrollment}
                                        id="floatingInput1" autoComplete="off" name='enrollment' pattern="[0-9]+" title="Please enter only Number" placeholder="Enrollment No." />
                                    {formik.touched.enrollment && formik.errors.enrollment ? (
                                        <div style={{ fontSize: "10px", color: "red", marginLeft: "40px", marginBottom: "7px" }}>{formik.errors.enrollment}</div>
                                    ) : null}

                                    <div className="row  " style={{ margin: "0px", marginLeft: "30px" }}>
                                        <div className="SignUplabel" style={{ width: "50%" }}>
                                            <label placeholder='BRANCH'>
                                                <select id='branch' name='branch' onChange={formik.handleChange} value={formik.values.branch}>
                                                    <option style={{ color: "blue" }}>BRANCH</option>
                                                    <option value="CSE">CSE</option>
                                                    <option value="IT">IT</option>
                                                    <option value="AIDS">AIDS</option>
                                                    <option value="AIML">AIML</option>
                                                    <option value="ECE">ECE</option>
                                                    <option value="ME">ME</option>
                                                    <option value="EE">EE</option>
                                                </select>
                                            </label>
                                            {formik.touched.branch && formik.errors.branch ? (
                                                <div style={{ fontSize: "10px", color: "red", marginLeft: "40px", marginBottom: "7px" }}>{formik.errors.branch}</div>
                                            ) : null}
                                        </div>

                                        <div className="SignUplabel" style={{ width: "50%" }}>
                                            <label placeholder='Semester'>
                                                <select id='semester' name='semester' onChange={formik.handleChange} value={formik.values.semester}  >
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
                                            {formik.touched.semester && formik.errors.semester ? (
                                                <div style={{ fontSize: "10px", color: "red", marginLeft: "40px", marginBottom: "7px" }}>{formik.errors.semester}</div>
                                            ) : null}
                                        </div>

                                    </div>

                                    <input type="password" className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        id="floatingInput" autoComplete="off" name='password' placeholder="Password" />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div style={{ fontSize: "10px", color: "red", marginLeft: "40px", marginBottom: "7px" }}>{formik.errors.password}</div>
                                    ) : null}

                                    <div className="column">
                                        <div className="button">
                                            <button className="btn " type="submit">SignUp</button>
                                            <span style={{ cursor: "pointer", alignItem: "left", color: "blue", textDecoration: "underline" }} onClick={handleClick}>Already has Account</span>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                ) : (<LoginPage />)}

            </div>
        </>
    )
}
