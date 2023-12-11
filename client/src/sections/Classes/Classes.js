import React, { useState, useRef, useEffect } from "react";
import mensHaircuts from "../../assets/mens-haircuts.jpg";
import womensHaircuts from "../../assets/womens-haircuts.jpg";
import mensHairstyling from '../../assets/mens-hair-styling.jpg'
import womensHairstyling from '../../assets/womens-hairstyling.jpg'
import shaving from '../../assets/shaving.png'
import chemicalStraightning from '../../assets/chemical-straightning.jpg'
import hairColoring from '../../assets/hair-coloring.jpg'
import manicure from '../../assets/manicure.jpg'
import facial from '../../assets/facial.jpg'
import scissors from "../../assets/scissors.png";
import rotatingCircle from '../../assets/rotating-dots.png'
import darkRotatingCircle from '../../assets/dark-rotating-dots.png'
import Button from "../../components/Button/Button";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./styles.css";

function Classes({ darkMode }) {
  const [translateX, setTranslateX] = useState(0);
  const [firstCardWidth, setFirstCardWidth] = useState(0);
  const [isLastCardVisible, setIsLastCardVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [rotate, setRotate] = useState(false)
  const [cardIndex, setCardIndex] = useState(null)

  const classes = [
    {
      img: mensHaircuts,
      title: "Men's Hair Cuts",
      alt: "haircuts",
      desc: "Shall include, but is not limited to, the following techniques and procedures:",
      full_desc: "Shall include, but is not limited to, the following techniques and procedures: Use of scissors, razor (shaper), electrical clippers/trimmers, and thinning (tapering) shears for wet and dry cutting."
    },
    {
      img: womensHaircuts,
      title: "Women's Hair Cuts",
      alt: "haircuts",
      desc: "Shall include, but is not limited to, the following techniques and procedures:",
      full_desc: "Shall include, but is not limited to, the following techniques and procedures: Use of scissors, razor (shaper), electrical clippers/trimmers, and thinning (tapering) shears for wet and dry cutting."
    },
    {
      img: mensHairstyling,
      title: "Mens's Hair Styling",
      alt: "styling",
      desc: "Shall include, but is not limited to, the following techniques and procedures:",
      full_desc: "Shall include, but is not limited to, the following techniques and procedures: Hair analysis, shampooing, finger waving, pin curling, comb outs, straightening, waving, curling with hot combs and hot curling irons, and blower styling."
    },
    {
      img: womensHairstyling,
      title: "Women's Hair Styling",
      alt: "styling",
      desc: "Shall include, but is not limited to, the following techniques and procedures:",
      full_desc: "Shall include, but is not limited to, the following techniques and procedures: Hair analysis, shampooing, finger waving, pin curling, comb outs, straightening, waving, curling with hot combs and hot curling irons, and blower styling."
    },
    {
      img: shaving,
      title: "Men's Shave",
      alt: "shaving",
      desc: "Shall include, but is not limited to the following techniques and procedures:",
      full_desc: "Shall include, but is not limited to the following techniques and procedures: Preparing the client's hair for shaving, assessing the condition of the client's skin, performing shaving techniques, applying after-shave antiseptic following facial services, massaging the client's face and rolling cream massages."
    },
    {
      img: hairColoring,
      title: "Hair Coloring & Bleaching",
      alt: "hair coloring an dbleaching",
      desc: "Shall include, but is not limited to, the following techniques and procedures:",
      full_desc: "Shall include, but is not limited to, the following techniques and procedures (also including the use of semi-permanent, demi-permanent and temporary colors): Hair analysis, predisposition and strand tests, safety precautions, formula mixing, tinting, bleaching, high and low lights, and the use of dye removers."
    },
    {
      img: manicure,
      title: "Manicuring & Pedicuring",
      alt: "Manicuring and Pedicuring",
      desc: "Shall include, but are not limited to, the following issues:",
      full_desc: "Shall include, but are not limited to, the following issues: Water and oil manicure, including nail analysis, and hand/foot and arm/ankle massage."
    },
    {
      img: facial,
      title: "Manual, Electrical & Chemical Facials",
      alt: "Manual, Electrical and Chemical Facials",
      desc: "Shall include, but is not limited to the following techniques and procedures:",
      full_desc: "Shall include, but is not limited to the following techniques and procedures: Manual Facials including cleansing, scientific manipulations, and masks. Electrical Facials include the use of electrical modalities, dermal lights and electrical apparatus for facials and skin care purposes; however, machines capable of producing an electrical current shall not be used to stimulate so as to contract, or for the purpose of contracting, the muscles of the body or face. Chemical Facials include chemical skin peels, packs, masks and scrubs. Training shall emphasize that only the non-living, uppermost layers of facial skin, known as the epidermis, may be removed, and only for the purpose of beautification."
    },
    {
      img: chemicalStraightning,
      title: "Permanent Waving & Chemical Straightening",
      alt: "hair straightning",
      desc: "Shall Include, but is not limited to, the following techniques and procedures:",
      full_desc: "Shall Include, but is not limited to, the following techniques and procedures: Hair analysis, acid and alkaline permanent waving, chemical straightening including the use of sodium hydroxide and other base solutions."
    }
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
    }

    setIsButtonClicked(false); // Reset button click state
  };

  const handlePrev = () => {
    setTranslateX((prevTranslateX) => prevTranslateX + firstCardWidth + 16);
  };

  const handleIndexAndRotate = (index) => {
    // If the same card is clicked again or if another card is clicked, flip the card
    setCardIndex(index);
    setRotate((prev) => (index === cardIndex ? !prev : true));
  }

  const removeRotate = () => {
    // Set rotate to false to revert the card to its original state
    setRotate(false);
    // After some time (enough for the transition to complete), reset cardIndex to null
    setTimeout(() => {
      setCardIndex(null);
    }, 1000); // This duration should match your CSS transition time
  };


  console.log(cardIndex)

  return (
    <div className="Classes">
      {darkMode ? <img className='rotating rotating-circle' src={rotatingCircle} alt='rotating dots' /> : <img className='rotating rotating-circle' src={darkRotatingCircle} alt='rotating dots' />}
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
              <div
                className="card"
              >
                <div className="image-wrapper">
                  <img style={{ opacity: index === cardIndex ? "0" : "1" }} src={card.img} alt={card.alt} />
                </div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                <span onClick={() => handleIndexAndRotate(index)}><FaArrowAltCircleUp size={24} /></span>
                <div
                  className="full-desc"
                  style={{ height: index === cardIndex ? "100%" : "0" }}
                >
                  <p>{card.full_desc}</p>
                  <Button text="Back" onClick={removeRotate} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button-wrapper">
          <button className={`button ${darkMode ? "light-button" : "dark-button"}`} disabled={translateX >= 0} onClick={handlePrev}>
            Prev
          </button>
          <button
            className={`button ${darkMode ? "light-button" : "dark-button"}`}
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
