import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>
      <h2>This is the home components</h2>
      {navigation.state === "loading" ? <p>loading..</p> : <Outlet></Outlet>}

      <footer>
        <h2>Thank you for visit us</h2>
      </footer>
    </div>
  );
};

export default Home;
