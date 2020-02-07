import React, {Component} from "react";

import ResourcesService from "../../services/ResourcesService";
import config from "../../config";

import Card from "../molecules/Card";
import CardGroup from "../organisms/CardGroup";
import ErrorTemplate from "../templates/ErrorTemplate";

import "../../css/pages/resources.css";
import sortArrayBy from "../../helpers/sortArrayBy";
import getQueries from "../../helpers/getQueries";

const ERROR_MESSAGE = "There was a problem loading the resources.";

class Resources extends Component {
    state = {
        resources: [],
        constantResources: [],
        filterResources: "Show All",
        filterPrice: "Show All",
        status: "Loading..."
    };

    async getResources() {
        try {
            const {category} = getQueries(this.props.location.search);

            if (category) {
                await this.setState({
                    filterResources: category
                });
            }

            let categories = [];
            let resources = [];

            if (this.state.filterResources !== "Show All") {
                categories = [this.state.filterResources];
            } else {
                categories = config["resource-categories"];
            }

            for (const category of categories) {
                const data = await ResourcesService.getResources(category);

                data.forEach((resource, i) => {
                    data[resource] = {
                        ...resource,
                        key: `${category}-${i}`
                    };
                });

                resources = resources.concat(data);
            }

            resources = sortArrayBy(resources, "name");

            if (["true", "false"].includes(this.state.filterPrice)) {
                resources = await resources.filter((resource) => resource.free === JSON.parse(this.state.filterPrice));
            }

            this.setState({resources, constantResources: resources});
        } catch (error) {
            this.setState({
                status: ERROR_MESSAGE
            });
        }
    }

    filterResources = async (event) => {
        await this.setState({
            filterResources: event.target.value
        });

        this.getResources();
    };

    filterPrice = async (event) => {
        await this.setState({
            filterPrice: event.target.value
        });

        this.getResources();
    };

    searchResources = (event) => {
        const query = event.target.value.toLowerCase();

        if (query === "") {
            this.setState({resources: this.state.constantResources});
        } else {
            let resourcesThatMatchQuery = [];

            for (const resource of this.state.constantResources) {
                if (resource.name.toLowerCase().includes(query)) {
                    resourcesThatMatchQuery.push(resource);
                }
            }

            if (!resourcesThatMatchQuery.length) {
                this.setState({status: "No matches found..."});
            }

            this.setState({
                status: null,
                resources: resourcesThatMatchQuery
            });
        }
    };

    componentDidMount() {
        this.getResources();
    }

    render() {
        const {resources, status} = this.state;

        if (status === ERROR_MESSAGE) {
            return <ErrorTemplate message={status} />;
        }

        return (
            <>
                <header id="intro">
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
                </header>
                <section id="filter-resources" role="search">
                    <div className="container">
                        <div className="content">
                            <label>
                                Search for a resource
                                <input id="search-resources" onChange={this.searchResources} type="text" placeholder="Type something..." />
                            </label>
                            <label>
                                Filter by category
                                <select id="filter-category" onChange={this.filterResources} value={this.state.filterResources}>
                                    <option value="Show All" key="all">Show All</option>
                                    {config["resource-categories"].map((category) => (
                                        <option value={category} key={category}>{category}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Filter by price
                                <select id="filter-price" onChange={this.filterPrice} value={this.state.filterPrice}>
                                    <option value="Show All" key="all">Show All</option>
                                    <option value="true" key="true">Free</option>
                                    <option value="false" key="false">Paid</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </section>
                <main id="resources">
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
                </main>
            </>
        );
    }
}

export default Resources;