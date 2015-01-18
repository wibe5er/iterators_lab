var Iterators = {
  // tripler() should accept an array of numbers as a parameter and
  // return an array of the triples of those numbers. For example,
  // - tripler([1,2,3]) should return [3,6,9], and
  // - tripler([7,50,4]) should return [21,150,12].
  // Use `map` to accomplish this.
  tripler: function (numbers) {
  },

  // perfectSquares() should take an array of numbers as a parameter
  // and return an array that contains only the numbers from the
  // argument that are perfect squares. For example,
  // - perfectSquares([1,2,3]) should return [1], and
  // - perfectSquares([4,5,6]) should return [4], and
  // - perfectSquares([1,4,9]) should return [1,4,9].
  // Use `filter` to accomplish this.
  perfectSquares: function (numbers) {
  },

  // product() should accept an array of numbers as a parameter
  // and return the product of multiplying all those numbers together.
  // For example,
  // - product([1,2,3]) should return 6, and
  // - product([0,1,2]) should return 0, and
  // - product([100,200,300]) should return 6000000.
  // Use `reduce` to accomplish this.
  product: function (numbers) {
  },

  // hasInstructor() accepts an array of names and should return true
  // if the array contains the name of an instructor ("Tim", "Elie",
  // or "Alex"). Note: this should be case insensitive, meaning it
  // should return true if the list contains either "Alex" or "alex".
  // For example,
  // - hasInstructor(["bob", "joe", "jen"]) should return false,
  // - hasInstructor(["bob", "tim", "jen"]) should return true,
  // - hasInstructor(["Bob", "Tim", "Jen"]) should return true.
  // Use `some` to accomplish this.
  // Hint: see `toLowerCase` could be useful.
  hasInstructor: function (names) {
  },

  // allSamePlayer() should accept an array of players, represented by
  // X's and O's. The players array may also contain empty spots, which
  // are neither an X nor an O. The function should return true if the
  // array is comprised of all Xs or all Os, and false otherwise.
  // For example,
  // - allSamePlayer(["X","X","X"]) should return true,
  // - allSamePlayer(["X","O","X"]) should return false,
  // - allSamePlayer(["O","O","O"]) should return true,
  // - allSamePlayer(["X","_","X"]) should return false,
  // - allSamePlayer(["_","_","_"]) should return false.
  // Use `every` to accomplish this.
  allSamePlayer: function (players) {
  },

  // This is NOT an iterator method, but it's interesting
  // nonetheless. remove() takes an array and an item and removes all
  // instances of the item from the array. JavaScript provides an
  // `indexOf` method that finds the position of the item in an
  // array. It also provides a `splice` method that is able to remove
  // an item from an array. Combine these two to create remove(). For
  // example,
  // - remove([1,2,3], 2) should return [1,3],
  // - remove([1,2,3], 4) should return [1,2,3],
  // - remove([], 17) should return [],
  // - remove([1,1,2,3], 1) should return [2,3]
  remove: function (list, item) {
  }
};

module.exports = Iterators;
