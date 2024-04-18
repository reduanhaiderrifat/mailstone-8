import Proptypes from "prop-types";
import { Link } from "react-router-dom";
const Usr = ({ user }) => {
  const { id, name, email, phone } = user;
  const useStyle = {
    border: "2px solid tomato",
    padding: "5px",
    marginBottom: "10px",
    borderRadius: "12px",
  };
  return (
    <div style={useStyle}>
      <h2>{name}</h2>
      <p>
        <b>{id}</b>
      </p>
      <p>{email}</p>
      <p>{phone}</p>
      <Link to={`/user/${id}`}>show details</Link>
    </div>
  );
};
Usr.propTypes = {
  user: Proptypes.object.isRequired,
};
export default Usr;
