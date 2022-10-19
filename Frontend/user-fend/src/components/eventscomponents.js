import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Events() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="main-div">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>Hiring Challenges</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/liveevents">Live</Nav.Link>
              <Nav.Link href="#pricing">UpComing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={navigateHome}>Back</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Events;
