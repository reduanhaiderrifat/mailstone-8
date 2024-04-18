import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const assetContex = createContext("gold");
export const moneyContext = createContext("5k$");
const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <moneyContext.Provider value={[money, setMoney]}>
        <assetContex.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>

            <Uncle asset={asset}></Uncle>
            <Aunt></Aunt>
          </section>
        </assetContex.Provider>
      </moneyContext.Provider>
    </div>
  );
};

export default Grandpa;
