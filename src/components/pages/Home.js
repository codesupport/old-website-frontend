import React from "react";

import PageTemplate from "../templates/PageTemplate";
import IntroHero from "../molecules/IntroHero";

import Card from "../molecules/Card";
import CardGroup from "../organisms/CardGroup";

const openSourceProjects = [
    {
        title: "Discord Bot",
        language: "TypeScript",
        description: "The community Discord bot powered by Discord.js.",
        repository: "https://github.com/codesupport/discord-bot"
    },
    {
        title: "Website Frontend",
        language: "JavaScript",
        description: "The frontend of the CodeSupport website written using the React user interface library.",
        repository: "https://github.com/codesupport/website-frontend"
    },
    {
        title: "Website Backend",
        language: "Java",
        description: "CodeSupport's website backend API service which is powered by Spring Boot.",
        repository: "https://github.com/codesupport/website-backend"
    },
    {
        title: "Resources API",
        language: "JSON",
        description: "A simple repository containing various resources that the community recommends.",
        repository: "https://github.com/codesupport/resources-api"
    }
];

function Home() {
    return (
        <PageTemplate page="Home">
            <header>
                <IntroHero
                    title="Welcome to CodeSupport"
                    description="CodeSupport is a community dedicated to giving guidance about programming, as well as creating conversation with one another. No matter your skill level, you are welcome in this community."
                    button={{
                        target: "_blank",
                        href: "https://codesupport.dev/discord",
                        text: "Join The Community"
                    }}
                />
            </header>
            <main>
                <section id="open-source" className="container">
                    <h2 className="uk-text-center">
                        We Love Open Source
                    </h2>
                    <p className="uk-text-center">
                        At CodeSupport, we believe in building great projects together. Take a look at our open source projects below and start contributing!
                    </p>
                    <CardGroup size={2}>
                        {openSourceProjects.map((project) => (
                            <Card
                                key={project.title}
                                title={project.title}
                                tag={project.language}
                                tagClass={`lang-${project.language.toLowerCase()}`}
                                description={project.description}
                            >
                                <a
                                    className="uk-button uk-button-text uk-margin-right"
                                    target="_blank"
                                    href={project.repository}
                                    rel="noopener noreferrer"
                                >
                                    GitHub Repository
                                </a>
                            </Card>
                        ))}
                    </CardGroup>
                </section>
            </main>
        </PageTemplate>
    );
}

export default Home;