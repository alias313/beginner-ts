import {expect, it} from "vitest";

type AddTwoNumbersArgs = {
    first: number;
    second: number;
};

export const addTwoNumbers = (params: addTwoNumbersArgs) => {
    return params.first + params.second;
};

it("Should add the two numbers together", () => {
    expect(
        addTwoNumbers({
            first: 2,
            second: 4,
        }),
    ).toEqual(6);
});
