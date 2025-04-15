import { memo } from 'react';
import { FaFacebook, FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { fileContext } from "../../context/context";
import "./navbar.css";

const Navbar = memo(() => {
  const { images } = useContext(fileContext);
  const showSearch = false;

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {showSearch && (
          <Link to="/search" aria-label="Search">
            <FaSearch className="icon" />
          </Link>
        )}

        <Link to="/about" aria-label="About">
          <img
            className="logo"
            src={images.about}
            alt="About Logo"
            width={40}
            height={40}
            loading="lazy" // Changed to lazy for better performance
            decoding="async"
          />
        </Link>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="facebook-icon"
        >
          <FaFacebook className="icon" />
        </a>
      </div>
    </nav>
  );
});

export default Navbar;