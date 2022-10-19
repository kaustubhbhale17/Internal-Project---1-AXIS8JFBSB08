import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [search, setFSearch] = useState(" ");

  const setSearch = (e) => {
    setFSearch(e.target.value);
  };

  async function searchJobs() {
    // console.log(search);

    const url = "http://localhost:6001/job/searchForJobs/" + search;
    await axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => response.data)
      .then((response) => {
        if (response.length === 0) {
          alert("NO JOB FOUND ! ");
        } else {
          console.log(response);
          renderTable(response);
        }
      });
  }

  function renderTable(response){
    return(
      <tr>
          <td>{response.jobId}</td>
          <td>{response.jobTitle}</td>
          <td>{response.compensation}</td>
          <td>{response.eligibility}</td>
          <td>{response.jobDescription}</td>
          <td>
          </td>
        </tr>
    )
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Find My Naukri</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/allJobs"}>
                List All Jobs
              </Nav.Link>
              <Nav.Link as={Link} to={"/aboutUs"}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to={"/liveevents"}>
                Live Hiring Challenges
              </Nav.Link>
              <Nav.Link as={Link} to={"/companies"}>
                Check Our Regular Recruiters
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for jobs"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e)}
              />
              <Button variant="outline-success" onClick={searchJobs}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;
