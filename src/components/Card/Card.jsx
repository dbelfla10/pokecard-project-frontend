import "./Card.css";
// import charizard from "../../assets/charizard.png";
import hpIcon from "../../assets/hp-icon.svg";

function Card({ card, color }) {
  return (
    <div className="card">
      <div
        className="card__container"
        style={{ backgroundColor: color ? color : card.color }}
      >
        <div className="card__xp-circle">
          <p className="card__xp-number">{card.base_experience}</p>
          <p className="card__xp">xp</p>
        </div>
        <p className="card__hp">
          {card.stats.hp} HP{" "}
          <img className="card__hp-icon" src={hpIcon} alt="hp icon" />
        </p>
        <img className="card__image" src={card.image} alt="pokemon-img" />
        <div className="card__title-container">
          <h2 className="card__title">{card.name}</h2>
        </div>
        <div className="card__stats">
          <div className="card__stat">
            <p className="card__stat-number">{card.stats.attack}</p>
            <p className="card__stat-tla">ATK</p>
          </div>
          <div className="card__stat">
            <p className="card__stat-number">{card.stats.defense}</p>
            <p className="card__stat-tla">DEF</p>
          </div>
          <div className="card__stat">
            <p className="card__stat-number">{card.stats.speed}</p>
            <p className="card__stat-tla">VEL</p>
          </div>
        </div>
        <div className="card__poke-type-container">
          <p className="card__poke-type">{card.type.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
