import { useContext } from "react";
import { assetContex } from "../Grandpa/Grandpa";

const Special = ({ asset }) => {
  const gift = useContext(assetContex);
  return (
    <div>
      <h2>Special</h2>
      <p>has: {asset}</p>
      <p>has: {gift}</p>
    </div>
  );
};

export default Special;
