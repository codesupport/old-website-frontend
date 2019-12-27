import React from "react";
import {Link} from "react-router-dom";

import "../../css/molecules/navigation.css";
import config from "../../config";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <img
                        className="logo"
                        alt="CodeSupport Logo"
                        src={`${config["firebase-bucket-url"]}/logo.png?alt=media`}
                        draggable="false"
                    />
                </li>
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
        </nav>
    );
}

export default Navigation;