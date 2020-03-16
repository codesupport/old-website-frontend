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
                {showModal ? <ModalContainer> <SignUpForm modalToggle={this.toggleLoginModal} /> </ModalContainer> : ""}
                <nav>
                    <div className="nav-container">
                        <ul className="nav-left">
                            <li>
                                <a href="/">
                                    <img
                                        className="logo"
                                        alt="CodeSupport Logo"
                                        src={`${config["firebase-bucket-url"]}/logo.png?alt=media`}
                                        draggable="false"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/community">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="/resources">
                                    Resources
                                </a>
                            </li>
                        </ul>
                        <ul className="nav-right">
                            <li onClick={this.toggleLoginModal}>
                                <a href="#">
                                    {!loggedIn ? "Sign Up" : ""}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navigation;