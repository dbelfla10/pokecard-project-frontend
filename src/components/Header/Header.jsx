import "./Header.css";
import logo from "../../assets/Pokecard-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Logo" />
        <button className="header__login-btn" type="button">
          Login
        </button>
        <button className="header__signup-btn" type="button">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
