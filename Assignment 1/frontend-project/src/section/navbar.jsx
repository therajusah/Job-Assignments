import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import mainLogo from "../assets/logo.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log("Clicked option:", option);
    setActiveOption(option);
  };

  return (
    <div className="navbar">
      <div className="navmain">
        <img className="logo" src={mainLogo} alt="Your Store Logo" />
        <div className="options-container">
          <div
            className={`option ${activeOption === "Solutions" ? "active" : ""}`}
            onClick={() => handleOptionClick("Solutions")}
          >
            Solutions
            <FontAwesomeIcon icon={faAngleDown} />
            {activeOption === "Solutions" && (
              <div className="sub-options">
               <ul>
                <li>Hi</li>
               </ul>
              </div>
            )}
          </div>
          <div
            className={`option ${activeOption === "Develop" ? "active" : ""}`}
            onClick={() => handleOptionClick("Develop")}
          >
            Develop
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="option">Examples</div>
          <div className="option">Pricing</div>
          <div
            className={`option ${activeOption === "Resources" ? "active" : ""}`}
            onClick={() => handleOptionClick("Resources")}
          >
            Resources
            <FontAwesomeIcon icon={faAngleDown} />
            {activeOption === "Resources" && (
              <div className="sub-options">
                {/* Add your sub-options for Resources here */}
                <p>Option 1</p>
                <p>Option 2</p>
                <p>Option 3</p>
              </div>
            )}
          </div>
        </div>
        <div className="nav-right-item">
          
          <button className="contact-us">Contact Us</button>
         
          <button className="menu-button" onClick={toggleNav}>
            {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
          {isOpen && (
            <div className="menu-items">
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar