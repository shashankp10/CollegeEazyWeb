import './App.css';

import Notes  from './components/Notes';
import SignUp  from './components/SignUp';
import AttendancePage  from './components/AttendancePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import Note from './components/Note';
import PrePage from './components/PrePage';




function App() {
  return (
    <>
    <Router>
         <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/Notes" element={<Notes/>}></Route>
              <Route path="/Notes/PrePage" element={<PrePage/>}></Route>
              <Route path="/AttendancePage" element={<AttendancePage/>}></Route>
              <Route path="/LoginPage" element={<LoginPage/>}></Route>
              <Route path="/LoginPage/SignUp" element={<SignUp/>}></Route>
        </Routes>
    </Router>
   
    </>
  );
}

export default App;
