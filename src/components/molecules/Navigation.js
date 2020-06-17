import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import AuthenticationService from "../../services/AuthenticationService";

function Navigation() {
    const loggedIn = AuthenticationService.getAccessToken();

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
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav nav-logo">
                    <li>
                        <Link to={loggedIn ? "/profile" : "/login"}>
                            {loggedIn ? "Your Profile" : "Log In"}
                        </Link>
                    </li>
                    {loggedIn &&
                        <li>
                            <a onClick={AuthenticationService.signOut}>
                                Log Out
                            </a>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;