import "./ConfirmationModal.css";
import ConfirmationText from "../../assets/Card-saved.png";

function ConfirmationModal({ activeModal, handleCloseClick }) {
  return (
    <div
      className={`modal ${activeModal === "confirmation" && "modal_opened"}`}
    >
      <div
        className={`modal__content modal__content_type_confirmation ${
          activeModal && "modal__content_opened"
        }`}
      >
        <img
          className="modal__confirmation-text"
          src={ConfirmationText}
          alt="confirmation text"
        />
        <button
          className="modal__submit"
          type="button"
          onClick={handleCloseClick}
        >
          Ok!
        </button>
      </div>
    </div>
  );
}
export default ConfirmationModal;
