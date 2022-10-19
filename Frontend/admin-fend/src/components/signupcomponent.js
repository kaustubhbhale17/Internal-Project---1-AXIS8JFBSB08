import background from "C:/Users/Acer/Desktop/Job Portal Case Study/Front End/admin-fend/admin-fend/src/images/bg-1.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";


function SignUp() {
  const navigate = useNavigate();
  const navigateToLanding = () => {
    navigate("/");
  };
  

  const [adminName, setFName] = useState(" ");
  const [adminId, setAId] = useState(" ");
  const [adminEmail, setMail] = useState(" ");
  const [password, setPass] = useState(" ");
  const [adminContactNumber, setMobile] = useState(" ");
  const [adminCompanyName, setCompany] = useState(" ");

  const setFirstName = (e) => {
    setFName(e.target.value);
  };

  const setAdminId = (e) => {
    setAId(e.target.value);
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

  const setCompanyName = (e) => {
    setCompany(e.target.value);
  };

  const Signup = (e) => {
    e.preventDefault();

    let data = {
      adminId: adminId,
      adminName: adminName,
      adminEmail: adminEmail,
      password: password,
      adminContactNumber: adminContactNumber,
      adminCompanyName: adminCompanyName,
    };

    console.log(data);
    axios
      .post("http://localhost:6005/admin/", data)
      .then((response) => response.data)
      .then((data) => {
        if (data.length === 0) {
          alert("Invalid credentails! Email is already taken!");
        } else {
          alert("Registration Successfull! Please login to continue!");
          navigate("/login");
        }
      });
  };

  return (
    <div
      div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={(e) => Signup(e)}>
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
              <label>Admin id</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter id"
                onChange={(e) => setAdminId(e)}
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
              <label>Company Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Your Company Name"
                onChange={(e) => setCompanyName(e)}
              />
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
