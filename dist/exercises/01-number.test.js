import { expect, it } from "vitest";
export const addTwoNumbers = (a, b) => {
    return a + b;
};
it("Should add the two numbers together", () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
    expect(addTwoNumbers(-1, 1)).toBe(0);
    expect(addTwoNumbers(0, 0)).toBe(0);
    expect(addTwoNumbers(100, 200)).toBe(300);
    expect(addTwoNumbers(-50, -50)).toBe(-100);
});
