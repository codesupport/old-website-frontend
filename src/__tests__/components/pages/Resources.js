import React from "react";
import {mount, shallow} from "enzyme";

import Resources from "../../../components/pages/Resources";
import ResourcesService from "../../../services/ResourcesService";

describe("Resources", () => {
    let component;

    beforeEach(() => component = shallow(<Resources location={{
        search: undefined
    }}/>));

    describe("getResources()", () => {
        it("gets resources from the ResourceService", () => {
            const spy = jest.spyOn(ResourcesService, "getResources");

            component = mount(<Resources location={{
                search: undefined
            }}/>);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("render()", () => {
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
                    name: "Bad CSS Tutorials",
                    key: "css-0"
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