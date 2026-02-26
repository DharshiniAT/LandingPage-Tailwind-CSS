import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Products from "./components/Products";
import PageNOT from "./components/PageNOT";
import Solutions from "./components/Solutions";
import Developers from "./components/Developers";
import Pricing from "./components/Pricing";
function App() {
  const payment =
    "You have finished your payment succcesfuly and then you want to wait for a couple of days";

  return (
    <div>
      <Routes>
        <Route path="/" element={<Footer data={payment} />} />
        <Route path="*" element={<PageNOT />} />
        <Route path="/home" element={<Footer />} />
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
