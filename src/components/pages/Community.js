import React from "react";
import IntroHero from "../molecules/IntroHero";
import CommunityShowcase from "../molecules/CommunityShowcase";

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