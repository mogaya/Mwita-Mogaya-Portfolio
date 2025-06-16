import { Outlet } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/Layout/ScrollToTop";

const App = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
