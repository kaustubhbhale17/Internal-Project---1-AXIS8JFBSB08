import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:6001/job/";
    axios.get(url).then((json) => setData(json.data));
  }, []);

  const renderTable = () => {
    return data.map((job) => {
      return (
        <tr>
          <td>{job.jobId}</td>
          <td>{job.jobTitle}</td>
          <td>{job.compensation}</td>
          <td>{job.eligibility}</td>
          <td>{job.jobDescription}</td>
          <td>{job.adminId}</td>
          <td>
            <Button variant="danger" onClick={(e) => deleteJob(e, job.jobId)}>
              Delete
            </Button>
          </td>
          <td>
          </td>
        </tr>
      );
    });
  };

  async function deleteJob(e, jobId) {
    e.preventDefault();
    console.log("Delete: " + jobId);
    const url = "http://localhost:6001/job/" + jobId;
    await axios.delete(url).then(alert("Job Deleted successfully"));
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Admin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/addJob"}>
              Add Job
            </Nav.Link>
            <Nav.Link as={Link} to={"/jobByAdmin"}>
              Get Job By Admin
            </Nav.Link>
            <Nav.Link as={Link} to={"/showAllAdmins"}>
              Show All Admins
            </Nav.Link>
            <Nav.Link as={Link} to={"/dataTable"}>
              Data Table Sample
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/"}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <center>
        <h2>List Of All Available Jobs</h2>
      </center>
      <br />
      <table className="users">
        <thead>
          <tr>
            <th>Job Id</th>
            <th>Job Title</th>
            <th>Job Compensation</th>
            <th>Eligibility</th>
            <th>Description</th>
            <th>Admin Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default Home;
