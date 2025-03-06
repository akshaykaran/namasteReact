import { sum } from "../sum";

test("testing the sum function", () => {
  const result = sum(2, 2);

  expect(result).toBe(4);
});
