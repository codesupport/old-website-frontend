import React from "react";
import {mount} from "enzyme";
import ProfileFeed from "../../../components/molecules/ProfileFeed";

describe("ProfileFeed", () => {
    describe("render()", () => {
        let component;

        beforeAll(() => component = mount(<ProfileFeed user="ExampleUser" />));

        it("states that there is no content to display if the user has created no content", () => {
            component.setState({
                articles: []
            });

            expect(component.children().find(".card")).toHaveLength(0);
            expect(component.children().find("p")).toHaveLength(1);
            expect(component.children().find("p").text()).toEqual("There is no content to display in ExampleUser's feed.");
        });

        it("displays a card if the user has created content", () => {
            component.setState({
                articles: [
                    {
                        id: 1,
                        title: "Example Article",
                        description: "This is an article description."
                    }
                ]
            });

            const card = component.children().find(".card");

            expect(card).toHaveLength(1);
            expect(card.children().find("h2").text()).toEqual("Example Article");
            expect(card.children().find("p").text()).toEqual("This is an article description.");
        });
    });
});