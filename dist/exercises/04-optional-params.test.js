import { expect, it } from "vitest";
export const getName = (first, last) => {
    if (last) {
        return `${first} ${last}`;
    }
    return first;
};
it("Should work with just the first name", () => {
    const name = getName("Matt");
    expect(name).toEqual("Matt");
});
