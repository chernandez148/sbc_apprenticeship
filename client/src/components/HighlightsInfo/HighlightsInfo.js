import React from "react";
import Button from "../Button/Button";
import "./styles.css";

function HighlightsInfo({
  image,
  title,
  first_paragraph,
  second_paragraph,
  setCardIndex,
  link,
  darkMode,
  setHighlightsModelBox,
}) {
  const closeModelBox = () => {
    setCardIndex(null);
    setHighlightsModelBox(false);
  };

  const hanldeApplyLink = () => {
    window.open(link);
  };

  return (
    <div
      className={`HighlightsInfo ${
        darkMode ? "dark-bg light-text" : "light-bg dark-text"
      }`}
    >
      <div className="highlights-info-wrapper">
        <img src={image} alt={title} width="200px" />
        <h4>{title}</h4>
        <p>{first_paragraph}</p>
        <p>{second_paragraph}</p>
        <div className="button-wrapper">
          {link ? (
            <Button
              text="Apply Now!"
              darkMode={darkMode}
              onClick={hanldeApplyLink}
            />
          ) : null}
          <Button text="Close" darkMode={darkMode} onClick={closeModelBox} />
        </div>
      </div>
    </div>
  );
}

export default HighlightsInfo;
