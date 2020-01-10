import React, {Component} from "react";
import {Link} from "react-router-dom";

import config from "../../config";

import SignUpForm from "../organisms/SignUpForm";
import ModalContainer from "../templates/ModalContainer";

import "../../css/molecules/navigation.css";

class Navigation extends Component {
    state = {
        showModal: false,
        loggedIn: false
    };

    toggleLoginModal = () => {
        const {showModal} = this.state;

        this.setState({
            showModal: !showModal
        });
    };

    render() {
        const {showModal, loggedIn} = this.state;

        return (
            <>
                {showModal ? <ModalContainer> <SignUpForm/> </ModalContainer> : ""}
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
                        <li className="login" onClick={this.toggleLoginModal}>
                            {loggedIn ? "Log Out" : "Log In"}
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navigation;