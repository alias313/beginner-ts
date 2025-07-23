import { expect, it } from "vitest";

type Params = { first: string; last?: string };

export const getName = (params: Params) => {
    if (params.last) {
        return `${params.first} ${params.last}`;
    }
    return params.first;
};

it("Should work with just the first name", () => {
    const name = getName({
        first: "Matt",
    });

    expect(name).toEqual("Matt");
});
