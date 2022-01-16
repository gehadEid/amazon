import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { Route, Routes } from "react-router";
import CheckOut from "./CheckOut";
import Subtotal from "./Subtotal";
function App() {
  return (
    <>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/subtotal" element={<Subtotal />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
