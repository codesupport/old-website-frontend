import React from "react";
import IntroHero from "../molecules/IntroHero";
import CommunityShowcase from "../molecules/CommunityShowcase";
import ColumnGroup from "../organisms/ColumnGroup";
import Column from "../molecules/Column";

import "../../css/pages/community.css";

function Community() {
    return (
        <>
            <IntroHero
                title="Community"
                description="It's what makes CodeSupport"
                button={{
                    text: "Join the Discord",
                    href: "https://discordapp.com/invite/XQ9C3sY",
                    target: "_blank"
                }}
            />
            <section id="why-join" className="container">
                <section className="content">
                    <h2>
                        Why Join The CodeSupport Community?
                    </h2>
                    <ColumnGroup>
                        <Column>
                            <h3>
                                Learn
                            </h3>
                            <p>
                                Learn new skills and tips from programmers of different skill sets. People are happy
                                to help you debug your program or teach you something entirely new.
                            </p>
                        </Column>
                        <Column>
                            <h3>
                                Network
                            </h3>
                            <p>
                                Network with like-minded individuals who are passionate about programming and technology.
                            </p>
                        </Column>
                        <Column>
                            <h3>
                                Create
                            </h3>
                            <p>
                                Create exciting projects together through our code-jams, hiring/looking section and in your own time.
                            </p>
                        </Column>
                    </ColumnGroup>
                </section>
            </section>
            <section id="community-showcase" className="container">
                <div className="content">
                    <h2>
                        Community Showcase
                    </h2>
                    <CommunityShowcase />
                </div>
            </section>
        </>
    );
}

export default Community;