/* jshint esversion: 6 */

const chai = require("chai");
const expect = chai.expect;
const bubble = require("../bubbles.js");

describe("The Bubble function", () => {
  it("should only accept arrays", () => {
    expect(bubble.bubbleSort.bind(null,{5: "hello"})).to.throw(Error);
    expect(bubble.bubbleSort.bind(null, undefined)).to.throw(Error);
  });

  it("should sort arrays with various lengths", () => {
    expect(bubble.bubbleSort([4,9,2])).to.deep.equal([2,4,9]);
    expect(bubble.bubbleSort([64,2,9,15,5])).to.deep.equal([2,5,9,15,64]);
    expect(bubble.bubbleSort([61, 8, 54, 11, 2, 103, 47, 80])).to.deep.equal([2, 8, 11, 47, 54, 61, 80, 103]);
  });
});