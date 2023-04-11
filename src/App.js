import { useState, useEffect } from "react";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";

import "./app.css";

import Login from "./components/Login";
import Searchbar from "./components/Searchbar";

function App() {
  // const [articles, setArticles] = useState([]); // We use brackets to apply to all kinds of data or array of an objects.
  const [signal, setSignal] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [selectedCategory, setSelectedCategory] = useState("");

  console.log("SELECTED CATEGORY", selectedCategory);

  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <div className="App">
      <Navbar
        user={user}
        setUser={setUser}
        setSelectedCategory={setSelectedCategory}
      />
      {/* <Searchbar user={user} setUser={setUser} /> */}
      {/* {user ? (
        <Searchbar user={user} setUser={setUser} />
      ) : (
        <Navigate to="/" />
      )} */}
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Home
                user={user}
                category={selectedCategory}
                selectedCategory={selectedCategory}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/"
          element={user ? <Searchbar user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup setUser={setUser} /> : <Navigate to="/" />}
        />

        <Route
          path="/upload"
          element={
            user ? (
              <Upload
                setSignal={setSignal}
                signal={signal}
                setUser={setUser}
                user={user}
              />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
