import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]); // We use brackets to apply to all kinds of data or array of an objects.
  return (
    <div className="App">
      <Navbar />
      <h1> "If you Think Education is expensive then try Bootcamp" </h1>
      <Footer />
    </div>
  );
}

export default App;
