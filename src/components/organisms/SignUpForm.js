import React from "react";
import LabelWithInput from "../molecules/LabelWithInput";
import SubmitButton from "../atoms/SubmitButton";

import "../../css/organisms/signupform.css";

function SignUpForm() {
    return (
        <article className="sign-up">
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
                        required: true
                    }}
                />
                <LabelWithInput
                    title="Email"
                    input={{
                        name: "email",
                        type: "email",
                        placeholder: "richard.hendricks@piedpiper.com",
                        required: true
                    }}
                />
                <LabelWithInput
                    title="Password"
                    input={{
                        name: "password",
                        type: "password",
                        placeholder: "••••••••••••••",
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