import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./styles.css"; // Your CSS file

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsVisible, setItemsVisible] = useState(
    calculateItemsVisible(window.innerWidth)
  );
  const itemWidth = 100 / itemsVisible;
  const totalWidth = currentIndex * itemWidth;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setItemsVisible(calculateItemsVisible(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  function calculateItemsVisible(width) {
    if (width > 1000) return 4;
    if (width > 800) return 3;
    if (width > 600) return 2;
    return 1;
  }

  return (
    <div className="carousel">
      <div className="carousel-container">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${totalWidth}%)` }}
        >
          {children}
        </div>
      </div>
      <div className="direction-wrapper">
        <button onClick={goPrev} disabled={currentIndex === 0}>
          {<IoIosArrowBack />}
        </button>
        <button
          onClick={goNext}
          disabled={currentIndex >= children?.length - itemsVisible}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
