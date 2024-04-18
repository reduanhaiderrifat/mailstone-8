import Proptypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const poststyle = {
    border: "2px solid tomato",
    borderRadius: "20px",
  };
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div style={poststyle}>
      <h4>Post id: {id}</h4>
      <p>Title: {title}</p>
      <Link to={`/post/${id}`}>Post details</Link>
      <Link to={`/post/${id}`}>
        <button>show details</button>
      </Link>
      <button onClick={handleShowDetails}>Click </button>
    </div>
  );
};
Post.propTypes = {
  post: Proptypes.object.isRequired,
};
export default Post;
