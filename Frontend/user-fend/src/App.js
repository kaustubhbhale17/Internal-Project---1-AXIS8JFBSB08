import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignUp from "./components/signupcomponent";
import Login from "./components/logincomponent";
import Home from "./components/homecomponent";
import LandingPage from "./components/landingpagecomponent";
import AboutUs from "./components/aboutuscomponent";
import LiveEvents from "./components/liveevents.component";
import ListAllJobs from "./components/listalljobscomponent";
import ListCompanies from "./components/listcompaniescomponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/liveEvents" element={<LiveEvents />} />
            <Route path="/allJobs" element={<ListAllJobs />} />
            <Route path="/companies" element={<ListCompanies/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
