import "./CardSection.css";
// import { defaultPokeCards } from "../../utils/constants";
import Card from "../Card/Card";
import noCardsText from "../../assets/no-cards-text.png";

function CardSection({ pokemonCards, handleAddCard, handleDeleteCard }) {
  return (
    <div className="card-section">
      {pokemonCards.length === 0 ? (
        <div className="card-section__no-cards">
          <img
            className="card-section__no-cards-image"
            src={noCardsText}
            alt="No cards"
          ></img>
          <button
            className="card-section__no-cards-btn"
            type="button"
            onClick={handleAddCard}
          >
            Add cards
          </button>
        </div>
      ) : (
        <ul className="card-section__cards">
          {pokemonCards.map((card) => {
            return (
              <Card
                key={card.id}
                card={card}
                handleDeleteCard={handleDeleteCard}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CardSection;
