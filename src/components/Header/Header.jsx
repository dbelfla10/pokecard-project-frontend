import "./Header.css";
import logo from "../../assets/Pokecard-logo.svg";
import userIcon from "../../assets/user.svg";

function Header({ handleLoginClick, handleSignupClick, isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Logo" />

        {isLoggedIn ? (
          <>
            <p className="header__user">Hello master Username</p>
            <button className="header__make-card-btn" type="button">
              Make Card
            </button>
            <button className="header__profile-btn" type="button">
              <img
                className="header__user-icon"
                src={userIcon}
                alt="user icon"
              ></img>
              My Cards
            </button>
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
