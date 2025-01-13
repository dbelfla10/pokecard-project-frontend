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

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const handleSearchClick = () => {
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

  const handleCustomizeCardClick = (color) => {
    const updatedPokemon = { ...currentPokemon, color };
    setPokemonCards([updatedPokemon, ...pokemonCards]);
    setActiveModal("confirmation");
  };

  const closeActiveModal = () => {
    setActiveModal("");
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
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleAddCard = () => {
    navigate("/");
  };

  const handleDeleteCard = (id) => {
    setPokemonCards(pokemonCards.filter((card) => card.id !== id));
  };

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
                  handleSearchClick={handleSearchClick}
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
        handleCustomizeCardClick={handleCustomizeCardClick}
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
    </div>
  );
}

export default App;
