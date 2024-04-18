import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../../utility/localstorage";
import { Helmet } from "react-helmet";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appiedJobsIApplied, setAppiledJoobs] = useState([]);
  const [displayJobs, setdisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getStored();
    if (jobs.length > 0) {
      const appliedJObs = jobs.filter((job) => storedJobs.includes(job.id));
      setAppiledJoobs(appliedJObs);
      setdisplayJobs(appliedJObs);
    }
  }, [jobs]);
  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setdisplayJobs(appiedJobsIApplied);
    } else if (filter === "remote") {
      const remoteJobs = appiedJobsIApplied.filter(
        (job) => job.remote_or_onside === "Remote"
      );
      setdisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const remoteJobs = appiedJobsIApplied.filter(
        (job) => job.remote_or_onside === "Onsite"
      );
      setdisplayJobs(remoteJobs);
    }
  };
  return (
    <div>
      <Helmet>
        <title>career hub | Applied Job</title>
      </Helmet>
      <h2>this is appied jobs{appiedJobsIApplied.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title}
              {job.company_name}
              {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
