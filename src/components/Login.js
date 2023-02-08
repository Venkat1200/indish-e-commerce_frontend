import { useState } from "react";
import "./Login.css";

export default function Login({ setUser }) {
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

    const response = await fetch(url1 + "/Users/login", {
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

  return (
    <div className="containerr">
      <form className="form-login" onSubmit={submitHandler}>
        <h3 className="log-h3">Log in</h3>
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
          Log in
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );

  // return (
  //   <div class="container">
  //     <div class="screen">
  //       <div class="screen__content">
  //         <form class="login">
  //           <div class="login__field">
  //             <i class="login__icon fas fa-user"></i>
  //             <input
  //               type="text"
  //               class="login__input"
  //               placeholder="User name / Email"
  //               onChange={(e) => setEmail(e.target.value)}
  //               value={email}
  //             />
  //           </div>
  //           <div class="login__field">
  //             <i class="login__icon fas fa-lock"></i>
  //             <input
  //               type="password"
  //               class="login__input"
  //               placeholder="Password"
  //               onChange={(e) => setPassword(e.target.value)}
  //               value={password}
  //             />
  //           </div>
  //           <button class="button login__submit">
  //             <span class="button__text">Log In Now</span>
  //             {error && <div className="error">{error}</div>}
  //             <i class="button__icon fas fa-chevron-right"></i>
  //           </button>
  //         </form>
  //         <div class="social-login"></div>
  //       </div>
  //       <div class="screen__background">
  //         <span class="screen__background__shape screen__background__shape4"></span>
  //         <span class="screen__background__shape screen__background__shape3"></span>
  //         <span class="screen__background__shape screen__background__shape2"></span>
  //         <span class="screen__background__shape screen__background__shape1"></span>
  //       </div>
  //     </div>
  //   </div>
  // );
}
