import axios from "axios";
import {UserProfile} from "../../services/UserProfileService";
import config from "../../config";

const api = config["backend-api"];

jest.mock("axios");

describe("UserProfileService", () => {
    describe("getByAlias()", () => {
        it("makes a GET request to the backend API", async () => {
            axios.get.mockResolvedValue({
                data: {
                    response: [{
                        role: {}
                    }]
                }
            });

            await UserProfile.getByAlias("ExampleAlias");

            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${api}/user/v1/profiles/?alias=ExampleAlias`);
        });

        it("returns the user profile object", async () => {
            axios.get.mockResolvedValue({
                data: {
                    response: [{
                        alias: "ExampleAlias",
                        avatarLink: "https://img.codesupport.dev/avtar.jpg",
                        biography: "This is my biography.",
                        countryId: "UK",
                        jobTitle: "Developer",
                        jobCompany: "MyCompany",
                        role: {
                            label: "Verified"
                        },
                        userAward: "something",
                        discordId: "12345",
                        discordUsername: "ExampleUsernameDC",
                        githubUsername: "ExampleUsernameGH"
                    }]
                }
            });

            const profile = await UserProfile.getByAlias("ExampleAlias");

            expect(profile.alias).toEqual("ExampleAlias");
            expect(profile.avatar).toEqual("https://img.codesupport.dev/avtar.jpg");
            expect(profile.bio).toEqual("This is my biography.");
            expect(profile.country).toEqual("UK");
            expect(profile.job.title).toEqual("Developer");
            expect(profile.job.company).toEqual("MyCompany");
            expect(profile.roles).toEqual(["Verified"]);
            expect(profile.connected_accounts.discord.id).toEqual("12345");
            expect(profile.connected_accounts.discord.username).toEqual("ExampleUsernameDC");
            expect(profile.connected_accounts.github.username).toEqual("ExampleUsernameGH");
        });
    });
});