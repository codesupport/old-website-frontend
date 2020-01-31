import sortArrayBy from "../../helpers/sortArrayBy";

describe("sortArrayBy", () => {
    it("return an array sorted by a specified key", () => {
        const array = [{
            name: "Z Example"
        }, {
            name: "A Example"
        }];

        const sortedArray = sortArrayBy(array, "name");

        expect(sortedArray).toBeInstanceOf(Array);
        expect(sortedArray).toHaveLength(2);
        expect(sortedArray[0]).toEqual({
            name: "A Example"
        });
        expect(sortedArray[1]).toEqual({
            name: "Z Example"
        });
    });
});