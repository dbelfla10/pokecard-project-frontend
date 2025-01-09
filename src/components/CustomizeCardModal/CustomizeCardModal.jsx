import "./CustomizeCardModal.css";
import Card from "../Card/Card";
import { defaultPokeCard } from "../../utils/constants";

function CustomizeCardModal({ activeModal, handleCloseClick }) {
  return (
    <div className={`modal ${activeModal && "modal_opened"}`}>
      <div
        className={`modal__content modal__content_type_card ${
          activeModal && "modal__content_opened"
        }`}
      >
        <Card card={defaultPokeCard} />
      </div>
    </div>
  );
}

export default CustomizeCardModal;
