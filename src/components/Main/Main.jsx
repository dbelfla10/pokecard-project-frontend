import { useState } from "react";

import "./Main.css";
import cardsImage from "../../assets/cards.png";
import text from "../../assets/Pokemon-Card-Generator-text.png";
import text2 from "../../assets/Pokemon-Card-Generator2.png";
import searchIcon from "../../assets/search-icon.svg";

function Main({ isLoggedIn, handleLoginClick, handleSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <main>
      <section className="hero">
        {isLoggedIn ? (
          <>
            <div className="hero__colunm-logged">
              <img
                className="hero__text-image-logged"
                src={text2}
                alt="Pokecard-generator-text"
              ></img>
              <h2 className="hero__text">Search for a Pokémon</h2>
              <div className="hero__searcher">
                <input
                  className="hero__imput"
                  type="text"
                  id="pokemon-name"
                  placeholder="Pokémon name"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button
                  className="hero__search-btn"
                  type="button"
                  onClick={handleSearch}
                  disabled={!inputValue.trim()}
                >
                  <img
                    className="hero__search-icon"
                    src={searchIcon}
                    alt="search icon"
                  />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="hero__column">
              <img
                className="hero__text-image"
                src={text}
                alt="Pokecard-generator-text"
              ></img>
              <h1 className="hero__title">
                Make a card of your favorite Pokémon
              </h1>
              <button
                className="hero__cta-btn"
                type="button"
                onClick={handleLoginClick}
              >
                Make 'Em All
              </button>
            </div>
            <img
              className="hero__cards-image"
              src={cardsImage}
              alt="cards-image"
            ></img>
          </>
        )}
      </section>
    </main>
  );
}

export default Main;
