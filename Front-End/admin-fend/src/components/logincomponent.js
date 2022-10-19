import background from "C:/Users/Acer/Desktop/Job Portal Case Study/Front End/admin-fend/admin-fend/src/images/bg-1.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [adminEmail, setMail] = useState(" ");
  const [password, setPass] = useState(" ");

  const setEmail = (e) => {
    setMail(e.target.value);
  };

  const setPassword = (e) => {
    setPass(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    let data = {
      adminEmail: adminEmail,
      password: password,
    };
    console.log(data);

    axios
      .post("http://localhost:6005/admin/validateAdmin/", data)
      .then((response) => response.data)
      .then((res) => {
        if (res.length === 0) {
          alert("Invalid credentails ! ");
        } else {
          alert("Login Successfull");
          navigate("/home");
        }
      });
  };

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={(e) => login(e)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="text-center">
              Already Registered?
              <Link to="/register">Register</Link>
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
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="btn-login-back-to-landing">
          <center>
            <Button variant="dark" onClick={navigateHome}>
              Back To Landing Page
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login;
