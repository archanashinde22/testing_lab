const {
  add,
  greeting,
  returnTwo,
  sub,
  multiply,
  div,
} = require("./functions.js");

describe("Test returnTwo", () => {
  test(" Should return number 2", () => {
    expect(returnTwo()).toBe(2);
  });
});

describe("Test greeting", () => {
  test("greeting should show Hello, name ", () => {
    
    expect(greeting("James")).toBe(`Hello, James.`);
    expect(greeting("Jill")).toBe(`Hello, Jill.`);
  });
});

describe("Test add function", () => {
  test("Should show addition two numbers ", () => {
    
    expect(add(1, 2,'a')).toBe(3);
    // expect(add(5,9)).toEqual(14);
  });
});

describe("Test sub Function", () => {
  test("Should show aubstraction of  two numbers ", () => {
    expect(sub(10, 2)).toBe(8);
  });
});

describe("Test multiply function", () => {
  test("Should show multiplication of  two numbers ", () => {
    expect(multiply(5, 2)).toBe(10);
  });
});

describe("Test divide function", () => {
  test("Should show division of  two numbers ", () => {
    expect(div(10, 2)).toBe(5);
  });
});
