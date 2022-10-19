import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import SignUp from "./components/signupcomponent";
import Login from "./components/logincomponent";
import Home from "./components/homepagecomponent";
import AddJob from "./components/addjobcomponent";
import JobByAdmin from "./components/jobbyadmincomponent";
import ShowAllAdmins from "./components/showalladminscomponent";
import UpdateJob from "./components/updatejob";
import Showusers from "./components/showuser";
import JobsAdmin from "./components/jobsadmins";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addJob" element={<AddJob />} />
            <Route path="/jobByAdmin" element={<JobByAdmin />} />
            <Route path="/showAllAdmins" element={<ShowAllAdmins />} />
            <Route path="/updateJob" element={<UpdateJob/>}/>
            <Route path="/showAllUsers" elment={<Showusers/>}/>
            <Route path="/dataTable" element={<JobsAdmin/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
