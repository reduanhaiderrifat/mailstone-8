import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const handleJob = () => {
    saveJobApplication(idInt);
    toast.success("you applied successfully");
  };
  return (
    <div>
      <div className="grid gap-3 grid-cols-4">
        <div className="border col-span-3">
          <h2>The details will coming</h2>
          <h2>Job details :{id}</h2>
        </div>
        <div className="border">
          <h2>Side thins</h2>
          <button onClick={handleJob} className="btn btn-primary">
            applied
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
