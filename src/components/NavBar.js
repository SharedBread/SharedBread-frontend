import React from "react";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import { FaHome, FaMapMarkerAlt, FaRegListAlt } from "react-icons/fa";
import { MdAddShoppingCart, MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <Nav className="mr-auto navbar row justify-content-center">
        <Nav.Link>
          <Link to="/">
            <FaHome size="2em" />
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/Map">
            <FaMapMarkerAlt size="1.8em" />
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/NeededItems">
            <FaRegListAlt size="1.9em" />
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/ItemtoDonate">
            <MdAddShoppingCart size="2em" />
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/Profile">
            <MdAccountCircle size="2.2em" />
          </Link>
        </Nav.Link>
      </Nav>
  );
}

export default NavBar;
