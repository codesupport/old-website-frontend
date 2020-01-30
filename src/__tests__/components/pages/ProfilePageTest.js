import React from "react";
import {mount} from "enzyme";
import Profile from "../../../components/pages/Profile";
import {UserProfile} from "../../../services/UserProfileService";

describe("ProfilePage", () => {
    describe("componentDidMount()", () => {
        it("calls UserProfile.getByAlias()", () => {
            jest.spyOn(UserProfile, "getByAlias");

            mount(<Profile match={{
                params: {
                    alias: "ExampleAlias"
                }
            }} />);

            expect(UserProfile.getByAlias).toBeCalledTimes(1);
            expect(UserProfile.getByAlias).toBeCalledWith("ExampleAlias");
        });
    });
});