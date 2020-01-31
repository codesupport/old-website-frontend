import axios from "axios";
import config from "../config";

class GitHubService {
    api = config["github-api"];

    async getUsersRepos(username) {
        try {
            const {data} = await axios.get(`${this.api}/users/${username}/repos`);

            return data.map((repo) => ({
                id: repo.id,
                name: repo.name.replace(/-/g, " "),
                updated_at: repo.updated_at,
                description: repo.description,
                url: repo.html_url,
                stars: repo.stargazers_count,
                watches: repo.watchers_count,
                forks: repo.forks_count,
                language: repo.language
            }));
        } catch (error) {
            throw new Error(`There was an error getting ${username}'s GitHub repositories.`);
        }
    }
}

export const GitHub = new GitHubService();