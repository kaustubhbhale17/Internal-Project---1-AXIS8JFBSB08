import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ListCompanies() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/home");
  };
  const url = "http://localhost:6005/admin/listCompanies";
  const [data, setData] = useState([
    
  ]);

  useEffect(() => {
    axios.get(url).then((json) => setData(json.data));
  }, []);

  const renderTable = () => {
    return data.map((job) => {
      return <tr>{job}</tr>;
    });
  };

  return (
    <div>
      <table className="users">
        <thead>
          <tr>
            <center>
              <th>Company List</th>
            </center>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>

      <br />
      <br />
      <center>
        <Button variant="danger" onClick={backToHome}>
          Back
        </Button>
      </center>
    </div>
  );
}

export default ListCompanies;
