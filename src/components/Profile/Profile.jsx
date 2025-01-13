import "./Profile.css";
import profileText from "../../assets/Welcome-collection.png";
import Card from "../Card/Card";
import CardSection from "../CardSection/CardSection";

function Profile({
  handleLogout,
  pokemonCards,
  handleAddCard,
  handleDeleteCard,
  user,
}) {
  const userName = user && user.name ? user.name : "Username";

  return (
    <div className="profile">
      <section className="profile__user-colunm">
        <img
          className="profile__text-image"
          src={profileText}
          alt="Welcome-to-your-collection"
        ></img>
        <p className="profile__username">Master {userName}</p>
        <div className="profile__buttons">
          <button type="button" className="profile__change-name-btn">
            Change name
          </button>
          <button
            onClick={handleLogout}
            type="button"
            className="profile__logout-btn"
          >
            Log out
          </button>
        </div>
      </section>

      <CardSection
        pokemonCards={pokemonCards}
        handleAddCard={handleAddCard}
        handleDeleteCard={handleDeleteCard}
      />
    </div>
  );
}

export default Profile;
