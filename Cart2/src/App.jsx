// import { StickyNavbar } from "./components/StickyNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import StickyNavbar from "./components/StickyNavbar"

const App = () => {
  return (
    <div className="w-screen h-screen p-0 m-0 box-border flex flex-col overflow-x-hidden overflow-y-auto font-poppins scroll-smooth">
      <div className=" m-20">
      <StickyNavbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default App;