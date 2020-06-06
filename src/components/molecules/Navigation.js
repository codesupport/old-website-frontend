import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";

function Navigation() {
    return (
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-center">
                <ul className="uk-navbar-nav nav-logo">
                    <Link to="/">
                        <img
                            className="uk-navbar-item uk-logo"
                            alt="CodeSupport Logo"
                            src={`${config["firebase-bucket-url"]}/logo.png?alt=media`}
                            draggable="false"
                        />
                    </Link>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/community">
                            Community
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