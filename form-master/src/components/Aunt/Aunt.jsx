import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { moneyContext } from "../Grandpa/Grandpa";

const Aunt = () => {
  const [money, setMoney] = useContext(moneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"mamshad"}></Cousin>
        <Cousin name={"rubaia"}></Cousin>
      </section>
      <p>money: {money}</p>
      <div className="">
        <button onClick={() => setMoney(money + 1000)}>Add 1k</button>
        <button onClick={() => setMoney(money - 1000)}>remove 1k</button>
      </div>
    </div>
  );
};

export default Aunt;
