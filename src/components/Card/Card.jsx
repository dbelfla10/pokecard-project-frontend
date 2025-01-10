import "./Card.css";
// import charizard from "../../assets/charizard.png";
import hpIcon from "../../assets/hp-icon.svg";

function Card({ card, color }) {
  return (
    <div className="card">
      <div
        className="card__container"
        style={{
          backgroundColor: color ? color : card.color ? card.color : "white",
        }}
      >
        <div className="card__xp-circle">
          <p className="card__xp-number">{card.base_experience}</p>
          <p className="card__xp">xp</p>
        </div>
        <p className="card__hp">
          {card.stats && card.stats[0] ? card.stats[0].base_stat : 0} HP{" "}
          <img className="card__hp-icon" src={hpIcon} alt="hp icon" />
        </p>
        <img
          className="card__image"
          src={
            card.sprites &&
            card.sprites.other &&
            card.sprites.other["official-artwork"] &&
            card.sprites.other["official-artwork"].front_default
              ? card.sprites.other["official-artwork"].front_default
              : ""
          }
          alt="pokemon-img"
        />
        <div className="card__title-container">
          <h2 className="card__title">{card.name}</h2>
        </div>
        <div className="card__stats">
          <div className="card__stat">
            <p className="card__stat-number">
              {card.stats && card.stats[1] ? card.stats[1].base_stat : 0}
            </p>
            <p className="card__stat-tla">ATK</p>
          </div>
          <div className="card__stat">
            <p className="card__stat-number">
              {card.stats && card.stats[2] ? card.stats[2].base_stat : 0}
            </p>
            <p className="card__stat-tla">DEF</p>
          </div>
          <div className="card__stat">
            <p className="card__stat-number">
              {card.stats && card.stats[5] ? card.stats[5].base_stat : 0}
            </p>
            <p className="card__stat-tla">VEL</p>
          </div>
        </div>
        <div className="card__poke-type-container">
          <p className="card__poke-type">
            {card.types && card.types[0].type.name
              ? card.types[0].type.name.toUpperCase()
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
