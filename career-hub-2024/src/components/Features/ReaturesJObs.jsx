import { useEffect, useState } from "react";
import Job from "../Job/Job";

const ReaturesJObs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setlength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center">
      <h2 className="text-5xl ">This is features jobs : {jobs.length}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam?
      </p>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      {dataLength === jobs.length ? null : (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setlength(jobs.length)}
          >
            See all
          </button>
        </div>
      )}
    </div>
  );
};

export default ReaturesJObs;
