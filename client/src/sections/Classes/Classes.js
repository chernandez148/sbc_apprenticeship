import React, { useState, useRef, useEffect } from "react";
import mensHaircuts from "../../assets/mens-haircuts.jpg";
import trimmer from "../../assets/trimmers.png";
import womensHaircuts from "../../assets/womens-haircuts.jpg";
import hairDryer from "../../assets/hair-dryer.png";
import mensHairstyling from '../../assets/mens-hair-styling.jpg'
import scissorsIcon from '../../assets/scissors-icon.png'
import womensHairstyling from '../../assets/womens-hairstyling.jpg'
import curlingIron from '../../assets/curling-iron.png'
import shaving from '../../assets/shaving.png'
import razorBlade from '../../assets/razor-blade.png'
import chemicalStraightning from '../../assets/chemical-straightning.jpg'
import straightener from '../../assets/straightener.png'
import hairColoring from '../../assets/hair-coloring.jpg'
import hairDyeBrush from '../../assets/hair-dye-brush.png'
import manicure from '../../assets/manicure.jpg'
import nailPolish from '../../assets/nail-polish.png'
import facial from '../../assets/facial.jpg'
import facialCream from '../../assets/facial-cream.png'
import scissors from "../../assets/scissors.png";
import Card from "../../components/Card/Card";
import "./styles.css";

function Classes() {
  const [translateX, setTranslateX] = useState(0);
  const [firstCardWidth, setFirstCardWidth] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isLastCardVisible, setIsLastCardVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const classes = [
    {
      backgroundImage: mensHaircuts,
      img: mensHaircuts,
      title: "Men's Hair Cuts",
      logo: trimmer,
      alt: "haircuts",
    },
    {
      backgroundImage: womensHaircuts,
      img: womensHaircuts,
      title: "Women's Hair Cuts",
      logo: hairDryer,
      alt: "haircuts",
    },
    {
      backgroundImage: mensHairstyling,
      img: mensHairstyling,
      title: "Mens's Hair Styling",
      logo: scissorsIcon,
      alt: "styling",
    },
    {
      backgroundImage: womensHairstyling,
      img: womensHairstyling,
      title: "Women's Hair Styling",
      logo: curlingIron,
      alt: "styling",
    },
    {
      backgroundImage: shaving,
      img: shaving,
      title: "Men's Shave",
      logo: razorBlade,
      alt: "shaving",
    },
    {
      backgroundImage: chemicalStraightning,
      img: chemicalStraightning,
      title: "Permanent Waving & Chemical Straightening",
      logo: straightener,
      alt: "hair straightning",
    },
    {
      backgroundImage: hairColoring,
      img: hairColoring,
      title: "Hair Coloring & Bleaching",
      logo: hairDyeBrush,
      alt: "hair coloring an dbleaching",
    },
    {
      backgroundImage: manicure,
      img: manicure,
      title: "Manicuring & Pedicuring",
      logo: nailPolish,
      alt: "Manicuring and Pedicuring",
    },
    {
      backgroundImage: facial,
      img: facial,
      title: "Manual, Electrical & Chemical Facials",
      logo: facialCream,
      alt: "Manual, Electrical and Chemical Facials",
    },
  ];

  const firstCardRef = useRef();
  const lastCardRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (firstCardRef.current) {
        setFirstCardWidth(firstCardRef.current.offsetWidth);
        // Reset translateX to 0 when screen size changes
        setTranslateX(0);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null, // viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // You can adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      const lastCardEntry = entries[entries.length - 1];
      setIsLastCardVisible(lastCardEntry.isIntersecting);
    }, options);

    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    return () => {
      // Disconnect the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleNext = async () => {
    if (isButtonClicked) {
      return; // If the button is already clicked, exit the function
    }

    setIsButtonClicked(true); // Set button click to true

    // Wait for the observer to update isLastCardVisible
    await wait(100); // Adjust the delay time as needed

    if (!isLastCardVisible) {
      setTranslateX((prevTranslateX) => prevTranslateX - firstCardWidth - 16);
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    }

    setIsButtonClicked(false); // Reset button click state
  };

  const handlePrev = () => {
    setTranslateX((prevTranslateX) => prevTranslateX + firstCardWidth + 16);
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="Classes">
      <img className="scissors floating" src={scissors} alt="scissors" />
      <h4>HANDS ON TRAINING</h4>
      <h1>What You'll <span className="accent">Learn</span></h1>
      <div className="classes-wrapper">
        <div className="carousel">
          {classes.map((card, index) => (
            <div
              className="carousel-card"
              key={index}
              ref={(element) => {
                if (index === 0) {
                  firstCardRef.current = element;
                } else if (index === classes.length - 1) {
                  lastCardRef.current = element;
                }
              }}
              style={{
                transform: `translateX(${translateX}px)`,
              }}
            >
              <Card
                index={index}
                logo={card.logo}
                image={card.img}
                alt={card.alt}
                title={card.title}
                backgroundImage={card.backgroundImage}
              />
            </div>
          ))}
        </div>
        <div className="button-wrapper">
          <button disabled={translateX >= 0} onClick={handlePrev}>
            Prev
          </button>
          <button
            disabled={isLastCardVisible || isButtonClicked}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Classes;
