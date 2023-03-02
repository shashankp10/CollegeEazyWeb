import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp';
import { Login } from '../Servises/LoginServise';

export default function LoginPage() {

  const [login, setLogin] = useState(true);

  const handleClick = () => {
    setLogin(!login);
}

  const [userRegistration, setUserRegistration] = useState({
    EnrollmentNo: "",
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
    const newData = { ...userRegistration, id: Date().toString() }
    setData([...Data, newData]);
    console.log(Data);


    // call server api to sending the data 
    Login(Data).then((resp)=>{
      console.log(resp);
      console.log('successfull');
    }).catch ((error)=>{
      console.log(error)
      console.log("error occured");
    })

    setUserRegistration({
      EnrollmentNo: "",
      passward: ""
    });
  

  }
  return (
    <>
      <div>
        
        {" "} {login ? (


          <div className="column">
            <form action="login" onSubmit={handleSubmit}>
              <div className='container'>
                <div className="heading">
                  <h1>Login </h1>
                </div>
                <input type="text" className="form-control"
                  value={userRegistration.EnrollmentNo}
                  onChange={handleInput}
                  id="EnrollmentNo" autoComplete="off" name='EnrollmentNo' placeholder="EnrollmentNo" />

                <input type="Password" className="form-control"
                  value={userRegistration.password}
                  onChange={handleInput}
                  id="floatingInput" autoComplete="off" name='password' placeholder="Password" />

                <div className="column">
                  <div className="button">
                    <button className="btn " type="submit">Login</button>
                    <span style={{cursor:"pointer", alignItem:"left",color:"blue", textDecoration: "underline"}} onClick={handleClick}>Create A New Account</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        
        ) : ( <SignUp />)}

      </div>
    </>
  )
}
