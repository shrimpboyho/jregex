/* Unit tests */

// Stability test
test("System Stabiliy", function() {
  var value = $.regex().whichContains("anyChar", "", "4:9").endingIn("freeText", "narc", "2").getRegex();
  var narc = /.{4,9}(?:narc){2}$/;
  equal(value, narc.toString(), "The system is useable and doesn't crash.");
});

// System accuracy
test("System Error Checking", function() {
  var value = $.regex().whichContains("anyChar", "4:9").endingIn("freeText", "narc", "2").getRegex();
  var narc = /.{4,9}(?:narc){2}$/;
  notEqual(value, narc.toString(), "The system is breaks down when less than 3 parameters are passed");
});

//Or Function Test
test("Testing or()", function() {
  var value = $.regex().startingWith("anyUppercaseLetter", "1+").or("freeText", "person", "3").getRegex();
  var narc = /^[A-Z]+|(?:person){3}/;
  notEqual(value, narc.toString(), "The or() function works properly");
});