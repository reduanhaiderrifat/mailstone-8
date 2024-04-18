import Proptypes from "prop-types";
import { Link } from "react-router-dom";
const Todol = ({ todol }) => {
  return (
    <div>
      <hr />
      <h2>Todol id: {todol.id}</h2>
      <h2>Todol title: {todol.title}</h2>
      <h2>Todol completed: {todol.completed}</h2>
      <Link to={`/todol/${todol.id}`}>details</Link>
    </div>
  );
};

Todol.propTypes = {
  todol: Proptypes.object.isRequired,
};
export default Todol;
