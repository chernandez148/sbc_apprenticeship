import React from "react";
import Button from "../Button/Button";
import "./styles.css";

function HighlightsInfo({
  image,
  title,
  first_paragraph,
  second_paragraph,
  setCardIndex,
}) {
  const closeModelBox = () => {
    setCardIndex(null);
  };

  return (
    <div className="HighlightsInfo">
      <img src={image} alt={title} width="200px" />
      <h4>{title}</h4>
      <p>{first_paragraph}</p>
      <p>{second_paragraph}</p>
      <Button text="Close" onClick={closeModelBox} />
    </div>
  );
}

export default HighlightsInfo;
