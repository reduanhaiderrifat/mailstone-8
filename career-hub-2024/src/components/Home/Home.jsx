import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import CategoryList from "../Category/CategoryList";
import ReaturesJObs from "../Features/ReaturesJObs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Career hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <ReaturesJObs></ReaturesJObs>
    </div>
  );
};

export default Home;
