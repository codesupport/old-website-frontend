import React, {Component} from "react";

import "../../css/molecules/labelwithinput.css";

class LabelWithInput extends Component {
    state = {
        errors: {}
    };

    validate(event, pattern) {
        const {name, value} = event.target;

        if (name === "password_confirmation") {
            const password = document.querySelector("input[name=password]");

            if (password.value !== value) {
                this.setState({
                    [name]: true
                });
            }
        }

        this.setState({
            errors: {
                [name]: !value.match(pattern)
            }
        });
    }

    render() {
        const {title, description, input} = this.props;
        const {name, type, placeholder, pattern, errorMessage, required} = input;
        const {errors} = this.state;

        return (
            <label className="with-input">
                {title}
                {description ?
                    <span className="label-description">
                            {description}
                        </span>
                    : ""}
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder || ""}
                    pattern={pattern || ""}
                    required={required || false}
                    onChange={(event) => {
                        this.validate(event, pattern);
                    }}
                />
                {errors[name] ? <span className="input-error">{errorMessage}</span> : ""}

            </label>
        );
    }
}

export default LabelWithInput;