import React from "react";
import {mount} from "enzyme";
import Community from "../../../components/pages/Community";
import ShowcaseService from "../../../services/ShowcaseService";

describe("CommunityPage", () => {
    describe("componentDidMount()", () => {
        it("calls ShowcaseService.getAllPosts()", () => {
            jest.spyOn(ShowcaseService, "getAllPosts");

            mount(<Community />);

            expect(ShowcaseService.getAllPosts).toBeCalledTimes(1);
        });
    });
});