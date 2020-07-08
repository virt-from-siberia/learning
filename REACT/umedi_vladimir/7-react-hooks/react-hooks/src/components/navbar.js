import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <div className="navbar-brand">Github Поиск</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          Информация
        </NavLink>
      </li>
    </ul>
  </nav>
);
