import "./Header.css";
import logo from "../../assets/Pokecard-logo.svg";

function Header({ handleLoginClick, handleSignupClick }) {
  return (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Logo" />
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
      </div>
    </header>
  );
}

export default Header;
