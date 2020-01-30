import React, {Component} from "react";

import {UserProfile} from "../../services/UserProfileService";
import redirect from "../../helpers/redirect";

import ProfileFeed from "../molecules/ProfileFeed";
import ShowcaseProjectsFeed from "../molecules/ShowcaseProjectsFeed";
import GitHubRepositoriesFeed from "../molecules/GitHubRepositoriesFeed";
import ProfileHeader from "../organisms/ProfileHeader";

import "../../css/pages/profile.css";

class Profile extends Component {
    state = {
        loaded: false,
        profile: {}
    };

    async getProfile(alias) {
        try {
            const profile = await UserProfile.getByAlias(alias);

            this.setState({
                loaded: true,
                profile
            });
        } catch (error) {
            redirect("/404");
        }
    }

    componentDidMount() {
        this.getProfile(this.props.match.params.alias);
    }

    render() {
        const {loaded, profile} = this.state;

        if (loaded) {
            return (
                <>
                    <ProfileHeader profile={profile}/>
                    <div className="container">
                        <div className="content" id="profile-area">
                            <main>
                                <ProfileFeed profile={profile}/>
                            </main>
                            <aside>
                                <ShowcaseProjectsFeed alias={profile.alias}/>
                                <GitHubRepositoriesFeed profile={profile}/>
                            </aside>
                        </div>
                    </div>
                </>
            );
        } else {
            return <p>Loading..</p>;
        }
    }
}

export default Profile;