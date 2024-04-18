import { Helmet } from "react-helmet";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}!</h2>
          <p>{company_name}</p>
          <div className="">
            <button className="px-5  font-extrabold border rounded-lg text-[#7E90FE] active:scale-95 border-[#7E90FE] mr-2">
              {remote_or_onsite}
            </button>{" "}
            <button className="px-5  font-extrabold border rounded-lg text-[#7E90FE] active:scale-95 border-[#7E90FE] mr-2">
              {job_type}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="flex items-center gap-2">
              <FaLocationDot size={24} /> {location}
            </h2>
            <h2 className="flex items-center gap-2">
              <MdOutlineCurrencyExchange /> {salary}
            </h2>
          </div>
          <div className="card-actions justify-start">
            <Link to={`/job/${id}`}>
              {" "}
              <button className="btn btn-primary">veiw details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
