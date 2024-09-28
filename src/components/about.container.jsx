import React from "react";
import toyota_logo from "../assets/Toyota-logo-removebg-preview.png";
import lexus_logo from "../assets/lexus-logo.png";

function About() {
  return (
    <div className="mx-4">
      <h1>About</h1>
      <div className="about flex">
        <div className="flex">
        <img className="w-34"src={lexus_logo} alt="Lexus log" />
        <img className="w-34"src={toyota_logo} alt="Toyota log" />
        </div>
        <div>
          Sadaf Al Arabia, an Oman based Automotive spare parts Company for
          Japanese and Korean model vehicles, Specialized in Retail sales. We
          have over 13 years of experience in sales for Japanese Genuine Parts.
          We can cater Genuine Parts at Competitive Price and able to supply
          complete range of Brake Pads, Lubricants, Filters Mechanical and Body
          Parts. We have developed a reputation for quality products and
          competitive pricing. Delivering quality spare parts of leading
          Japanese and Korean car brands, we provide you the comfort with an
          exemplary customer service.
        </div>
      </div>
    </div>
  );
}

export default About;
