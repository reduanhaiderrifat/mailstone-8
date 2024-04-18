import useHook from "../../hooks/useHook";
import Card1 from "../Card1/Card1";

const Card = () => {
  const { data, loading } = useHook();
  console.log(data);
  return (
    <div>
      {data.map((dat) => (
        <Card1 dat={dat} key={dat.id}></Card1>
      ))}
    </div>
  );
};

export default Card;
