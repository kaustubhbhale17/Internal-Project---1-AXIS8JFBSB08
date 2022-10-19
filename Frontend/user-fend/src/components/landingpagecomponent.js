import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import background from "C:/Users/Acer/Desktop/Job Portal Case Study/Front End/user-fend/user-fend/src/images/background.avif";

function LandingPage() {
  const navigate = useNavigate();

  const navigateSignup = () => {
    navigate("/register");
  };
  const navigateLogin = () => {
    navigate("/login");
  };

  const redirect = () => {
    navigate("/");
  };
  return (
    // Code for Navigation Bar
    <div>
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
                  <NavDropdown.Item href="#">
                    Product Developement
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Data Science jobs
                  </NavDropdown.Item>
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
                  <NavDropdown.Item href="#">
                    Machine Learning Courses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Data Science Courses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Design</NavDropdown.Item>
                  <NavDropdown.Item href="#">Degree Programs</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Services Offered
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <button
                  class="btn btn-outline-danger me-2"
                  onClick={navigateSignup}
                >
                  Sign up
                </button>
                <button
                  class="btn btn-outline-warning me-2"
                  onClick={navigateLogin}
                >
                  Login
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <h1 className="main-title text-center">Find Your dream Job Now!</h1>
        <p className="main-para text-center">5 lakh+ jobs for you to explore</p>
        <div className="buttons text-center"></div>
        <br />
        <div>
          <h3>
            <center>Check Top Companies Hiring Now! </center>
          </h3>
        </div>
        <br />
        <div>
          <Container>
            <Row>
              <Col>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Bharti Airtel</MDBCardTitle>
                    <MDBCardText>Leading Global Telecom Company</MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Accolite Digital</MDBCardTitle>
                    <MDBCardText>
                      Digital Transformation Service Provider
                    </MDBCardText>
                    <MDBBtn onClick={redirect}>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Xoriant</MDBCardTitle>
                    <MDBCardText>
                      Software Development and Technology Services Firm
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <div>
          <Container>
            <Row>
              <Col>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Persistent</MDBCardTitle>
                    <MDBCardText>Trusted Global Solutions Company</MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Nagarro</MDBCardTitle>
                    <MDBCardText>
                      Leader in Digital Product Engineering
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>WNS Global</MDBCardTitle>
                    <MDBCardText>
                      Leading Process and Management Company
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <div>
          <Container>
            <Row>
              <Col>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Cognizant</MDBCardTitle>
                    <MDBCardText>
                      Leading ITeS Company With Global Presence
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>ICICI Bank</MDBCardTitle>
                    <MDBCardText>
                      Leading Private Sector Bank in India
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Open Financial Technologies</MDBCardTitle>
                    <MDBCardText>Trusted Global Solution Csompany</MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
