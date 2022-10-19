import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const navigate = useNavigate();

  const [jobId, setId] = useState(" ");
  const [jobTitle, setTitle] = useState(" ");
  const [compensation, setComp] = useState(" ");
  const [eligibility, setElig] = useState(" ");
  const [jobDescription, setDesc] = useState("");
  const [adminId, setAId] = useState(" ");

  const setJobId = (e) => {
    setId(e.target.value);
  };

  const setJobTitle = (e) => {
    setTitle(e.target.value);
  };
  const setCompensation = (e) => {
    setComp(e.target.value);
  };
  const setEligibility = (e) => {
    setElig(e.target.value);
  };

  const setJobDescription = (e) => {
    setDesc(e.target.value);
  };

  const setAdminId = (e) => {
    setAId(e.target.value);
  };

  const PostJob = (e) => {
    e.preventDefault();
    let data = {
      jobId: jobId,
      jobTitle: jobTitle,
      compensation: compensation,
      eligibility: eligibility,
      jobDescription: jobDescription,
      adminId: adminId,
    };
    console.log(data);
    axios
      .post("http://localhost:6001/job/", data)
      .then((response) => response.data)
      .then((res) => {
        if (res.length === 0) {
          alert("Failed To Post The Job ! ");
        } else {
          alert("Job Posted Successfully!");
          navigate("/home");
        }
      });
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => PostJob(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add A New Job</h3>
          <div className="form-group mt-3">
            <label>Job Id</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Job Id"
              onChange={(e) => setJobId(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Job Title</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Job Title"
              onChange={(e) => setJobTitle(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Compensation</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter CTC"
              onChange={(e) => setCompensation(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Eligibility</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter eligible jobs"
              onChange={(e) => setEligibility(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Job Description</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Job Description"
              onChange={(e) => setJobDescription(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Admin Id</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter Your Id"
              onChange={(e) => setAdminId(e)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              POST
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
