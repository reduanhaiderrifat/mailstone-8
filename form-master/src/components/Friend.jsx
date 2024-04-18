import { useContext } from "react";
import { assetContex } from "./Grandpa/Grandpa";

const Friend = () => {
  const gift = useContext(assetContex);
  return (
    <div>
      <h2>Friend</h2>
      <p>has:{gift}</p>
    </div>
  );
};

export default Friend;
