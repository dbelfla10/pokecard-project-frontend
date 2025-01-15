import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import CustomizeCardModal from "../CustomizeCardModal/CustomizeCardModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ErrorModal from "../ErrorModal/ErrorModal";
import ChangeNameModal from "../ChangeNameModal/ChangeNameModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import { getPokemon } from "../../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setIsLoggedIn(true);
      setUser(JSON.parse(user));
    }
  }, []);

  const navigate = useNavigate();

  // Handlers for modal opening and closing

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const handleChangeNameClick = () => {
    setActiveModal("changeName");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // Functions for handling user actions

  const handleSearch = () => {
    const pokemonName = document
      .getElementById("pokemon-name")
      .value.toLowerCase();

    setIsLoading(true);

    getPokemon(pokemonName)
      .then((data) => {
        const resPokemon = data;
        setCurrentPokemon(resPokemon);

        setActiveModal("card");
      })
      .catch((err) => {
        setActiveModal("error");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCustomizeCard = (color) => {
    const updatedPokemon = { ...currentPokemon, color };
    setPokemonCards([updatedPokemon, ...pokemonCards]);
    setActiveModal("confirmation");
  };

  const handleSignUp = ({ name, email, password }) => {
    const newUser = { name, email, password };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    closeActiveModal();
    setIsLoggedIn(true);
    console.log(newUser);
  };

  const handleLogin = ({ email, password }) => {
    const newUser = { email, password };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    setIsLoggedIn(true);
    closeActiveModal();
    console.log(newUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setPokemonCards([]);
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleChangeName = ({ name }) => {
    const newUser = { ...user, name };
    setUser(newUser);
    closeActiveModal();
  };

  const handleAddCard = () => {
    navigate("/");
  };

  const handleDeleteCard = (id) => {
    setPokemonCards(pokemonCards.filter((card) => card.id !== id));
  };

  // Event Listeners

  useEffect(() => {
    const handleCloseEscape = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    const handleEnterLogin = (e) => {
      if (e.key === "enter" && activeModal === "login") {
        handleLogin();
      }
    };
    const handleEnterSignUp = (e) => {
      if (e.key === "enter" && activeModal === "signup") {
        handleSignUp();
      }
    };
    const handleEnterChangeName = (e) => {
      if (e.key === "enter" && activeModal === "changeName") {
        handleChangeName();
      }
    };

    document.addEventListener("keydown", handleCloseEscape);
    document.addEventListener("keydown", handleEnterLogin);
    document.addEventListener("keydown", handleEnterSignUp);
    document.addEventListener("keydown", handleEnterChangeName);

    return () => {
      document.removeEventListener("keydown", handleCloseEscape);
      document.removeEventListener("keydown", handleEnterLogin);
      document.removeEventListener("keydown", handleEnterSignUp);
      document.removeEventListener("keydown", handleEnterChangeName);
    };
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          isLoggedIn={isLoggedIn}
          handleSignupClick={handleSignupClick}
          handleLoginClick={handleLoginClick}
          user={user}
        />
        <div className="page__container">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleLoginClick={handleLoginClick}
                  isLoggedIn={isLoggedIn}
                  handleSearch={handleSearch}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    handleLogout={handleLogout}
                    pokemonCards={pokemonCards}
                    handleAddCard={handleAddCard}
                    handleDeleteCard={handleDeleteCard}
                    user={user}
                    handleChangeNameClick={handleChangeNameClick}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
        </div>
      </div>
      {isLoading && <Preloader />}

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
        handleSignUp={handleSignUp}
      />
      <CustomizeCardModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
        handleCustomizeCard={handleCustomizeCard}
        currentPokemon={currentPokemon}
      />
      <ConfirmationModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      />
      <ErrorModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      />
      <ChangeNameModal
        isOpen={activeModal === "changeName"}
        handleCloseClick={closeActiveModal}
        user={user}
        handleChangeName={handleChangeName}
      />
    </div>
  );
}

export default App;
