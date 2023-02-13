import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ user, setUser, setSelectedCategory }) {
  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <h3>INDISH</h3>
          </Link>
        </div>

        <div className="nav-elements">
          <ul>
            <button className="cat-buttons">
              <li onClick={() => setSelectedCategory("Decor")}>Decor</li>{" "}
            </button>
            <button className="cat-buttons">
              <li onClick={() => setSelectedCategory("paintings")}>
                Paintings
              </li>
            </button>
            <button className="cat-buttons">
              <li onClick={() => setSelectedCategory("Kitchen and Dining")}>
                Kitchen and Dining
              </li>{" "}
            </button>
            <button className="cat-buttons">
              <li onClick={() => setSelectedCategory("Jewellery")}>
                Jewellery
              </li>{" "}
            </button>
            <li>
              <Link to="/upload">
                <button className="cat-buttons">Upload</button>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <nav signlogin>
            {user !== null && (
              <div>
                <span> {user.email}</span>
                <button className="Logout" onClick={handleClick}>
                  Log out
                </button>
              </div>
            )}
            {user === null && (
              <div className="signlogin">
                <Link to="/signup">
                  <button className="Signup">Signup</button>
                </Link>

                <Link to="/login">
                  <button className="Login">Login</button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </nav>
    </div>
  );
}
