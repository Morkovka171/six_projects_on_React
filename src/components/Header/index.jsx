import React from "react";
import "./index.scss";

const Header = ({ items, currentItem, pickItem }) => {
  return (
    <ul className="header__list">
      {items.map((item, index) => (
        <li 
          className={`header__item ${index === currentItem && "active"}`}
          key={index}
          onClick={() => pickItem(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Header;
