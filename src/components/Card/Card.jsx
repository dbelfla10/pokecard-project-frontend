import React, { useState, useRef } from "react";
import { toPng, toSvg } from "html-to-image";
// import html2canvas from "html2canvas";

import "./Card.css";
// import charizard from "../../assets/charizard.png";
import hpIcon from "../../assets/hp-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

function Card({
  card,
  color,
  handleDeleteCard,
  hideDeleteButton,
  hideDownloadButton,
}) {
  const cardRef = useRef();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleDownload = () => {
    if (cardRef.current && isImageLoaded) {
      toPng(cardRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `${card.name}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Failed to download image", err);
        });
    }
  };

  return (
    <div className="card" ref={cardRef}>
      <div
        className="card__container"
        style={{
          backgroundColor: color ? color : card.color ? card.color : "white",
        }}
      >
        <div className="card__xp-circle">
          <p className="card__xp-number">{card.base_experience}</p>
          <p className="card__xp">xp</p>
        </div>
        <p className="card__hp">
          {card.stats && card.stats[0] ? card.stats[0].base_stat : 0} HP{" "}
          <img className="card__hp-icon" src={hpIcon} alt="hp icon" />
        </p>
        <img
          className="card__image"
          crossOrigin="anonymous"
          onLoad={() => setIsImageLoaded(true)}
          src={
            card.sprites &&
            card.sprites.other &&
            card.sprites.other["official-artwork"] &&
            card.sprites.other["official-artwork"].front_default
              ? card.sprites.other["official-artwork"].front_default
              : ""
          }
          alt="pokemon-img"
        />
        <div className="card__title-container">
          <h2 className="card__title">
            {card.name ? card.name[0].toUpperCase() + card.name.slice(1) : ""}
          </h2>
        </div>
        <div className="card__stats">
          <div className="card__stat">
            <p className="card__stat-number">
              {card.stats && card.stats[1] ? card.stats[1].base_stat : 0}
            </p>
            <p className="card__stat-tla">ATK</p>
          </div>
          <div className="card__stat">
            <p className="card__stat-number">
              {card.stats && card.stats[2] ? card.stats[2].base_stat : 0}
            </p>
            <p className="card__stat-tla">DEF</p>
          </div>
          <div className="card__stat">
            <p className="card__stat-number">
              {card.stats && card.stats[5] ? card.stats[5].base_stat : 0}
            </p>
            <p className="card__stat-tla">VEL</p>
          </div>
        </div>
        <div className="card__poke-type-container">
          <p className="card__poke-type">
            {card.types && card.types[0].type.name
              ? card.types[0].type.name.toUpperCase()
              : ""}
          </p>
        </div>
        {!hideDeleteButton && (
          <button
            className="card__delete-btn"
            type="button"
            onClick={() => handleDeleteCard(card.id)}
          >
            <img
              className="card__delete-icon"
              src={deleteIcon}
              alt="delete icon"
            />
          </button>
        )}
        {!hideDownloadButton && (
          <button
            className="card__download-btn"
            type="button"
            onClick={handleDownload}
            disabled={!isImageLoaded}
          >
            <img
              className="card__download-icon"
              src={downloadIcon}
              alt="download icon"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
