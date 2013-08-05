$('#unitTests').hide();

$('#testButton').click(function() {
  $('#unitTests').show('slow');
  $('#titleSlide').hide('slow');
});

$('#homeButton').click(function() {
  $('#unitTests').hide('slow');
  $('#titleSlide').show('slow');
});

var gre = $.regex().whichContains("anyChar", "", "4:9").endingIn("freeText", "narc", "2").getRegex();
console.log("Here is generated: " + gre);

var narc = /.{4,9}(?:narc){2}$/;
console.log("Correct Regex: " + narc.toString());