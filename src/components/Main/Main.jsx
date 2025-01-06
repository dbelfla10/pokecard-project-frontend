import "./Main.css";
import cardsImage from "../../assets/cards.png";
import text from "../../assets/Pokemon-Card-Generator-text.png";

function Main({ isLoggedIn, handleLoginClick }) {
  return (
    <main>
      <section className="hero">
        {isLoggedIn ? (
          <>
            <div>Logged in!!!</div>
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
