import React, {Component} from "react";

import config from "../../config";

import Card from "../molecules/Card";
import CardGroup from "../organisms/CardGroup";

import "../../css/pages/resources.css";

class Resources extends Component {
    state = {
        resources: []
    };

    async getResources() {
        try {
            const categories = ["hosting", "javascript"];

            for (const category of categories) {
                const data = await fetch(`${config["resources-api"]}/${category}.json`);
                const resources = await data.json();

                resources.forEach((resource, i) => {
                    resources[resource] = {...resource, key: `${category}-${i}`};
                });

                this.setState({
                    resources: resources.concat(this.state.resources)
                });
            }
        } catch (error) {
            console.error(error);

            return [];
        }
    }

    componentDidMount() {
        this.setState({
            resources: this.getResources()
        });
    }

    render() {
        const {resources} = this.state;

        // A promise gets added to the end of resources which we don't want to display a card for so we remove it.
        delete resources[resources.length - 1];

        return (
            <>
                <section id="intro">
                    <div className="container">
                        <div className="content">
                            <h1>
                                Resources
                            </h1>
                            <p>
                                A collection of programming resources curated by the CodeSupport community.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="resources">
                    <div className="container">
                        <div className="content">
                            {!resources.length ? "Loading..." :
                                <CardGroup>
                                    {resources.map((resource) =>
                                        <Card
                                            key={resource.key}
                                            title={resource.affiliate_link ? `${resource.name}*` : resource.name}
                                            description={resource.description}
                                        >
                                            <a
                                                target="_blank"
                                                href={resource.url}
                                                rel="noopener noreferrer"
                                            >
                                                <button type="button">
                                                    Learn More
                                                </button>
                                            </a>
                                        </Card>
                                    )}
                                </CardGroup>
                            }
                            <p id="affiliate-disclaimer">
                                <b>Disclaimer:</b> Resources with a <code>*</code> are affiliate links.
                            </p>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Resources;