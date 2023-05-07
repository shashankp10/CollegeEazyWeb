import './App.css';
import Notes from './components/Notes';
import SignUp from './components/SignUp';
import AttendancePage from './components/AttendancePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from "react-router-dom";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import PrePage from './components/PrePage';
import * as pdfjs from 'pdfjs-dist';
import Shop from './components/Shop';
import Shoppre from './components/Shoppre';
import LoginSign from './components/LoginSign';
import PrivateRoutes from './components/PrivateRoutes';
import { useEffect } from 'react';


// Set the URL of the PDF.js worker script
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function App(props) {


 


  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<HomePage />} /> 
          <Route exact path="/LoginPage" element={<LoginPage />} />
          <Route exact path="/Logisign" element={<LoginSign />} />
          <Route exact path="/LoginPage/SignUp" element={<SignUp />} />
          <Route element={<PrivateRoutes/>}>
          <Route exact path="/Notes" element={<Notes />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/Shop/Shoppre" element={<Shoppre />} />
          <Route exact path="/note/PrePage/:id" element={<PrePage />} />
          <Route exact path="/AttendancePage" element={<AttendancePage />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
