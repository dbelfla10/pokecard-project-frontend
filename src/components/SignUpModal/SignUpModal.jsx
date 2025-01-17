import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignUpModal.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const SignUpModal = ({
  handleCloseClick,
  isOpen,
  handleLoginClick,
  handleSignUp,
}) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const disableSubmit = !values.name || !values.email || !values.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      handleSignUp(values);
      resetForm();
    }
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      disableSubmit={disableSubmit}
    >
      <label htmlFor="signup-name" className="modal__label">
        Name *{""}
        <input
          type="text"
          className="modal__input"
          id="signup-name"
          placeholder="Name"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.name}</span>
      </label>
      <label htmlFor="signup-email" className="modal__label">
        Email *{""}
        <input
          type="email"
          className="modal__input"
          id="signup-email"
          placeholder="Email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.email}</span>
      </label>
      <label htmlFor="signup-password" className="modal__label">
        Password *{""}
        <input
          type="password"
          className="modal__input"
          id="signup-password"
          placeholder="Password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.password}</span>
      </label>

      <button
        onClick={handleLoginClick}
        className="modal__login-button"
        type="button"
      >
        Log In
      </button>
    </ModalWithForm>
  );
};

export default SignUpModal;
