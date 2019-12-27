import React from "react";

import "../../css/pages/index.css";

function Index() {
    return (
        <>
            <section id="intro">
                <div className="container">
                    <div className="content">
                        <h1>
                            Welcome to CodeSupport
                        </h1>
                        <p>
                            CodeSupport is a free online learning platform.
                        </p>

                        <button id="get-started" onClick={() => {
                            const articles = document.querySelector("#articles");
                            articles.scrollTo({
                                behavior: "smooth"
                            });
                        }}>
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
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