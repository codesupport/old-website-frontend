import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";

import Card from "../molecules/Card";

import "../../css/organisms/profileheader.css";

function ProfileHeader({profile}) {
    return (
        <header id="profile-header" className="container">
            <div className="content">
                <Card>
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
                                    {profile.connected_accounts.discord.username &&
                                    <li>
                                        <FontAwesomeIcon
                                            className="profile-account-icon"
                                            icon={faDiscord}
                                        />
                                        {profile.connected_accounts.discord.username}
                                    </li>
                                    }
                                    {profile.connected_accounts.github.username &&
                                    <li>
                                        <FontAwesomeIcon
                                            className="profile-account-icon"
                                            icon={faGithub}
                                        />
                                        {profile.connected_accounts.github.username}
                                    </li>
                                    }
                                </ul>
                            </section>
                        </section>
                    </section>
                </Card>
            </div>
        </header>
    );
}

export default ProfileHeader;