import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';
import { FaHome, FaMapMarkerAlt, FaRegListAlt } from 'react-icons/fa';
import { MdAddShoppingCart, MdAccountCircle } from 'react-icons/md';

function NavBar() {
    return (
        <>
                <Nav className="mr-auto navbar row justify-content-center">
                    <Nav.Link href="/"><FaHome size="2em" /></Nav.Link>
                    <Nav.Link href="/Map"><FaMapMarkerAlt size="1.8em"/></Nav.Link>
                    <Nav.Link href="/NeededItems"><FaRegListAlt size="1.9em" /></Nav.Link>
                    <Nav.Link href="/ItemtoDonate"><MdAddShoppingCart size="2em" /></Nav.Link>
                    <Nav.Link href="/Profile"><MdAccountCircle size="2.2em" /></Nav.Link>
                </Nav>
        </>
    );
}

export default NavBar;