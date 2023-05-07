import { Outlet, Navigate } from 'react-router-dom';



  export default function PrivateRoutes () {

    let auth =  (localStorage.getItem("Token")) ? true : false;
    console.log(auth,"this is auth") 

    return(
        
      auth  ? <Outlet/> : <Navigate to="/Logisign" />
        
    )
  
}
