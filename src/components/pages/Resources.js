import React, {Component} from "react";

import config from "../../config";

import Card from "../molecules/Card";
import CardGroup from "../organisms/CardGroup";

import "../../css/pages/resources.css";

class Resources extends Component {
    state = {
        resources: [],
        filterResources: []
    };

    async getResources() {
        try {
            let categories = [];

            if (this.state.filterResources.length) {
                categories = this.state.filterResources;
            } else {
                categories = ["hosting", "javascript"];
            }

            let resources = [];

            for (const category of categories) {
                const request = await fetch(`${config["resources-api"]}/${category.toLowerCase()}.json`);
                const data = await request.json();

                data.forEach((resource, i) => {
                    data[resource] = {
                        ...resource,
                        key: `${category}-${i}`
                    };
                });

                resources = resources.concat(data);
            }

            this.setState({resources});
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.getResources();
    }

    render() {
        const {resources} = this.state;

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