import React from "react";
import toyota_logo from "../assets/Toyota-logo-removebg-preview.png";
import lexus_logo from "../assets/lexus-logo.png";

function About() {
  return (
    <div className="mx-4">
      <div className="flex">
        <h1 className="mx-4 font-semibold text-xl hover:font-extrabold group transition duration-300 ease-in-out">
          <span className="text-2xl bg-left-bottom bg-gradient-to-r from-blue-900 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About
          </span>
        </h1>
      </div>
      <div className="md:flex-row-reverse">
        <div className="text-wrap max-w-lg text-center mx-auto mt-4">
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
        <div className="flex space-x-3 justify-center">
          <img className="w-32" src={lexus_logo} alt="Lexus log" />
          <img className="w-32" src={toyota_logo} alt="Toyota log" />
        </div>
      </div>
    </div>
  );
}

export default About;
