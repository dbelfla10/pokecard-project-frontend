import "./CustomizeCardModal.css";
import Card from "../Card/Card";
// import { defaultPokeCard } from "../../utils/constants";
import { useState } from "react";

function CustomizeCardModal({
  activeModal,
  handleCloseClick,
  handleCustomizeCard,
  currentPokemon,
}) {
  const [color, setColor] = useState("");

  return (
    <div
      className={`modal ${
        activeModal === "card" && "modal_opened"
      } modal_type_card`}
    >
      <div
        className={`modal__content modal__content_type_card ${
          activeModal && "modal__content_opened"
        }`}
      >
        <Card
          card={currentPokemon}
          color={color}
          hideDeleteButton={true}
          hideDownloadButton={true}
        />
        <h2 className="modal__title modal__title_type_card">
          Customize card color
        </h2>
        <select
          className="modal__input modal__input_type_card"
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="white">Default</option>
          <option value="#EB927C">Red</option>
          <option value="#AFD190">Green</option>
          <option value="#8AC7E5">Blue</option>
          <option value="#FFF291">Yellow</option>
          <option value="#BE9FEE">Purple</option>
        </select>
        <button
          className="modal__submit modal__submit_type_card"
          type="button"
          onClick={() => handleCustomizeCard(color)}
        >
          Save
        </button>
        <button
          className="modal__discard-btn"
          type="button"
          onClick={handleCloseClick}
        >
          Discard
        </button>
      </div>
    </div>
  );
}

export default CustomizeCardModal;
