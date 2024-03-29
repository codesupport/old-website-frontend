import React, {Component} from "react";

import Card from "./Card";
import Tag from "../atoms/Tag";

class ShowcaseProjectsFeed extends Component {
    state = {
        showcase_projects: []
    };

    async getShowcaseProjects(user) {
        // temp data until endpoint is real
        const data = [
            {
                id: 1,
                name: "JSON Linter",
                description: "A simple program to lint JSON files.",
                language: "TypeScript"
            },
            {
                id: 2,
                name: "Stratter",
                description: "A string formatting package for Node.js",
                language: "JavaScript"
            }
        ];

        this.setState({
            showcase_projects: data
        });
    }

    componentDidMount() {
        this.getShowcaseProjects(this.props.user);
    }

    render() {
        const {alias} = this.props;
        const {showcase_projects} = this.state;

        return (
            <section id="showcase-projects">
                <h2>
                    Showcase Projects
                </h2>
                {showcase_projects.length > 0 ? showcase_projects.map((post) => (
                    <Card title={post.name} description={post.description} key={post.id}>
                        <Tag text={post.language} />
                    </Card>
                )) : <p>{alias} has no showcased projects.</p>}
            </section>
        );
    }
}

export default ShowcaseProjectsFeed;