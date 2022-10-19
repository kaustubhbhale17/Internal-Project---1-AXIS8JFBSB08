import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function ListAllJobs() {
  const url = "http://localhost:6002/user/showAllJobs";
  const [data, setData] = useState([]);

  const applyForJob = () => {
    alert("Applied Successfully! ");
  };
  useEffect(() => {
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
          <td>
            <Button variant="warning" onClick={applyForJob}>
              Apply
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Listing Jobs</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/home">Back</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 className="main-para text-center">List Of All Available Jobs</h1>
      <br />
      <br />
      <table className="users">
        <thead>
          <tr>
            <th>Job Id</th>
            <th>Job Title</th>
            <th>Job Compensation</th>
            <th>Eligibility</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default ListAllJobs;
