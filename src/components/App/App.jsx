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
        />
        <div className="page__container">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleLoginClick={handleLoginClick}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile />
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
      />
      <SignUpModal
        isOpen={activeModal === "signup"}
        handleCloseClick={closeActiveModal}
        handleLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default App;
