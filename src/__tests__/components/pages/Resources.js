import React from "react";
import {mount, shallow} from "enzyme";
import {BrowserRouter} from "react-router-dom";
import {analytics} from "../../../services/FirebaseService";

import Resources from "../../../components/pages/Resources";
import ResourcesService from "../../../services/ResourcesService";

jest.mock("../../../services/FirebaseService");

describe("Resources Page", () => {
    let component;

    beforeEach(() => component = shallow(<Resources location={{
        search: undefined
    }}/>));

    describe("getResources()", () => {
        it("gets resources from the ResourceService", () => {
            const spy = jest.spyOn(ResourcesService, "getResources");

            component = mount(<BrowserRouter><Resources location={{
                search: undefined
            }}/></BrowserRouter>);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("componentDidMount()", () => {
        it("calls analytics.logEvent()", () => {
            expect(analytics.logEvent).toHaveBeenCalled();
            expect(analytics.logEvent).toHaveBeenCalledWith("resources_page_view");
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