import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const LoginModal = ({
  handleCloseClick,
  isOpen,
  handleLogin,
  handleSignupClick,
}) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      handleLogin(values);
      resetForm();
    }
  };

  const disableSubmit = !values.email || !values.password;

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      disableSubmit={disableSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.email}</span>
      </label>
      <label htmlFor="password" className="modal__label">
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.password}</span>
      </label>
      <button
        onClick={handleSignupClick}
        className="modal__signup-button"
        type="button"
      >
        Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
