import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import background from "C:/Users/Acer/Desktop/Job Portal Case Study/Front End/user-fend/user-fend/src/images/background.avif";

function AboutUs() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="main-title text-center">
        <h1>About Us</h1>
        <p className="main-para text-center">Find My Naukri</p>
      </div>

      <div className="para-about-us">
        <p>
          The project was aimed to build an application which reduces the manual
          work for managing the data of employer, job seekers in order to make
          the job placement activity more efficient.The main goal of the project
          is to develop REST APIs which will work together to achieve the entire
          functionality of the project. The project follows a multi layered
          Spring MVC architecture to make development and maintenance
          faster,easier and convenient. The scope of the current project is
          limited to building microservices, registering them with the eureka
          client, documenting the APIs using swagger docs and monitoring the
          performance using hystrix. The project can be extended further by
          connecting it to a suitable front end and thus achieve the complete
          functionality.
        </p>
      </div>

      <br />
      <br />
      <div className="contact-us">
        <center>
          <Button variant="dark">Contact Us</Button>
        </center>
      </div>
      <br />
      <br />
      <div>
        <Container>
          <Row>
            <Col>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Call Us</MDBCardTitle>
                  <MDBCardText>
                    (234)567-891
                    <br />
                    (234)987-654
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>
            <Col>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Location</MDBCardTitle>
                  <MDBCardText>
                    121 Rock Street, 21 Avenue Park,New York,NY 92103-9000
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>
            <Col>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Hours</MDBCardTitle>
                  <MDBCardText>
                    Mon-Fri .... 11am - 8pm
                    <br />
                    Sat-Sun .... 6am - 8pm
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="back-to-home">
        <center>
          <button type="button" class="btn btn-info" onClick={navigateHome}>
            Back To Home
          </button>
        </center>
      </div>
      <p class="text-footer">Copyright ©-All rights are reserved</p>
    </div>
  );
}

export default AboutUs;
