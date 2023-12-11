import React, { useState } from "react";
import training from "../../assets/1-on-1.png";
import trainingBG from "../../assets/1-on-1-bg.jpeg";
import certified from "../../assets/certified.jpg";
import financialAid from "../../assets/financial-aid.jpg";
import cbbc from "../../assets/cbbc.png";
import HighlightsInfo from "../../components/HighlightsInfo/HighlightsInfo";
import Button from "../../components/Button/Button";
import "./styles.css";

function Highlights({ darkMode }) {
  const [cardIndex, setCardIndex] = useState(null);

  const hanldeIndex = (index) => {
    setCardIndex(index)
  }

  const highlights = [
    {
      image: trainingBG,
      title: "1-on-1 Training",
      logo: training,
      desc: "Elevate your skills with our 1-on-1 training at the San Bernardino Cuts Barbering and Cosmetology Institute.",
      first_paragraph:
        "Elevate your skills with our personalized 1-on-1 training programs at the San Bernardino Cuts Barbering and Cosmetology Institute. Our comprehensive courses are designed to provide you with the knowledge, techniques, and hands-on experience needed to excel in the world of barbering and cosmetology. Whether you're a beginner looking to start a rewarding career or a seasoned professional seeking to enhance your expertise, our academy offers a supportive and immersive learning environment. Our expert instructors are dedicated to helping you master the art of barbering and cosmetology, and our state-of-the-art facilities provide the perfect setting for honing your skills. Join us and unlock your full potential in the exciting and dynamic beauty industry.",
      second_paragraph:
        "At the San Bernardino Cuts Barbering and Cosmetology Institute, we are committed to shaping the next generation of skilled and confident beauty professionals. With a curriculum that covers the latest trends, techniques, and tools in the industry, you'll graduate well-prepared to meet the demands of the modern beauty world. Our small class sizes ensure that you receive personalized attention and guidance throughout your educational journey. Whether you dream of becoming a sought-after hairstylist, makeup artist, or skincare expert, our academy will empower you with the knowledge and practical skills to turn your passion into a successful and fulfilling career. Discover the endless possibilities in the beauty field with the San Bernardino Cuts Barbering and Cosmetology Institute.",
    },
    {
      title: "Get Licensed While Training",
      logo: certified,
      desc: "Our program not only hones your skills but also provides you with an apprentice license by the Board of Barber and Cosmetology.",
      first_paragraph:
        "Join us and earn while you learn, appreciating the value of real-world experience in a supportive and thriving environment. We believe in nurturing talent and dedication, which is why our apprentices are compensated for their commitment to learning and growing with us.",
      second_paragraph:
        "Our program is a promise of professional development, financial stability, and a pathway to a flourishing career. Let your journey in the beauty industry begin here, with us, where every snip and style is a step towards your future success.",
    },
    {
      title: "Financial Options Available",
      logo: financialAid,
      desc: "We offer financial options to eligible students, making quality education accessible.",
      first_paragraph:
        "Our institute is pleased to announce a collaboration with FlexxBuy to offer innovative financial aid options to our community. FlexxBuy presents a unique, multi-lender customer financing solution that simplifies the application process, connecting businesses with over 35 lenders to ensure competitive offers for all credit situations. This inclusive approach means businesses receive payment within 24 hours, fostering a risk-free environment. The platform is designed to accommodate a range of financing needs, from a few hundred to $100,000, with interest rates starting at 5.9% and terms extending up to 144 months. Importantly, there are no long-term contracts or cancellation fees, allowing for greater flexibility.",
      second_paragraph:
        "This financial aid program is accessible to businesses of various sizes and stages, whether they are well-established or newly founded, and regardless of their operational setting (store, office, or home-based). By leveraging FlexxBuy's customer financing, businesses can significantly boost their sales, increase average ticket amounts, and enhance customer referrals. The initiative promises a customized, no-risk financial solution tailored to each business's unique needs, streamlining transactions directly at the point-of-sale and enabling customers to buy now and pay later​",
      link: "https://app.flexxbuy.com/san-bernardino-cuts-apprenticeship-of-barbering-and-cosmetology-academy/apply/"
    },
    {
      title: "Board-Approved",
      logo: cbbc,
      desc: "We take pride in being an accredited apprenticeship recognized by the California Board of Barbering and Cosmetology.",
      first_paragraph:
        "We are excited to announce that our institute has received board approval for our comprehensive Apprenticeship Program in Barbering and Cosmetology. This program, sanctioned by the Division of Apprenticeship Standards (DAS) and the Board of Barbering and Cosmetology, offers an exceptional opportunity for trainees to gain practical skills and knowledge in the fields of cosmetology, barbering, and electrology. Under this program, apprentices have the unique chance to earn a wage while they learn, studying under the expert guidance and supervision of Board-licensed trainers in an establishment that is also licensed by the Board.",
      second_paragraph:
        "The curriculum for this apprenticeship includes a Pre-Apprentice Training Class, a Health and Safety Course, and a range of essential materials such as the 'Milady Standard Barber' textbook and various instructor handouts. This structured approach ensures that apprentices are not only prepared for their licensing examination but also equipped with a deep understanding of the Barbering and Cosmetology Act and Regulations as set forth by the California Department of Consumer Affairs. The comprehensive nature of the program, combining theoretical learning with hands-on experience, is designed to cultivate proficient professionals ready to excel in the dynamic field of beauty and personal care​",
    },
  ];

  console.log(cardIndex);

  return (
    <div className="Highlights">
      <div className="highlight-wrapper">
        {highlights.map((highlight, index) => (
          <div className="card" >
            <img src={highlight.logo} alt={highlight.title} />
            <div className="description">
              <h4>{highlight.title}</h4>
              <p>{highlight.desc}</p>
            </div>
            <Button text="Learn More" darkMode={darkMode} onClick={() => hanldeIndex(index)} />
          </div>
        ))}
      </div>
      {cardIndex !== null && (
        <div className="full-info">
          <HighlightsInfo
            image={highlights[cardIndex].logo}
            title={highlights[cardIndex].title}
            first_paragraph={highlights[cardIndex].first_paragraph}
            second_paragraph={highlights[cardIndex].second_paragraph}
            link={highlights[cardIndex].link}
            setCardIndex={setCardIndex}
            darkMode={darkMode}
          />
        </div>
      )}
    </div>
  );
}

export default Highlights;
