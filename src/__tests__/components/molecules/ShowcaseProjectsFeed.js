import React from "react";
import {mount} from "enzyme";

import ShowcaseProjectsFeed from "../../../components/molecules/ShowcaseProjectsFeed";

describe("ShowcaseProjectsFeed", () => {
    describe("render()", () => {
        let component;

        beforeAll(() => component = mount(<ShowcaseProjectsFeed alias="ExampleUser" />));

        it("states that user has no showcase posts if they have none", () => {
            component.setState({
                showcase_projects: []
            });

            expect(component.children().find(".card")).toHaveLength(0);
            expect(component.children().find("p")).toHaveLength(1);
            expect(component.children().find("p").text()).toEqual("ExampleUser has no showcased projects.");
        });

        it("displays a card if the user has a showcase post", () => {
            component.setState({
                showcase_projects: [
                    {
                        id: 1,
                        name: "Example Project",
                        description: "This is a project description.",
                        language: "TypeScript"
                    }
                ]
            });

            const card = component.children().find(".card");

            expect(card).toHaveLength(1);
            expect(card.children().find("h2").text()).toEqual("Example Project");
            expect(card.children().find("p").text()).toEqual("This is a project description.");
            expect(card.children().find(".tag").text()).toEqual("TypeScript");
        });
    });
});