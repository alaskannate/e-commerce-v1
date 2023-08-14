import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        HOME
      </Link>
      <ul>
        <CustomLink to="/contact">CONTACT</CustomLink>
        <CustomLink to="/login">LOGIN</CustomLink>
        <CustomLink to="/cart">CART</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

// Define prop types for CustomLink
CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
