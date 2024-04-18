import { Outlet } from "react-router-dom";
import NavBar from "../Shaherd/Navbar/NavBar";
import Footer from "../Shaherd/Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
