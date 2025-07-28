import { expect, it } from "vitest";
export const getName = (params) => {
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
