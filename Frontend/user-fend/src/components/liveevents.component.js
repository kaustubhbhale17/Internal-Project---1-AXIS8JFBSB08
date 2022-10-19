import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function LiveEvents() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="main-div">
      <div>
        <h3 className="main-title text-center">Live Events</h3>
      </div>

      <br />
      <br />

      <div
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "right",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <center>
              <Card.Title>Siemens Healthineers</Card.Title>
            </center>
            <center>
              <Card.Subtitle className="mb-2 text-muted">HIRING</Card.Subtitle>
            </center>
            <Card.Text>
              Hiring for the profile of Full Stack Developer. Salary best in the
              industry. End Date - 31/12/2022
            </Card.Text>
            <center>
              <Button variant="success">Start</Button>
            </center>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <center>
              <Card.Title>Collins Codemonk</Card.Title>
            </center>
            <center>
              <Card.Subtitle className="mb-2 text-muted">HIRING</Card.Subtitle>
            </center>
            <Card.Text>
              Hiring for the profile of Java, Python Full Stack Developer. End
              Date - 27/12/2022.
            </Card.Text>
            <center>
              <Button variant="success">Start</Button>
            </center>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <center>
              <Card.Title>R1 RCM India</Card.Title>
            </center>
            <center>
              <Card.Subtitle className="mb-2 text-muted">HIRING</Card.Subtitle>
            </center>
            <Card.Text>
              Hiring For the Profile For Software Developer. End Date -
              24/12/2022.
            </Card.Text>
            <center>
              <Button variant="success">Start</Button>
            </center>
          </Card.Body>
        </Card>
      </div>

      <div className="btn-live-event">
        <Button variant="primary" onClick={navigateHome}>
          Back To Home
        </Button>
      </div>
    </div>
  );
}
export default LiveEvents;
