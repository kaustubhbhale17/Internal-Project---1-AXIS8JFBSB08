import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function ShowAllAdmins() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:6005/admin/";
    axios.get(url).then((json) => setData(json.data));
  }, []);

  const renderTable = () => {
    return data.map((admin) => {
      return (
        <tr>
          <td>{admin.adminId}</td>
          <td>{admin.adminEmail}</td>
          <td>{admin.adminContactNumber}</td>
          <td>{admin.adminCompanyName}</td>
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
      <center>
        <h2>List Of All Available Admins</h2>
      </center>
      <br />
      <br />
      <br />
      <table className="users">
        <thead>
          <tr>
            <th>Admin Id</th>
            <th>Admin Email</th>
            <th>Contact Number</th>
            <th>Organisation</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default ShowAllAdmins;
