import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import config from "../../config";

function Navigation() {
    return (
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left">
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
                        <Link to="/resources">
                            Resources
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="nav-social uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li>
                        <a href="https://codesupport.dev/discord">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/codesupportdev">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li className="uk-margin-right">
                        <a href="https://github.com/codesupport">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;