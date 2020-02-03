import React from "react";
import {shallow} from "enzyme";
import LabelWithInput from "../../../components/molecules/LabelWithInput";

describe("LabelWithInput", () => {
    describe("render()", () => {
        it("displays an error if the state is true", () => {
            const component = shallow(<LabelWithInput input={{
                name: "ExampleComponent",
                type: "text",
                errorMessage: "There is an error."
            }} />);

            component.setState({
                errors: {
                    ExampleComponent: true
                }
            });

            expect(component.children().find(".input-error").text()).toEqual("There is an error.");
        });

        it("doesn't display an error if the state is not true", () => {
            const component = shallow(<LabelWithInput input={{
                name: "ExampleComponent",
                type: "text",
                errorMessage: "There is an error."
            }} />);

            expect(component.children().find(".input-error")).toHaveLength(0);
        });

        it("displays the default error message if one isn't given", () => {
            const component = shallow(<LabelWithInput input={{
                name: "ExampleComponent",
                type: "text"
            }} />);

            component.setState({
                errors: {
                    ExampleComponent: true
                }
            });

            expect(component.children().find(".input-error").text()).toEqual("This input is not valid.");
        });
    });
});