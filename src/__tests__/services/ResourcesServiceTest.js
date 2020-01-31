import axios from "axios";
import ResourcesService from "../../services/ResourcesService";
import config from "../../config";

const api = config["resources-api"];

jest.mock("axios");

describe("ResourcesService", () => {
    describe("getResources()", () => {
        it("makes a GET request to the Resources API", async () => {
            axios.get.mockResolvedValue({
                data: []
            });

            await ResourcesService.getResources("ExampleCategory");

            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${api}/examplecategory.json`);
        });

        it("returns an array of resources", async () => {
            axios.get.mockResolvedValue({
                data: [
                    {
                        "name": "ExampleResource",
                        "description": "This is an example resource.",
                        "url": "https://example.com/",
                        "free": false,
                        "tags": [
                            "exampletag"
                        ]
                    }
                ]
            });

            const resources = await ResourcesService.getResources("ExampleCategory");

            expect(resources).toBeInstanceOf(Array);
            expect(resources).toHaveLength(1);
            expect(resources[0].name).toEqual("ExampleResource");
            expect(resources[0].description).toEqual("This is an example resource.");
            expect(resources[0].url).toEqual("https://example.com/");
            expect(resources[0].free).toBeFalsy();
            expect(resources[0].tags).toBeInstanceOf(Array);
            expect(resources[0].tags[0]).toEqual("exampletag");
        });
    });
});