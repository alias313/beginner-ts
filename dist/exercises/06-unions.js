export const defaultUser = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    // @ts-expect-error
    role: "I_SHOULD_NOT_BE_ALLOWED",
};
