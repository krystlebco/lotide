const assertEqual = function(actual, expected) {
  const actual1 = actual;
  const expected1 = expected;

  if (actual1 === expected1) {
    console.log("✅✅✅ Assertion Passed: " + actual1 + " === " + expected1);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual1 + " !== " + expected1);
  }
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(3,1);
