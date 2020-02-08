import React from "react";

import "../../css/pages/index.css";
import IntroHero from "../molecules/IntroHero";

function Index() {
    return (
        <>
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