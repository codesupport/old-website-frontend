import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";

import Card from "../molecules/Card";
import config from "../../config";

import "../../css/organisms/profileheader.css";

class ProfileHeader extends Component {
    state = {
        loaded: false,
        profile: {}
    };

    constructor(props) {
        super(props);

        this.alias = props.alias;
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
            loaded: true,
            profile: data
        });
    }

    componentDidMount() {
        this.getProfile(this.alias);
    }

    render() {
        const {loaded, profile} = this.state;

        return (
            <header id="profile-header" className="container">
                <div className="content">
                    <Card>
                        {loaded &&
                            <section id="profile-information">
                                <div id="profile-avatar-container">
                                    <img
                                        id="profile-avatar"
                                        alt={`${profile.alias}'s Profile`}
                                        src={profile.avatar}
                                    />
                                </div>
                                <section id="profile-details">
                                    <h1>
                                        {profile.alias}
                                    </h1>
                                    {profile.job &&
                                    <p id="profile-job">
                                        {profile.job.title}
                                        {profile.job.company && `, ${profile.job.company}`}
                                    </p>
                                    }
                                    <p id="profile-roles">
                                        {profile.roles && profile.roles.map((role) => (
                                            <span className="profile-role" role-level={role} key={role}>
                                                {role.toUpperCase()}
                                            </span>
                                        ))}
                                    </p>
                                    <p>
                                        {profile.bio}
                                    </p>
                                    <section id="connected-accounts">
                                        <ul>
                                            {profile.connected_accounts.discord &&
                                            <li>
                                                <FontAwesomeIcon
                                                    className="profile-account-icon"
                                                    icon={faDiscord}
                                                />
                                                {profile.connected_accounts.discord.username}
                                                #{profile.connected_accounts.discord.discriminator}
                                            </li>
                                            }
                                            {profile.connected_accounts.github &&
                                            <li>
                                                <FontAwesomeIcon
                                                    className="profile-account-icon"
                                                    icon={faGithub}
                                                />
                                                {profile.connected_accounts.github.username}
                                            </li>
                                            }
                                            {profile.connected_accounts.twitter &&
                                            <li>
                                                <FontAwesomeIcon
                                                    className="profile-account-icon"
                                                    icon={faTwitter}
                                                />
                                                {profile.connected_accounts.twitter.username}
                                            </li>
                                            }
                                        </ul>
                                    </section>
                                </section>
                            </section>
                        }
                    </Card>
                </div>
            </header>
        );
    }

}

export default ProfileHeader;