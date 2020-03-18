import axios from "axios";
import config from "../config";

class ShowcaseService {
    api = `${config["backend-api"]}/showcase/v1/showcases`;

    async getAllPosts() {
        try {
            const {data} = await axios.get(this.api);

            if (data.status === "OK") {
                return data.response;
            } else {
                return [];
            }
        } catch (error) {
            throw new Error(`There was an error getting all the showcase posts.`);
        }
    }
}

export default new ShowcaseService();