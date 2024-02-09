import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";

export const Card = ({ title, link, image }) => {
  return (
    <Link to={`/blogs/${link}`} className="card">
      <img src={image} alt={link} className="card__image" />
      <h2>{title}</h2>
    </Link>
  );
};
