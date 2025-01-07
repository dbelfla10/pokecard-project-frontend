import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/Pokecard-logo.svg";
import userIcon from "../../assets/user.svg";

function Header({ handleLoginClick, handleSignupClick, isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>

        {isLoggedIn ? (
          <>
            <p className="header__user">Hello master Username!</p>
            <Link to="/" className="header__make-card-btn">
              Make Card
            </Link>
            <Link to="/profile" className="header__profile-btn">
              <img
                className="header__user-icon"
                src={userIcon}
                alt="user icon"
              ></img>
              My Cards
            </Link>
          </>
        ) : (
          <>
            <button
              className="header__login-btn"
              type="button"
              onClick={handleLoginClick}
            >
              Log In
            </button>
            <button
              className="header__signup-btn"
              type="button"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
