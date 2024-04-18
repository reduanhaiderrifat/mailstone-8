import { useLoaderData, useNavigate } from "react-router-dom";

const TodolDEtails = () => {
  const todol = useLoaderData();
  const narative = useNavigate();
  const handleBack = () => {
    narative(-1);
  };
  return (
    <div>
      <h2>todols details here</h2>
      <p>Post id: {todol.id}</p>
      <p>Post title: {todol.title}</p>
      <p>Post completed: {todol.completed}</p>
      <button onClick={handleBack}>Go back</button>
    </div>
  );
};

export default TodolDEtails;
