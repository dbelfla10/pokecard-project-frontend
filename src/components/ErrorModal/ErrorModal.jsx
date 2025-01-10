import "./ErrorModal.css";
import notFound from "../../assets/Not-Found-404.png";

function ErrorModal({ activeModal, handleCloseClick }) {
  return (
    <div className={`modal ${activeModal === "error" && "modal_opened"}`}>
      <div
        className={`modal__content modal__content_type_error ${
          activeModal && "modal__content_opened"
        }`}
      >
        <img className="modal__error-text" src={notFound} alt="Error text" />
        <p className="modal__error-message">
          Double check the spelling of your Pokemon name...
        </p>
        <button
          className="modal__submit"
          type="button"
          onClick={handleCloseClick}
        >
          Try again!
        </button>
      </div>
    </div>
  );
}
export default ErrorModal;
