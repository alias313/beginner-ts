import { expect, it } from "vitest";
/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    isAdmin: true,
};
const getUserId = (user) => {
    return user.id;
};
it("Should get the user id", () => {
    expect(getUserId(defaultUser)).toEqual(1);
});
