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
          className="modal__confirmation-text-img"
          src={ConfirmationText}
          alt="confirmation text"
        />
        <p className="modal__confirmation-text">
          View your card in your profile
        </p>
        <button
          className="modal__submit"
          type="button"
          onClick={handleCloseClick}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
export default ConfirmationModal;
