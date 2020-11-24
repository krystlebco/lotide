const assertEqual = function(actual, expected) {
  const actual1 = actual;
  const expected1 = expected;

  if (actual1 === expected1) {
    console.log(`✅✅✅ Assertion Passed: ${actual1} === ${expected1}`);
  } else {
    console.log (`🛑🛑🛑 Assertion Failed: ${actual1} !== ${expected1}`);
  }
};

const head = function(arr) {
  let first = arr[0];
  return first
}

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual(3,1);


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");