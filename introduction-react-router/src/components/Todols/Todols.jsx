import { useLoaderData } from "react-router-dom";
import Todol from "../Todol/Todol";

const Todols = () => {
  const todols = useLoaderData();
  return (
    <div>
      <h2>Todols here: {todols.length}</h2>
      {todols.map((todol) => (
        <Todol key={todol.id} todol={todol}></Todol>
      ))}
    </div>
  );
};

export default Todols;
