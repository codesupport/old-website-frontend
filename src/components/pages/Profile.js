import React from "react";

import "../../css/pages/profile.css";
import ProfileFeed from "../molecules/ProfileFeed";
import ShowcaseProjectsFeed from "../molecules/ShowcaseProjectsFeed";
import GitHubRepositoriesFeed from "../molecules/GitHubRepositoriesFeed";
import ProfileHeader from "../organisms/ProfileHeader";

function Profile({match}) {
    const alias = match.params.alias;

    return (
        <>
            <ProfileHeader alias={alias} />
            <div className="container">
                <div className="content" id="profile-area">
                    <main>
                        <ProfileFeed user={alias} />
                    </main>
                    <aside>
                        <ShowcaseProjectsFeed user={alias} />
                        <GitHubRepositoriesFeed user={alias} account={{
                            username: "LamboCreeper"
                        }} />
                    </aside>
                </div>
            </div>
        </>
    );
}

export default Profile;