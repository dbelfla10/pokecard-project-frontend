import "./Card.css";
import charizard from "../../assets/charizard.png";
import hpIcon from "../../assets/hp-icon.svg";

function Card() {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__xp-circle">
          <p className="card__xp-number">267</p>
          <p className="card__xp">xp</p>
        </div>
        <p className="card__hp">
          78 HP <img className="card__hp-icon" src={hpIcon} alt="hp icon" />
        </p>
        <img className="card__image" src={charizard} alt="pokemon-img" />
        <div className="card__title-container">
          <h2 className="card__title">Charizard</h2>
        </div>
        <div className="card__stats">
          <div className="card__stat">
            <p className="card__stat-number">84</p>
            <p className="card__stat-tla">ATK</p>
          </div>
          <div className="card__stat">
            <p className="card__stat-number">78</p>
            <p className="card__stat-tla">DEF</p>
          </div>
          <div className="card__stat">
            <p className="card__stat-number">100</p>
            <p className="card__stat-tla">VEL</p>
          </div>
        </div>
        <div className="card__poke-type-container">
          <p className="card__poke-type">FIRE</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
