var expect = require("chai").expect;
var Iterators = require("../src/iterators.js");

describe("Iterators", function () {
  describe("#tripler", function () {
    it("should map over numbers and triple them", function () {
      expect(Iterators.tripler([1,2,3])).to.deep.equal([3,6,9]);
      expect(Iterators.tripler([0,0,0])).to.deep.equal([0,0,0]);
      expect(Iterators.tripler([-1,-2,-3])).to.deep.equal([-3,-6,-9]);
      expect(Iterators.tripler([100,99,98])).to.deep.equal([300,297,294]);
    });
  });
  describe("#perfectSquares", function () {
    it("should filter for perfect squares", function () {
      expect(Iterators.perfectSquares([1,2,3])).to.deep.equal([1]);
      expect(Iterators.perfectSquares([4,5,6])).to.deep.equal([4]);
      expect(Iterators.perfectSquares([1,4,9])).to.deep.equal([1,4,9]);
      expect(Iterators.perfectSquares([100])).to.deep.equal([100]);
      expect(Iterators.perfectSquares([])).to.deep.equal([]);
    });
  });
  describe("#product", function () {
    it("should return the product of numbers in an array", function () {
      expect(Iterators.product([1,2,3])).to.equal(6);
      expect(Iterators.product([0,1,2])).to.equal(0);
      expect(Iterators.product([100,200,300])).to.equal(6000000);
      expect(Iterators.product([-1,-2,-3])).to.equal(-6);
    });
  });
});
