import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  const [data, setData] = useState([]); // We use brackets to apply to all kinds of data or array of an objects.

  const getData = async () => {
    const res = await fetch("http://localhost:3000/articles");
    const data = await res.json();
    console.log("data", data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1> "Pora Fulka" </h1>
      <Homepage data={data} />
      <Footer />
    </div>
  );
}

export default App;
