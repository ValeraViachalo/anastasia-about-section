import React from "react";
import { Logo } from "../Logo/Logo";
import linksList from "@/data/links.json";

import "./Header.scss";
import { Nav } from "../Nav/Nav";
import AnchorLink from "../AnchorLink/AnchorLink";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />

      <div className="header__wrapper">
        <ul className="header__list-links">
          {linksList.map((currLink, index) => (
            <li key={`header_link_${index}`}>
              {currLink.isAnchor ? (
                <AnchorLink className="header__link" toSection={currLink.link}>
                  <span>{currLink.name}</span>
                </AnchorLink>
              ) : (
                <Link className="header__link" to={currLink.link}>
                  <span>{currLink.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="header__nav">
        <Nav />
      </div>
    </header>
  );
};
