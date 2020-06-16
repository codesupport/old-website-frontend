import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Navigation() {
    return (
        <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav nav-logo">
                    <Link to="/">
                        <img
                            className="uk-navbar-item uk-logo"
                            alt="CodeSupport Logo"
                            src={logo}
                            draggable="false"
                        />
                    </Link>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/resources">
                            Resources
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;