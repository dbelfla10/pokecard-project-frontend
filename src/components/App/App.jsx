import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import CustomizeCardModal from "../CustomizeCardModal/CustomizeCardModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activeModal, setActiveModal] = useState("");

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const handleSearchClick = () => {
    setActiveModal("card");
  };

  const handleCustomizeCardClick = () => {
    setActiveModal("confirmation");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeActiveModal();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    closeActiveModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          isLoggedIn={isLoggedIn}
          handleSignupClick={handleSignupClick}
          handleLoginClick={handleLoginClick}
        />
        <div className="page__container">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleLoginClick={handleLoginClick}
                  isLoggedIn={isLoggedIn}
                  handleSearchClick={handleSearchClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile handleLogout={handleLogout} />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />
        </div>
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        handleCloseClick={closeActiveModal}
        handleSignupClick={handleSignupClick}
        handleLogin={handleLogin}
      />
      <SignUpModal
        isOpen={activeModal === "signup"}
        handleCloseClick={closeActiveModal}
        handleLoginClick={handleLoginClick}
      />
      <CustomizeCardModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
        handleCustomizeCardClick={handleCustomizeCardClick}
      />
      <ConfirmationModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
