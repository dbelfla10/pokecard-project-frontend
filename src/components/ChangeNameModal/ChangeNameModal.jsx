import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ChangeNameModal.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const ChangeNameModal = ({
  handleCloseClick,
  isOpen,
  user,
  handleChangeName,
}) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      handleChangeName(values);
      resetForm();
      console.log(values);
    }
  };

  const disableSubmit = !values.name;

  return (
    <ModalWithForm
      title="Change Name"
      buttonText="Save"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      disableSubmit={disableSubmit}
    >
      <label htmlFor="change-name" className="modal__label">
        Name *{""}
        <input
          type="text"
          className="modal__input"
          id="change-name"
          placeholder={user && user.name ? user.name : "Enter your name"}
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.name}</span>
      </label>
      <button
        onClick={handleCloseClick}
        className="modal__cancel-button"
        type="button"
      >
        Cancel
      </button>
    </ModalWithForm>
  );
};

export default ChangeNameModal;
