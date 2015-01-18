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
  describe("#hasInstructor", function () {
    it("should determine if an instructor is contained in an array", function () {
      expect(Iterators.hasInstructor(["bob", "joe", "jen"])).to.be.false;
      expect(Iterators.hasInstructor(["bob", "tim", "jen"])).to.be.true;
      expect(Iterators.hasInstructor(["Bob", "Tim", "Jen"])).to.be.true;
    });
  });
  describe("#allSamePlayer", function () {
    it("should determine if an array consists of only one player", function () {
      expect(Iterators.allSamePlayer(["X","X","X"])).to.be.true;
      expect(Iterators.allSamePlayer(["X","O","X"])).to.be.false;
      expect(Iterators.allSamePlayer(["O","O","O"])).to.be.true;
      expect(Iterators.allSamePlayer(["X","_","X"])).to.be.false;
      expect(Iterators.allSamePlayer(["_","_","_"])).to.be.false;
    });
  });
  describe("#remove", function () {
    it("should remove all instances of an item from an array", function () {
      expect(Iterators.remove([1,2,3], 2)).to.deep.equal([1,3]);
      expect(Iterators.remove([1,2,3], 4)).to.deep.equal([1,2,3]);
      expect(Iterators.remove([], 17)).to.deep.equal([]);
      expect(Iterators.remove([1,1,2,3], 1)).to.deep.equal([2,3]);
      expect(Iterators.remove([1,2,3,3,3,3,3], 3)).to.deep.equal([1,2]);
    });
  });
  describe("#devowel", function () {
    it("should remove the vowels from a string", function () {
      expect(Iterators.devowel("What's up?")).to.equal("Wht's p?");
      expect(Iterators.devowel("Howdy")).to.equal("Hwdy");
      expect(Iterators.devowel("Phone's ringing, dude.")).to.equal("Phn's rngng, dd.");
      expect(Iterators.devowel("abcdefghijklmnopqrstuvwxyz")).to.equal("bcdfghjklmnpqrstvwxyz");
      expect(Iterators.devowel("aeiou")).to.equal("");
    });
  });
});
