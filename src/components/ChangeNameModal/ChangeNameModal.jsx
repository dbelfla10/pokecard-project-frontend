import React, { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ChangeNameModal.css";

const ChangeNameModal = ({
  handleCloseClick,
  isOpen,
  user,
  handleChangeName,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangeName({ name });
  };

  const disableSubmit = !name;

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
          value={name}
          onChange={handleNameChange}
          required
        />
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
