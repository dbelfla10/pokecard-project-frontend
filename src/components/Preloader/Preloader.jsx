import "./Preloader.css";
import pokeball from "../../assets/pokeball.png";

const Preloader = () => {
  return (
    <div className="preloader">
      <img className="preloader__pokeball" src={pokeball} alt="pokeball" />
      <div className="preloader__circle"></div>
    </div>
  );
};

export default Preloader;
