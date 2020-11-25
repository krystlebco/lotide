const assertEqual = function(actual, expected) {
  const actual1 = actual;
  const expected1 = expected;

  if (actual1 === expected1) {
    console.log(`✅✅✅ Assertion Passed: ${actual1} === ${expected1}`);
  } else {
    console.log (`🛑🛑🛑 Assertion Failed: ${actual1} !== ${expected1}`);
  }
};


const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false