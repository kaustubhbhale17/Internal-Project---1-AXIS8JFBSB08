import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "C:/Users/Acer/Desktop/Job Portal Case Study/Front End/user-fend/user-fend/src/images/bg-1.jpg";
import Button from "react-bootstrap/Button";

function SignUp() {
  const [firstName, setFName] = useState(" ");
  const [lastName, setLName] = useState(" ");
  const [email, setMail] = useState(" ");
  const [password, setPass] = useState(" ");
  const [contactNumber, setMobile] = useState(" ");
  const [workExperience, setWork] = useState(" ");

  const setFirstName = (e) => {
    setFName(e.target.value);
  };
  const setLastName = (e) => {
    setLName(e.target.value);
  };
  const setEmail = (e) => {
    setMail(e.target.value);
  };
  const setPassword = (e) => {
    setPass(e.target.value);
  };
  const setContactNumber = (e) => {
    setMobile(e.target.value);
  };
  const setWorkExperience = (e) => {
    setWork(e.target.value);
  };

  const navigate = useNavigate();

  const navigateToLanding = () => {
    navigate("/");
  };

  const register = (e) => {
    e.preventDefault();

    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      contactNumber: contactNumber,
      workExperience: workExperience,
    };

    axios
      .post("http://localhost:6002/user/", data)
      .then((response) => response.data)
      .then((data) => {
        if (data.length === 0) {
          alert("Registration Failed!");
        } else {
          alert("Registration Succesfull!");
          navigate("/login");
        }
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={(e) => register(e)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already Registered?
              <Link to="/login">Login</Link>
            </div>
            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="First name"
                onChange={(e) => setFirstName(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Last name"
                onChange={(e) => setLastName(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email"
                onChange={(e) => setEmail(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => setPassword(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Contact Number</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Mobile Number"
                onChange={(e) => setContactNumber(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>
                Work Experience
                <select onChange={(e) => setWorkExperience(e)} required>
                  <option>Select Your Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="Two plus yearsof Experience">
                    Two plus yearsof Experience
                  </option>
                  <option value="More than 2 years of experience">
                    More than 2 years of experience
                  </option>
                </select>
              </label>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <div className="btn-backto-landing">
          <center>
            <Button variant="dark" onClick={navigateToLanding}>
              Back To Landing Page
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
