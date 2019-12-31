import React, {Component} from "react";

import config from "../../config";

import Card from "../molecules/Card";
import CardGroup from "../organisms/CardGroup";

import "../../css/pages/resources.css";

class Resources extends Component {
    state = {
        resources: [],
        filterResources: "Show All",
        status: "Loading..."
    };

    async getResources() {
        try {
            let categories = [];

            if (this.state.filterResources !== "Show All") {
                categories = [this.state.filterResources];
            } else {
                categories = config["resource-categories"];
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

            resources = resources.sort((a, b) => {
                let x = a.name;
                let y = b.name;

                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });

            this.setState({resources});
        } catch (error) {
            console.error(error);

            this.setState({
                status: "There was an error loading the resources."
            });
        }
    }

    filterResources = async (event) => {
        await this.setState({
           filterResources: event.target.value
        });

        this.getResources();
    };

    searchResources = (event) => {
        const query = event.target.value;

        if (query === "") {
            this.getResources();
        } else {
            let resourcesThatMatchQuery = [];

            for (const resource of this.state.resources) {
                if (resource.name.includes(query)) {
                    resourcesThatMatchQuery.push(resource);
                }
            }

            if (!resourcesThatMatchQuery.length) {
                this.setState({status: "No matches found..."});
            }

            this.setState({status: undefined, resources: resourcesThatMatchQuery});
        }
    };

    componentDidMount() {
        this.getResources();
    }

    render() {
        const {resources, status} = this.state;

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
                <section id="filter-resources">
                    <div className="container">
                        <div className="content">
                            <div id="resource-search">
                                <label>
                                    Search for a resource
                                </label>
                                <input onChange={this.searchResources} type="text" placeholder="Type something..." />
                            </div>
                            <div id="resource-categories">
                                <label>
                                    Select a category
                                </label>
                                <select onChange={this.filterResources} value={this.state.filterResources}>
                                    <option value="Show All">Show All</option>
                                    {config["resource-categories"].map(category => <option value={category}>{category}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="resources">
                    <div className="container">
                        <div className="content">
                            {!resources.length ? status :
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