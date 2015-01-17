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
});
