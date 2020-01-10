import React from "react";
import LabelWithInput from "../molecules/LabelWithInput";
import SubmitButton from "../atoms/SubmitButton";

import "../../css/organisms/signupform.css";

function SignUpForm({modalToggle}) {
    return (
        <article className="sign-up">
            <button className="close-modal" onClick={modalToggle}>
                X
            </button>
            <form>
                <header>
                    <h1>
                        Sign Up To CodeSupport
                    </h1>
                </header>
                <LabelWithInput
                    title="Display Name"
                    description="This is what you'll be known as on CodeSupport."
                    input={{
                        name: "alias",
                        type: "text",
                        placeholder: "richardh",
                        pattern: /^[A-Za-z]{3,10}$/,
                        errorMessage: "Must only contain letters and be between three and ten characters in length. ",
                        required: true
                    }}
                />
                <LabelWithInput
                    title="Email"
                    input={{
                        name: "email",
                        type: "email",
                        placeholder: "richard.hendricks@piedpiper.com",
                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                        errorMessage: "Must be a valid email address.",
                        required: true
                    }}
                />
                <LabelWithInput
                    title="Password"
                    input={{
                        name: "password",
                        type: "password",
                        placeholder: "••••••••••••••",
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                        errorMessage: "Must contain eight characters with at least one letter, one number and one special character.",
                        required: true
                    }}
                />
                <LabelWithInput
                    title="Password Confirmation"
                    input={{
                        name: "password_confirmation",
                        type: "password",
                        placeholder: "••••••••••••••",
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                        errorMessage: "Does not match the password you supplied.",
                        required: true
                    }}
                />
                <SubmitButton
                    text="Sign Up"
                    preventDefault={true}
                 />
            </form>
        </article>
    )
}

export default SignUpForm;