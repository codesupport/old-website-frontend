import React, {Component} from "react";

import {GitHub} from "../../services/GitHubService";

import Card from "./Card";
import Tag from "../atoms/Tag";

import "../../css/molecules/githubrepositoriesfeed.css";

class GitHubRepositoriesFeed extends Component {
    state = {
        github_repositories: []
    };

    async getGitHubProjects(username) {
        const data = await GitHub.getUsersRepos(username);

        this.setState({
            github_repositories: data.sort((a, b) => {
                return new Date(a.updated_at) > new Date(b.updated_at) ? -1 : 1;
            }).slice(0, 5)
        });
    }

    componentDidMount() {
        const {profile} = this.props;
        const account = profile.connected_accounts.github;

        if (account.username) {
            this.getGitHubProjects(account.username);
        }
    }

    render() {
        const {alias, connected_accounts} = this.props.profile;
        const account = connected_accounts.github;
        const {github_repositories} = this.state;

        return (
            <section id="github-repositories">
                <h2>
                    GitHub Repositories
                </h2>
                {github_repositories.length > 0 ? github_repositories.map((repo) => (
                    <a
                        className="github-repo-link"
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={repo.id}
                    >
                        <Card title={repo.name} description={repo.description}>
                            <Tag text={repo.language || "No Language"}/>
                            <Tag text={`${repo.stars} Stars`}/>
                            <Tag text={`${repo.watches} Watches`}/>
                            <Tag text={`${repo.forks} Forks`}/>
                        </Card>
                    </a>
                )) : account.username ?
                    <p>{alias} has no public repositories.</p> :
                    <p>{alias} has not connected their GitHub account.</p>
                }
            </section>
        );
    }
}

export default GitHubRepositoriesFeed;