import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-center">
                <ul className="uk-navbar-nav">
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