import { useEffect, useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          isLoggedIn={isLoggedIn}
          handleSignupClick={handleSignupClick}
          handleLoginClick={handleLoginClick}
        ></Header>
        <div className="page__container">
          <Main
            handleLoginClick={handleLoginClick}
            isLoggedIn={isLoggedIn}
          ></Main>
          <Footer></Footer>
        </div>
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        handleCloseClick={closeActiveModal}
        handleSignupClick={handleSignupClick}
      ></LoginModal>
      <SignUpModal
        isOpen={activeModal === "signup"}
        handleCloseClick={closeActiveModal}
        handleLoginClick={handleLoginClick}
      ></SignUpModal>
    </div>
  );
}

export default App;
