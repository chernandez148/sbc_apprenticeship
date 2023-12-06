import React, { useState } from "react";
import Card from "../../components/Card/Card";
import training from "../../assets/1-on-1.png";
import certified from "../../assets/certified.jpg";
import financialAid from "../../assets/financial-aid.jpg";
import cbbc from "../../assets/cbbc.png";
import HighlightsInfo from "../../components/HighlightsInfo/HighlightsInfo";
import "./styles.css";

function Highlights() {
  const [cardIndex, setCardIndex] = useState(null);

  const highlights = [
    {
      title: "1-on-1 Training",
      image: training,
      desc: "Elevate your skills with our 1-on-1 training at the San Bernardino Cuts Barbering and Cosmetology Institute.",
      first_paragraph:
        "Elevate your skills with our personalized 1-on-1 training programs at the San Bernardino Cuts Barbering and Cosmetology Institute. Our comprehensive courses are designed to provide you with the knowledge, techniques, and hands-on experience needed to excel in the world of barbering and cosmetology. Whether you're a beginner looking to start a rewarding career or a seasoned professional seeking to enhance your expertise, our academy offers a supportive and immersive learning environment. Our expert instructors are dedicated to helping you master the art of barbering and cosmetology, and our state-of-the-art facilities provide the perfect setting for honing your skills. Join us and unlock your full potential in the exciting and dynamic beauty industry.",
      second_paragraph:
        "At the San Bernardino Cuts Barbering and Cosmetology Institute, we are committed to shaping the next generation of skilled and confident beauty professionals. With a curriculum that covers the latest trends, techniques, and tools in the industry, you'll graduate well-prepared to meet the demands of the modern beauty world. Our small class sizes ensure that you receive personalized attention and guidance throughout your educational journey. Whether you dream of becoming a sought-after hairstylist, makeup artist, or skincare expert, our academy will empower you with the knowledge and practical skills to turn your passion into a successful and fulfilling career. Discover the endless possibilities in the beauty field with the San Bernardino Cuts Barbering and Cosmetology Institute.",
    },
    {
      title: "Get Certified While Training",
      image: certified,
      desc: "Our program not only hones your skills but also provides you with industry-recognized certification.",
      first_paragraph:
        "At San Bernardino Cuts Barbering and Cosmetology Institute, our commitment to your success goes beyond just honing your skills. We believe in equipping you with industry-recognized certifications that validate your expertise and open doors to a world of opportunities. Our comprehensive programs are meticulously designed to prepare you for certification exams, ensuring that you're well-prepared to excel in your chosen field.",
      second_paragraph:
        "As a graduate of San Bernardino Cuts, you'll have the advantage of holding certifications that are respected and sought after by employers and clients alike. These certifications not only serve as a testament to your proficiency but also boost your credibility in the competitive beauty industry. Whether you aspire to work in prestigious salons, establish your own beauty business, or pursue a specialized niche, our certification programs will set you on the path to success. Join us at San Bernardino Cuts Barbering and Cosmetology Institute and invest in a future filled with endless possibilities and professional recognition.",
    },
    {
      title: "Financial Aid Available",
      image: financialAid,
      desc: "We offer financial aid to eligible students, making quality education accessible.",
      first_paragraph: "",
      second_paragraph: "",
    },
    {
      title: "Certified Academy",
      image: cbbc,
      desc: "We take pride in being a certified academy recognized by the California Board of Barbering and Cosmetology.",
      first_paragraph:
        "At San Bernardino Cuts Barbering and Cosmetology Institute, we take immense pride in our status as a certified academy, officially recognized and accredited by the esteemed California Board of Barbering and Cosmetology. This recognition signifies our unwavering commitment to excellence in education and training within the beauty industry.",
      second_paragraph:
        "Being recognized by the California Board of Barbering and Cosmetology is not just a badge of honor; it's a testament to the quality and rigor of our programs. Our certification serves as a guarantee of the high standards we maintain and the comprehensive knowledge we impart to our students. This recognition also ensures that your training at San Bernardino Cuts aligns with the latest industry regulations and practices, giving you a competitive edge in your career. Join our institute to be part of a certified academy that values excellence, innovation, and the pursuit of beauty industry mastery.",
    },
  ];

  console.log(cardIndex);

  return (
    <div className="Highlights">
      <div className="highlights-wrapper">
        {highlights.map((highlight, index) => (
          <Card
            key={index}
            title={highlight.title}
            desc={highlight.desc}
            image={highlight.image}
            index={index}
            setCardIndex={setCardIndex}
          />
        ))}
      </div>
      {cardIndex !== null && (
        <div className="full-info">
          <HighlightsInfo
            image={highlights[cardIndex].image}
            title={highlights[cardIndex].title}
            first_paragraph={highlights[cardIndex].first_paragraph}
            second_paragraph={highlights[cardIndex].second_paragraph}
            setCardIndex={setCardIndex}
          />
        </div>
      )}
    </div>
  );
}

export default Highlights;
