import React from "react";

import { useState } from "react";
import "./Signup.css";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const url1 = "https://indish-e-commerce.onrender.com";
  const url2 = "http://localhost:3000";

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const response = await fetch(url1 + "/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      setIsLoading(false);
      setUser(data);
    }
  };

  return !isloading ? (
    <div className="containerr">
      <form className="form-login" onSubmit={submitHandler}>
        <h3 className="log-h3">sign up</h3>
        <div>
          <input className="emailnput" type="text" placeholder="name" />
        </div>
        <div>
          <input className="emailnput" type="number" placeholder="age" />
        </div>
        <div>
          <input
            className="emailnput"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <input
            className="emailnput"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="log-btn" log-btn>
          sign up
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  ) : (
    "loading..."
  );
}
