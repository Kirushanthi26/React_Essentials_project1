import React from "react";
import headerImg from "../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

const genRendomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  const description = reactDescription[genRendomInt(2)];

  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
