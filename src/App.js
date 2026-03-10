import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from './components/Header'

function App() {
  const payment =
    "You have finished your payment succcesfuly and then you want to wait for a couple of days";

  return (
    <div>
      <Routes>
      <Header />
      </Routes>
    </div>
  );
}

export default App;
