import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";

function App() {
  return (
   <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
    </Routes>
    <Toaster></Toaster>
   </Router>
  );
}

export default App;
