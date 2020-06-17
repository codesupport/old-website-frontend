import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../templates/PageTemplate";
import Card from "../molecules/Card";
import LogInForm from "../organisms/LogInForm";
import "../../css/pages/loginpage.css";

function LoginPage() {
    return (
        <PageTemplate page="Log In">
            <section className="login-area">
                <Card title="Log In" description="Log into your CodeSupport account to start interacting with the community.">
                    <LogInForm />
                    <p className="login-no-account">
                        <Link to="/signup">Not got an account yet?</Link>
                    </p>
                </Card>
            </section>
        </PageTemplate>
    );
}

export default LoginPage;