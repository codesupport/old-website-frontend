import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";

class LogInForm extends Component {
    state = {
        error: false,
        success: false,
        inputs: {
            email: "",
            password: ""
        }
    };

    inputData = ({ target: { name, value }}) => {
        this.setState({
            inputs: {
                ...this.state.inputs,
                [name]: value
            }
        });
    };

    signIn = async (event) => {
        const { email, password } = this.state.inputs;

        event.preventDefault();

        if ([email, password].includes("")) {
            this.setState({
                error: "You must specify an email address and password."
            });
        } else {
            try {
                await AuthenticationService.setAccessToken(email, password);

                this.setState({
                    success: true
                });
            } catch ({ message }) {
                this.setState({
                    error: message
                });
            }
        }
    };

    render() {
        const { success, error } = this.state;

        if (success) {
            return (
                <>
                    <Redirect push to="profile" />
                </>
            );
        }


        return (
            <>
                {error &&
                    <div className="uk-alert-danger uk-padding-small uk-margin-bottom">
                        {error}
                    </div>
                }
                <form onSubmit={this.signIn}>
                    <label>
                        Email
                        <input required
                               name="email"
                               type="email"
                               onChange={this.inputData}
                               className="uk-input uk-margin-bottom"
                        />
                    </label>
                    <label>
                        Password
                        <input required
                               name="password"
                               type="password"
                               onChange={this.inputData}
                               className="uk-input"
                        />
                    </label>
                    <button type="submit" className="uk-button uk-button-secondary uk-margin-top">
                        Log In
                    </button>
                </form>
            </>
        );
    }
}

export default LogInForm;