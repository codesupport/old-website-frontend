import React, {Component} from "react";

import {UserProfile} from "../../services/UserProfileService";

import ProfileFeed from "../molecules/ProfileFeed";
import ShowcaseProjectsFeed from "../molecules/ShowcaseProjectsFeed";
import GitHubRepositoriesFeed from "../molecules/GitHubRepositoriesFeed";
import ProfileHeader from "../organisms/ProfileHeader";

import "../../css/pages/profile.css";
import ErrorTemplate from "../templates/ErrorTemplate";
import {analytics} from "../../services/FirebaseService";
import PageTemplate from "../templates/PageTemplate";

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
            this.setState({
                error
            });
        }
    }

    componentDidMount() {
        const {alias} = this.props.match.params;
        analytics.logEvent("profile_page_view", {
            alias
        });
        this.getProfile(alias);
    }

    render() {
        const {error, loaded, profile} = this.state;

        if (error) {
            return <ErrorTemplate message={error.message} />;
        }

        if (loaded) {
            return (
                <PageTemplate>
                    <ProfileHeader profile={profile}/>
                    <div className="container">
                        <div id="profile-area">
                            <main>
                                <ProfileFeed profile={profile}/>
                            </main>
                            <aside>
                                <ShowcaseProjectsFeed alias={profile.alias}/>
                                <GitHubRepositoriesFeed profile={profile}/>
                            </aside>
                        </div>
                    </div>
                </PageTemplate>
            );
        }

        return <p>Loading..</p>;
    }
}

export default Profile;