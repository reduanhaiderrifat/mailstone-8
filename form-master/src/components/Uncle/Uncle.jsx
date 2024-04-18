import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>uncle</h2>
      <section className="flex">
        <Cousin asset={asset} name={"rafsan"}></Cousin>
        <Cousin name={"shohana"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
