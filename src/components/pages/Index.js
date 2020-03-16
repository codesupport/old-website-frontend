import React from "react";
import {Helmet} from "react-helmet";

import "../../css/pages/index.scss";
import IntroHero from "../molecules/IntroHero";

function Index() {
    return (
        <>
            <Helmet>
                <title>CodeSupport</title>
                <meta name="description" content="This is a temporary description." />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@codesupportdev" />
                <meta name="twitter:title" content="CodeSupport" />
                <meta name="twitter:description" content="This is a temporary description." />
            </Helmet>
            <IntroHero
                title="Welcome to CodeSupport"
                description="CodeSupport is a free online learning platform."
                button={{
                    href: "#",
                    text: "Get Started"
                }}
            />
            <section id="articles" className="container">
                <div className="content">
                    <div id="articles-header">
                        <h2>
                            Articles
                        </h2>
                        <p>
                            Content Written By CodeSupport Members
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;