import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log(postId);
  const { id, title, body } = post;
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Show the post details here</h2>
      <p>post id: {id}</p>
      <p>Post title{title}</p>
      <p> Post body: {body}</p>
      <button onClick={handleBack}>go back</button>
    </div>
  );
};

export default PostDetails;
