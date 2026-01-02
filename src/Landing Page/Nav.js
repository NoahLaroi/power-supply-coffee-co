import React from "react";
import "../Styles/nav.css";
function Nav () {
    return (
        <nav className="nav">
            <h1 className="nav--logo_text">Power Supply Coffee Co.</h1>
            <ul className="nav--items">
                <li>Our Story</li>
                <li>Menu</li>
                <li>Locations</li>
                <li>Shop</li>
            </ul>
        </nav>
    )
}
export default Nav;