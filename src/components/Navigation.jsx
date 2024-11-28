import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "/Beaumé´s_logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logoet" />
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/"> Forside </NavLink>
        </li>
        <li>
          <NavLink to="/products"> Produkter </NavLink>
        </li>
        <li>
          <NavLink to="/about"> Om os </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Kontakt </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
