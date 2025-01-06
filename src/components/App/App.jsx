import { useEffect, useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("login");

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <div className="page__container">
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        handleCloseClick={closeActiveModal}
      ></LoginModal>
    </div>
  );
}

export default App;
