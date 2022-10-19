import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function JobByAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:6001/job/adminId/1";
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
        </tr>
      );
    });
  };

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>All Admins</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/home">back</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br />
      <br />
      <center>Jobs Posted By Admin</center>
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
            <th>Admin Id</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default JobByAdmin;
