import React, {Component} from "react";

import Card from "./Card";

class ProfileFeed extends Component {
    state = {
        articles: []
    };

    async getUsersArticles(user) {
        const data = [
            {
                id: 1,
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

    componentDidMount() {
        this.getUsersArticles(this.props.user);
    }

    render() {
        const {user} = this.props;
        const {articles} = this.state;

        return (
            <section id="profile-feed">
                <h2>
                    Feed
                </h2>
                {articles.length > 0 ? articles.map((article) => (
                    <Card
                        key={article.id}
                        title={article.title}
                        description={article.description}
                    >
                        <button type="button">
                            Continue Reading
                        </button>
                    </Card>
                )) : <p>There is no content to display in {user}'s feed.</p>}
            </section>
        );
    }
}

export default ProfileFeed;