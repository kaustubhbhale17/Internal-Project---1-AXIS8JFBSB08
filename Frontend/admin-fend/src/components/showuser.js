import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Showusers(){
    const [data, setData] = useState([]);

    useEffect(() => {
      const url = "http://localhost:9025/user/";
      axios.get(url).then((json) => setData(json.data));
    }, []);

    const renderTable = () => {
        return data.map((user) => {
          return (
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.contactNumber}</td>
              <td>{user.workExperience}</td>
            </tr>
          );
        });
      };

    return (
       
        <div>
            <Navbar>
        <Container>
          <Navbar.Brand>All Users</Navbar.Brand>
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
      <center>
        <h2>List Of All Available Users</h2>
      </center>
      <br />
      <br />
      <br />
      <table className="users">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Work Experience</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
        
    )
}

export default Showusers;