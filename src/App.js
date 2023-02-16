import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      {/* {console.log("Header Done")} */}
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
