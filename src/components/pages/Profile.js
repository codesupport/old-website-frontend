import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faSafari, faTwitter} from "@fortawesome/free-brands-svg-icons";

import config from "../../config";

import Card from "../molecules/Card";
import Tag from "../atoms/Tag";

import "../../css/pages/profile.css";

class Profile extends Component {
    state = {
        loading: true,
        user_profile: {},
        articles: [],
        showcase_projects: [],
        github_repositories: []
    };

    constructor(props) {
        super(props);

        this.alias = props.match.params.alias;
    }

    async getUserID(alias) {
        const api = config["backend-api"];

        // const request = await fetch(`${api}/user/v1/ids/${alias}`);
        // const data = await request.json();

        // return data;
    }

    async getProfile(alias) {
        const api = config["backend-api"];
        const id = 1; // temp
        // const id = await this.getUserID(alias);
        //
        // const request = await fetch(`${api}/user/v1/users/${id}`);
        // const data = await request.json();

        const data = {
            alias: "Lambo",
            avatar: `${config["firebase-bucket-url"]}/avatars%2F2.png?alt=media`,
            bio: "Founder of CodeSupport. This is even more text for my awesome biography.",
            job: {
                title: "Full Stack Developer",
                company: "Awesome Company"
            },
            roles: ["moderator", "mod-assistant", "verified", "supporter", "contributor"],
            connected_accounts: {
                discord: {
                    username: "LamboCreeper",
                    discriminator: 6510
                },
                github: {
                    username: "LamboCreeper"
                },
                twitter: {
                    username: "LamboCreeper"
                }
            }
        };


        this.setState({
            user_profile: data,
            loading: false
        });

        await this.getUsersArticles(id);
        await this.getShowcaseProjects(id);

        if (data.connected_accounts.github) {
            await this.getGitHubProjects(data.connected_accounts.github.username);
        }
    }

    async getUsersArticles(user) {
        const api = config["backend-api"];

        // const request = await fetch(`${api}/user/v1/articles/${user}`);
        // const data = await request.json();

        // temp data until endpoint is real
        const data = [
            {
                title: "Building CodeSupport.dev",
                description: "This website has been years in the making, well at least an idea." +
                    "I've always liked the idea of building something much bigger than a community," +
                    "but with everything being based around the community. Finally, my dream has come to life."
            }
        ];

        this.setState({
            articles: data
        });
    }

    async getShowcaseProjects(user) {
        const api = config["backend-api"];

        // const request = await fetch(`${api}/user/v1/showcases/${user}`);
        // const data = await request.json();

        // temp data until endpoint is real
        const data = [
            {
                name: "JSON Linter",
                description: "A simple program to lint JSON files.",
                language: "TypeScript"
            },
            {
                name: "Stratter",
                description: "A string formatting package for Node.js",
                language: "JavaScript"
            }
        ];

        this.setState({
            showcase_projects: data
        });
    }

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
        this.getProfile(this.alias);
    }

    render() {
        const {alias} = this;
        const {loading, user_profile, articles, showcase_projects, github_repositories} = this.state;

        return (
            <>
                {loading ? "Loading..." :
                    <>
                        <header id="profile-header" className="container">
                            <div className="content">
                                <Card>
                                    <section id="profile-information">
                                        <img
                                            id="profile-avatar"
                                            alt={`${user_profile.alias}'s Profile`}
                                            src={user_profile.avatar}
                                        />
                                        <section id="profile-details">
                                            <h1>
                                                {user_profile.alias}
                                            </h1>
                                            {user_profile.job &&
                                                <p id="profile-job">
                                                    {user_profile.job.title}
                                                    {user_profile.job.company && `, ${user_profile.job.company}`}
                                                </p>
                                            }
                                            <p id="profile-roles">
                                                {user_profile.roles && user_profile.roles.map((role) => (
                                                    <span className="profile-role" role-level={role}>
                                                        {role.toUpperCase()}
                                                    </span>
                                                ))}
                                            </p>
                                            <p>
                                                {user_profile.bio}
                                            </p>
                                            <section id="connected-accounts">
                                                <ul>
                                                    {user_profile.connected_accounts.discord &&
                                                        <li>
                                                            <FontAwesomeIcon
                                                                className="profile-account-icon"
                                                                icon={faDiscord}
                                                            />
                                                            {user_profile.connected_accounts.discord.username}
                                                            #{user_profile.connected_accounts.discord.discriminator}
                                                        </li>
                                                    }
                                                    {user_profile.connected_accounts.github &&
                                                        <li>
                                                            <FontAwesomeIcon
                                                                className="profile-account-icon"
                                                                icon={faGithub}
                                                            />
                                                            {user_profile.connected_accounts.github.username}
                                                        </li>
                                                    }
                                                    {user_profile.connected_accounts.twitter &&
                                                        <li>
                                                            <FontAwesomeIcon
                                                                className="profile-account-icon"
                                                                icon={faTwitter}
                                                            />
                                                            {user_profile.connected_accounts.twitter.username}
                                                        </li>
                                                    }
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                </Card>
                            </div>
                        </header>
                        <div className="container">
                            <div className="content" id="profile-area">
                                <main>
                                    <section id="profile-feed">
                                        <h2>
                                            Feed
                                        </h2>
                                        {articles.map((article) => (
                                            <Card
                                                title={article.title}
                                                description={article.description}
                                            >
                                                <button type="button">
                                                    Continue Reading
                                                </button>
                                            </Card>
                                        ))}
                                    </section>
                                </main>
                                <aside>
                                    <section id="showcase-projects">
                                        <h2>
                                            Showcase Projects
                                        </h2>
                                        {showcase_projects.length > 0 ? showcase_projects.map((post) => (
                                            <Card title={post.name} description={post.description}>
                                                <Tag text={post.language} />
                                            </Card>
                                        )) : `${user_profile.alias} has no showcased projects.`}
                                    </section>
                                    <section id="github-repositories">
                                        <h2>
                                            GitHub Repositories
                                        </h2>
                                        {github_repositories.length > 0 ? github_repositories.map((repo) => (
                                            <a className="github-repo-link" href={repo.url} target="_blank" key={repo.id}>
                                                <Card title={repo.name} description={repo.description}>
                                                    <Tag text={repo.language || "No Language"} />
                                                    <Tag text={`${repo.stars} Stars`} />
                                                    <Tag text={`${repo.watches} Watches`} />
                                                    <Tag text={`${repo.forks} Forks`} />
                                                </Card>
                                            </a>
                                        )) : user_profile.connected_accounts.github ?
                                            `${user_profile.alias} has no public repositories.` :
                                            `${user_profile.alias} has not connected their GitHub account.`
                                        }
                                    </section>
                                </aside>
                            </div>
                        </div>
                    </>
                }
            </>
        );
    }
}

export default Profile;