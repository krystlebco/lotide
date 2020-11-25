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
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

}

const without = function (array, itemsToRemove) {
  let output = array;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < itemsToRemove; j++) { 
      if (array[i] === itemsToRemove[j]) {
        output.splice(i, 1)
      }
    }
  }
  return console.log(output)

}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);