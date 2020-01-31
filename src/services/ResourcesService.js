import axios from "axios";
import config from "../config";

class ResourcesService {
    api = config["resources-api"];

    async getResources(category) {
        try {
            const {data} = await axios.get(`${this.api}/${category.toLowerCase()}.json`);

            return data;
        } catch (error) {
            throw new Error(`There was an error getting the ${category} resources.`);
        }
    }
}

export default new ResourcesService();