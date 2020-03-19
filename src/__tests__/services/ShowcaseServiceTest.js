import axios from "axios";
import ShowcaseService from "../../services/ShowcaseService";
import config from "../../config";

const api = config["backend-api"];

jest.mock("axios");

describe("ShowcaseService", () => {
    describe("getAllPosts()", () => {
        it("makes a GET request to the backend API", async () => {
            axios.get.mockResolvedValue({
                data: {
                    response: [[
                        {
                            title: ""
                        }
                    ]]
                }
            });

            await ShowcaseService.getAllPosts();

            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${api}/showcase/v1/showcases`);
        });

        it("returns an array of showcase posts", async () => {
            axios.get.mockResolvedValue({
                data: {
                    status: "OK",
                    response: [[
                        {
                            id: 1,
                            title: "Example Showcase Post",
                            description: "This is an example showcase post.",
                            approved: true,
                            user: {
                                id: 1,
                                alias: "ExampleUser",
                            },
                            contributorList: {
                                contributors: [
                                    {
                                        user: {
                                            id: 1,
                                            alias: "ExampleUser"
                                        }
                                    }
                                ]
                            }
                        }
                    ]]
                }
            });

            const posts = await ShowcaseService.getAllPosts();

            expect(posts).toBeInstanceOf(Array);
            expect(posts).toHaveLength(1);
            expect(posts[0].id).toEqual(1);
            expect(posts[0].title).toEqual("Example Showcase Post");
            expect(posts[0].description).toEqual("This is an example showcase post.");
            expect(posts[0].approved).toBeTruthy();
            expect(posts[0].user).toBeInstanceOf(Object);
            expect(posts[0].user.id).toEqual(1);
            expect(posts[0].user.alias).toEqual("ExampleUser");
            expect(posts[0].contributors).toBeInstanceOf(Array);
            expect(posts[0].contributors).toHaveLength(1);
            expect(posts[0].contributors[0].id).toEqual(1);
            expect(posts[0].contributors[0].alias).toEqual("ExampleUser");
        });
    });
});