import React, {Component} from "react";

import Card from "./Card";
import config from "../../config";

class ProfileFeed extends Component {
    state = {
        articles: []
    };

    constructor(props) {
        super(props);

        this.user = props.user;
    }

    async getUsersArticles(user) {
        const api = config["backend-api"];

        // const request = await fetch(`${api}/user/v1/articles/${user}`);
        // const data = await request.json();

        // temp data until endpoint is real
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
        this.getUsersArticles(this.user);
    }

    render() {
        const {articles} = this.state;

        return (
            <section id="profile-feed">
                <h2>
                    Feed
                </h2>
                {articles.map((article) => (
                    <Card
                        key={article.id}
                        title={article.title}
                        description={article.description}
                    >
                        <button type="button">
                            Continue Reading
                        </button>
                    </Card>
                ))}
            </section>
        );
    }
}

export default ProfileFeed;