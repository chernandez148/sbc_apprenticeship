import React from "react";
import "./styles.css";

function Card({
  logo,
  image,
  alt,
  title,
  desc,
  index,
  setCardIndex,
  backgroundImage,
}) {
  const handleIndex = (index) => {
    setCardIndex(index);
  };

  return (
    <div
      className="card"
      style={index > -1 ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="icon">
        {logo ? (
          <img src={logo} alt={alt} width="100px" />
        ) : (
          <img src={image} alt={alt} width="100px" />
        )}
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{desc}</p>
        <a onClick={() => handleIndex(index)}>Learn More</a>
      </div>
    </div>
  );
}

export default Card;
