import { useLoaderData } from "react-router-dom";
import Usr from "../Usr/Usr";

const User = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>tjis is user: {users.length}</h2>
      {users.map((user, idx) => (
        <Usr key={idx} user={user}></Usr>
      ))}
    </div>
  );
};

export default User;
