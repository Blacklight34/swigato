import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [isLoggedin, setIsLoggedIn] = useState(true);
//   const [isLoggedOut, setIsLoggedOut] = useState(true)
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="navbar-items">
          <li>Home</li>
        </Link>
        <Link to="/about" className="navbar-items">
          <li>About</li>
        </Link>
        <Link to="/contact" className="navbar-items">
          <li>Contact</li>
        </Link>
        <li>
          {isLoggedin ? (
            <button
              className="log-btn"
              onClick={() => {
                setIsLoggedIn(false)
              }}
            >Logout</button>
          ) : (
            <button
              className="log-btn"
              onClick={() => {
                console.log("Here Login");
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
