import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaDownload } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import profile from '../img/profile.png'
import Pdfviewer from './Pdfviewer';
import Note from './Note';
import axios from 'axios';
import { useParams ,useLocation} from 'react-router-dom';



export default function PrePage(props) {

  const params = useParams();
  const iid = parseInt(params.id, 10);
  console.log(iid, "this is iiddd");
  console.log(params, "this is params");

  console.log(props, "props");
  const location = useLocation();
  console.log(location, "location hooks");

  const dataNote = location.state?.data;
  console.log(dataNote, "this is pre page");

  const result = dataNote.find(obj => obj.id === iid);
  console.log(result, "this is result");

  let url = null;
  if (result && iid === result.id) {
    url = result.path;
  }

  console.log(url, "this is url");

  const [loading, setLoading] = useState(true);
 

  const downloadFile = () => {
    if (url) {
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.setAttribute('download', url);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };



  const handlePreviewPage = async (e) => {
   
    try {
      // setLoading(true);
      //  const response = await axios.get(`http://localhost:8080/collegeazy/notes/file/${url}`);
      //  console.log(file);
      // setFile(response.data);
      console.log('Successfully Submitted');
      alert('Successfully Submitted');
    } catch (error) {
      console.log(error);
      alert('An error occurred while submitting the form.');
    }
    finally {
      // make sure to set the loading state to false after data is fetched
      setLoading(false);
  }

  };



  return (


    <>
      <div className='prePage'>
        <Navbar />
        <div className="container">


          <div className="prebox">
            <div className="title" style={{ padding: "30px 30px", color: "#27a9d4" }}>
              <h1>Physics unit-1 Mechanics-motion and its type</h1>
            </div>
            <button className='btn1' onClick={downloadFile} > Free Download <FaDownload /></button>
            <button className='btn2' onClick={handlePreviewPage}  >Preview <FaBookReader /></button>
          </div>
          <br />

        </div>
        <div className="PDF-viewer">

        {loading ? (
                <p className='notepre'>No data available...</p>
            ) : (

            <Pdfviewer url={url} />
            
            )}


        </div>
      </div>
    </>
  )
}




































            {/* <div className="userpro">

              <div className="user" >
                <h2 style={{ fontSize: "20px" }}>Uploded By</h2>
                <img src={profile} alt="profile" style={{ width: "90px" }} />
                <h4 style={{ fontSize: "20px" }}>Aadil khan</h4>
                <h6 style={{ fontSize: "15px" }}>IT 2nd year</h6>
                <h5 style={{ fontSize: "15px" }}>ADGITM</h5>
              </div>

              <div className="download" style={{ float: "right", marginTop: "-190px" }}>
                <h1 style={{ fontSize: "80px" }}>500</h1>
                <h4>Downloads</h4>
              </div>
            </div> */}