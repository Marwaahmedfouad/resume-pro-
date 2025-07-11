import React, { useState } from "react";
// import profile from "../../assets/161944044.jpg";
import profile from "../../assets/161944044-removebg-preview.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import "./home.css";
function Home() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = `Innovative Senior .Net Developer and Code Reviewer with extensive expertise in WPF and DevExpress technologies. A passionate architect of elegant, scalable solutions using cutting-edge .NET technologies including MAUI. Committed to code excellence and best practices, with a proven track record of delivering high-impact enterprise applications that drive business success.`;

  function toggleDescription() {
    setShowFullDescription(!showFullDescription);
  }

  const truncatedDescription = showFullDescription
    ? description
    : `${description.slice(0, 87)}...`;
  return (
    <>
      {/* home in home.css section and grid in app.css style*/}
      <section className="home section homesection grid">
        {/* part2 */}
        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Mohamed Hammad . </span>
              <div className="home__title2">
                <p>- Senior .Net Developer </p>
                <p>- Code Reviewer </p>
                <p>- WPF</p>
                <p>- DevExpress </p>
                <p>- Maui </p>
              </div>
            </h1>

            <p className="home__description">{truncatedDescription}</p>

            {description.length > 1 && (
              <button onClick={toggleDescription} className="show-more-button">
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            )}

            {/* part2 */}
            <div className="social-media" style={{ paddingTop: "15px" }}>
              <div className="bg-icon">
                <a href="https://www.linkedin.com/in/mohammed-hammad-755805151/">
                  <FaLinkedinIn />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="https://github.com/MohamedHammadDeveloper">
                  <FaGithub />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="https://www.youtube.com/@HorusTechnicalSolutions">
                  {/* <FaTwitter /> */}
                  <FaYoutube />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="https://www.facebook.com/mohamed.hammad.838551">
                  <FaFacebookF />
                </a>
                <span></span>
              </div>
            </div>

            <Link to="/about" className="button">
              More Aboute Me{" "}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        {/*part1*/}
        <img src={profile} alt="" className="home__img" />

        {/* part3 */}
        <div className="color__block"></div>
      </section>
    </>
  );
}

export default Home;
