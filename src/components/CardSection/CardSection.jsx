import "./CardSection.css";
import { defaultPokeCards } from "../../utils/constants";
import Card from "../Card/Card";

function CardSection() {
  return (
    <div className="card-section">
      <ul className="card-section__cards">
        {defaultPokeCards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </ul>
    </div>
  );
}

export default CardSection;
