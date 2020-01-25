import React, {Component} from "react";

import Card from "./Card";
import Tag from "../atoms/Tag";
import config from "../../config";

import "../../css/molecules/githubrepositoriesfeed.css";

class GitHubRepositoriesFeed extends Component {
    state = {
        github_repositories: []
    };

    async getGitHubProjects(user) {
        const api = config["github-api"];

        // const request = await fetch(`${api}/user/v1/github-repos/${user}`);
        // const data = await request.json();

        // temp data until endpoint is real
        const data = [{
            id: "1",
            name: "Advent of Code",
            updated_at: "2019-12-02T19:48:06Z",
            description: "My answers to the Advent of Code challenges.",
            url: "https://github.com/LamboCreeper/Advent-of-Code",
            stars: 2,
            watches: 1,
            forks: 0,
            language: "Python"
        }];

        this.setState({
            github_repositories: data.sort((a, b) => {
                return new Date(a.updated_at) > new Date(b.updated_at) ? -1 : 1
            }).slice(0, 5)
        });
    }

    componentDidMount() {
        const {account, user} = this.props;

        if (account) this.getGitHubProjects(user);
    }

    render() {
        const {user, account} = this.props;
        const {github_repositories} = this.state;
        return (
            <section id="github-repositories">
                <h2>
                    GitHub Repositories
                </h2>
                {github_repositories.length > 0 ? github_repositories.map((repo) => (
                    <a className="github-repo-link" href={repo.url} target="_blank" key={repo.id}>
                        <Card title={repo.name} description={repo.description}>
                            <Tag text={repo.language || "No Language"}/>
                            <Tag text={`${repo.stars} Stars`}/>
                            <Tag text={`${repo.watches} Watches`}/>
                            <Tag text={`${repo.forks} Forks`}/>
                        </Card>
                    </a>
                )) : account ?
                    <p>{user} has no public repositories.</p> :
                    <p>{user} has not connected their GitHub account.</p>
                }
            </section>
        );
    }
}

export default GitHubRepositoriesFeed;