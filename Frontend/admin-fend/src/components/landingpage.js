import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

  const navigateSignup = () => {
        navigate("/register");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div >
            <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">Find My Naukri</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Jobs" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">IT Jobs</NavDropdown.Item>
              <NavDropdown.Item href="#">Sales Jobs</NavDropdown.Item>
              <NavDropdown.Item href="#">Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#">Product Developement</NavDropdown.Item>
              <NavDropdown.Item href="#">Data Science jobs</NavDropdown.Item>
              <NavDropdown.Item href="#">Fintech</NavDropdown.Item>
              <NavDropdown.Item href="#">Machine Learning</NavDropdown.Item>
              <NavDropdown.Item href="#">HR Jobs</NavDropdown.Item>
              <NavDropdown.Item href="#">Internships</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Types Of Jobs
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Companies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">MNC</NavDropdown.Item>
              <NavDropdown.Item href="#">Unicorn</NavDropdown.Item>
              <NavDropdown.Item href="#">StartUp</NavDropdown.Item>
              <NavDropdown.Item href="#">Product Based</NavDropdown.Item>
              <NavDropdown.Item href="#">Service Based</NavDropdown.Item>
              <NavDropdown.Item href="#">Fintech</NavDropdown.Item>
              <NavDropdown.Item href="#">Internet</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Types Of Companies
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#">Services</Nav.Link> */}
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Resume Writing</NavDropdown.Item>
              <NavDropdown.Item href="#">Learn & UpSkill</NavDropdown.Item>
              <NavDropdown.Item href="#">Machine Learning Courses</NavDropdown.Item>
              <NavDropdown.Item href="#">Data Science Courses</NavDropdown.Item>
              <NavDropdown.Item href="#">Design</NavDropdown.Item>
              <NavDropdown.Item href="#">Degree Programs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Services Offered
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <button class="btn btn-outline-danger me-2" onClick={navigateSignup}>Sign up</button>
            <button class="btn btn-outline-warning me-2" onClick={navigateLogin}>Login</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>

        <div>
        <h1 className="main-title text-center">
           Admin Side Application 
        </h1>
        <p className="main-para text-center">Post New Jobs and hire the candidates</p>
        <div className="buttons text-center">
        </div>
        <br/>
    <br/>
   
        <br/>
    
    </div>

      
    </div>

  );
}

export default LandingPage;
