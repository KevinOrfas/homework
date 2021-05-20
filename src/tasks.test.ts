import { countTheElements } from "./task1";
import { getBlockPolicyState, getBlockPolicyStateInit } from "./task2";
import { firstRecurringChar } from "./task3";

const fruit = [
  "apple",
  "pear",
  "lemon",
  "orange",
  "pineapple",
  "tomato",
  "lettuce",
  "mango",
  "apple",
  "pineapple",
  "lemon",
  "pear",
  "pear",
];

const fruitStore = {
  Apple: 2,
  Pear: 3,
  Lemon: 2,
  Orange: 1,
  Pineapple: 2,
  Tomato: 1,
  Lettuce: 1,
  Mango: 1,
};

const domains = {
  "one.com": { policy: "block" },
  "two.com": { policy: "none" },
  "three.com": { policy: "none" },
  "four.com": { policy: "block" },
};

const matrix = [
  [2, 5, 1, 2, 3, 5, 1, 2, 4],
  [2, 1, 1, 2, 3, 5, 1, 2, 4],
  [2, 3, 4, 5],
  [2, 5, 5, 2, 3, 5, 1, 2, 4],
];

describe("the functions", () => {
  it("counts how many of each element exists in the collection", () => {
    expect(countTheElements(fruit)).toEqual(fruitStore);
  });

  it("checks the domain's policy for the initial function", () => {
    expect(getBlockPolicyStateInit(domains)).toEqual({
      oneDomain: true,
      allDomains: false,
    });
  });

  it("checks the domain's policy for the refactored function", () => {
    expect(getBlockPolicyState(domains)).toEqual({
      oneDomain: true,
      allDomains: false,
    });
  });

  it("finds the first recurring character", () => {
    expect(firstRecurringChar(matrix)).toEqual([2, 1, undefined, 5]);
  });
});
