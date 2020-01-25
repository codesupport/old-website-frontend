import React from "react";
import {mount} from "enzyme";

import GitHubRepositoriesFeed from "../../../components/molecules/GitHubRepositoriesFeed";

describe("GitHubRepositoriesFeed", () => {
    describe("render()", () => {
        let component;

        beforeAll(() => component = mount(<GitHubRepositoriesFeed user="ExampleUser" account={{
            username: "ExampleUser"
        }} />));

        it("states that the user has not connected their github account if none is supplied", () => {
            component = mount(<GitHubRepositoriesFeed user="ExampleUser" account={undefined} />);

            expect(component.children().find(".card")).toHaveLength(0);
            expect(component.children().find("p")).toHaveLength(1);
            expect(component.children().find("p").text()).toEqual("ExampleUser has not connected their GitHub account.");
        });

        it("states that the user has no public repositories if the array is empty",  () => {
            component.setState({
                github_repositories: []
            });

            expect(component.children().find(".card")).toHaveLength(0);
            expect(component.children().find("p")).toHaveLength(1);
            expect(component.children().find("p").text()).toEqual("ExampleUser has not connected their GitHub account.");
        });

        it("displays a card if the user has a public github repository",  () => {
            component.setState({
                github_repositories: [
                    {
                        id: "1",
                        name: "Example Repository",
                        updated_at: "2019-12-02T19:48:06Z",
                        description: "This is a repository description.",
                        url: "https://github.com/ExampleUser/ExampleRepository",
                        stars: 2,
                        watches: 1,
                        forks: 0,
                        language: "Python"
                    }
                ]
            });

            expect(component.children().find("a").prop("href")).toEqual("https://github.com/ExampleUser/ExampleRepository");

            const card = component.children().find(".card");

            expect(card).toHaveLength(1);
            expect(card.children().find("h2").text()).toEqual("Example Repository");
            expect(card.children().find("p").text()).toEqual("This is a repository description.");

            const tags = card.children().find(".tag");

            expect(tags).toHaveLength(4);
            expect(tags.children().filterWhere((node) => node.text() === "2 Stars")).toHaveLength(1);
            expect(tags.children().filterWhere((node) => node.text() === "1 Watches")).toHaveLength(1);
            expect(tags.children().filterWhere((node) => node.text() === "0 Forks")).toHaveLength(1);
            expect(tags.children().filterWhere((node) => node.text() === "Python")).toHaveLength(1);
        });
    });
});