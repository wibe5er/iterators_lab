var expect = require("chai").expect;
var Iterators = require("../src/iterators.js");

describe("Iterators", function () {
  describe("#useForEach", function () {
    it("should work", function () {
      expect(Iterators.useForEach([])).to.be.ok();
    });
  });
});
