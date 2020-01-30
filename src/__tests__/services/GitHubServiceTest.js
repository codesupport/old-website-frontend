import axios from "axios";
import {GitHub} from "../../services/GitHubService";
import config from "../../config";

const api = config["github-api"];

jest.mock("axios");

describe("GitHubService", () => {
    describe("getUsersRepos()", () => {
        it("makes a GET request to the GitHub API", async () => {
            axios.get.mockResolvedValue({
                data: []
            });

            await GitHub.getUsersRepos("ExampleUsername");

            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toBeCalledWith(`${api}/users/ExampleUsername/repos`);
        });

        it("returns an array of the user's repositories", async () => {
            axios.get.mockResolvedValue({
                data: [
                    {
                        id: 1,
                        name: "Example-Repo",
                        updated_at: "2020-01-30T19:43:00Z",
                        description: "This is an example repository.",
                        html_url: "https://github.com/ExampleUsername/Example-Repo",
                        stargazers_count: 1,
                        watchers_count: 2,
                        forks_count: 3,
                        language: "TypeScript"
                    }
                ]
            });

            const repos = await GitHub.getUsersRepos("ExampleUsername");

            expect(repos).toBeInstanceOf(Array);
            expect(repos).toHaveLength(1);
            expect(repos[0].id).toEqual(1);
            expect(repos[0].name).toEqual("Example Repo");
            expect(repos[0].updated_at).toEqual("2020-01-30T19:43:00Z");
            expect(repos[0].description).toEqual("This is an example repository.");
            expect(repos[0].url).toEqual("https://github.com/ExampleUsername/Example-Repo");
            expect(repos[0].stars).toEqual(1);
            expect(repos[0].watches).toEqual(2);
            expect(repos[0].forks).toEqual(3);
            expect(repos[0].language).toEqual("TypeScript");
        });
    });
});