import React from "react";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <div className="header__wrapper">
      <div className="companyName">Company name</div>
      <nav className="nav__container">
        <a className="" href="2">
          Features
        </a>
        <a className="" href="2">
          Enterprise
        </a>
        <a className="" href="2">
          Support
        </a>
        <a className="" href="2">
          Pricing
        </a>
        <Button variant="outline-primary">Sign up</Button>
      </nav>
    </div>
  );
}
