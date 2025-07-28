import { expect, it } from "vitest";
export const addTwoNumbers = (params) => {
    return params.first + params.second;
};
it("Should add the two numbers together", () => {
    expect(addTwoNumbers({
        first: 2,
        second: 4,
    })).toEqual(6);
});
