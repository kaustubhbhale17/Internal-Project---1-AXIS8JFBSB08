import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "C:/Users/Acer/Desktop/Job Portal Case Study/Front End/user-fend/user-fend/src/images/bg-1.jpg";
import Button from "react-bootstrap/button";

function Login() {
  const [email, setMail] = useState(" ");
  const [pass, setPass] = useState(" ");

  const setEmail = (e) => {
    setMail(e.target.value);
  };

  const setPassword = (e) => {
    setPass(e.target.value);
  };

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const login = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: pass,
    };

    axios
      .post("http://localhost:6002/user/login", data)
      .then((response) => response.data)
      .then((data) => {
        if (data.length === 0) {
          alert("Invalid credentials! Please check your email and password!");
        } else {
          alert("Login successfull");
          let loggedUser = data;
          console.log(loggedUser);
          navigate("/home", data);
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
