import React, {Component} from "react";
import {Redirect} from "react-router-dom";
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

    async getProfile(alias) {
        try {
            const api = config["backend-api"];
            const response = await fetch(`${api}/user/v1/profiles/?alias=${alias}`);

            if (response.ok) {
                const data = await response.json();
                const profile = data.response[0];

                this.setState({
                    loaded: true,
                    profile: {
                        alias: profile.alias,
                        avatar: profile.avatarLink,
                        bio: profile.biography,
                        country: profile.countryId,
                        job: {
                            title: profile.jobTitle || "Full Stack Developer",
                            company: profile.jobCompany || ""
                        },
                        roles: [profile.role.label],
                        awards: profile.userAward,
                        connected_accounts: {
                            discord: {
                                id: profile.discordId,
                                username: profile.discordUsername || "LamboCreeper",
                                discriminator: profile.discordDiscriminator || "6510"
                            },
                            github: {
                                username: profile.githubUsername || "LamboCreeper"
                            }
                        }
                    }
                });
            } else {
                window.location.href = "/404";
            }
        } catch (error) {
            alert("There was a problem getting this user's profile.");
            console.error(error);
        }
    }

    componentDidMount() {
        this.getProfile(this.props.alias);
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
                                            <span className="profile-role" role-level={role.toLowerCase()} key={role}>
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