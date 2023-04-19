import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp';
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function LoginPage() {

  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [login, setLogin] = useState(true);

  const handleClick = () => {
    setLogin(!login);
  }

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setIsLoggedIn(true);
      navigate('/')
    }
    setIsLoggedIn(false);
  }, []);


  const handleLogin = () => {

    if (localStorage.getItem("Token")) {
      setIsLoggedIn(true);
    }
    setIsLoggedIn(false);
  };



  const handleLogout = () => {
    if (localStorage.getItem("Token")) {
      localStorage.removeItem("Token")
      setIsLoggedIn(false);
    }
  };



  const formik = useFormik({
    initialValues: {
      enrollment: '',
      password: '',
    },
    validationSchema: Yup.object({
      enrollment: Yup.string().min(3).max(11).required("Please enter the roll number"),
      password: Yup.string().min(6).required("Please enter the password"),
    }),
    onSubmit: async (values) => {
      try {
        // Call server API to send the data
        console.log(values.enrollment, values.password);
        await axios.post("http://localhost:8080/collegeazy/login", {
          enrollment: values.enrollment,
          password: values.password,
        })
          .then(result => {
            alert("success")
            localStorage.setItem("Token", result.data.token)
            navigate("/")
          })
        console.log("Successfully login");
        alert("Successfully login");

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

        {" "} {login ? (


          <div className="column">
            <form action="login" onSubmit={formik.handleSubmit}>
              <div className='container'>
                <div className="heading">
                  <h1>Login </h1>
                </div>
                <div className="inputenroll">
                  <input type="text" className="form-control enroll"
                    onChange={formik.handleChange}
                    value={formik.values.enrollment}
                    id="enrollment" autoComplete="off" name='enrollment' placeholder="Enrollment" />
                  {formik.touched.enrollment && formik.errors.enrollment ? (
                    <div className='error'>{formik.errors.enrollment}</div>
                  ) : null}
                </div>

                <div className="passinput">
                  <input type="password" className="form-control passs"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    id="floatingInput" autoComplete="off" name='password' placeholder="Password" />
                  {formik.touched.password && formik.errors.password ? (
                    <div className='error'>{formik.errors.password}</div>
                  ) : null}

                </div>

                <div className="columnL">
                  <div className="buttonL">
                    <button className="btn " type="submit" onClick={isLoggedIn ? handleLogout : handleLogin}>
                      {isLoggedIn ? 'Logout' : 'Login'}
                    </button>

                    <span onClick={handleClick}>Create A New Account</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

        ) : (<SignUp />)}

      </div>
    </>
  )
}