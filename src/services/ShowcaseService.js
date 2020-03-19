import axios from "axios";
import config from "../config";

class ShowcaseService {
    api = `${config["backend-api"]}/showcase/v1/showcases`;

    async getAllPosts() {
        try {
            const {data} = await axios.get(this.api);

            if (data.status === "OK") {
                return data.response[0].map((post) => ({
                    id: post.id,
                    title: post.title,
                    description: post.description,
                    approved: post.approved,
                    user: {
                        id: post.user.id,
                        alias: post.user.alias
                    },
                    contributors: post.contributorList.contributors.map((contributor) => ({
                       id: contributor.user.id,
                       alias: contributor.user.alias
                    }))
                }));
            } else {
                return [];
            }
        } catch (error) {
            throw new Error(`There was an error getting all the showcase posts.`);
        }
    }
}

export default new ShowcaseService();