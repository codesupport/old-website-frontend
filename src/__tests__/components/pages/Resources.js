import React from "react";
import {shallow} from "enzyme";

import Resources from "../../../components/pages/Resources";

describe("Resources", () => {
    describe("render()", () => {
        let component;

        beforeAll(() => component = shallow(<Resources />));

        it("updates the filterResources state on category change", () => {
            component.find("#filter-category").simulate("change", {
                target: {
                    value: "CSS"
                }
            });

            expect(component.state().filterResources).toEqual("CSS");
        });

        it("updates the filterPrice state on price change", () => {
            component.find("#filter-price").simulate("change", {
                target: {
                    value: "true"
                }
            });

            expect(component.state().filterPrice).toEqual("true");
        });

        it("shows no resources if the search query doesn't match any resources", () => {
            component.setState({
                resources: [{
                    name: "Bad CSS Tutorials"
                }]
            });
            component.find("#search-resources").simulate("change", {
                target: {
                    value: "Awesome CSS"
                }
            });

            expect(component.state().resources).toEqual([]);
            expect(!component.find(".card-group").children().exists());
        });
    });
});