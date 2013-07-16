/* jQuery extension function */

(function($) {

  $.regex = function() {

    var gre = new regexBuilder();
    return gre;

  }

}(jQuery));

/* The REGEX Builder object*/

function regexBuilder() {

  var regexExpression = "";

  /* The building stuff */

  this.whichContains = function(optionString, fieldString, numString) {

    if (optionString) {

      if (optionString == "anyChar") {
        regexExpression += ".";
      } else if (optionString == "anyLetter") {
        regexExpression += "[a-zA-Z]";
      } else if (optionString == "anyUppercaseLetter") {
        regexExpression += "[A-Z]";
      } else if (optionString == "anyLowercaseLetter") {
        regexExpression += "[a-z]";
      } else if (optionString == "freeText") {
        regexExpression += fieldString;
      } else if (optionString == "anyWhitespace") {
        regexExpression += "\\s";
      } else if (optionString == "anyDigit") {
        regexExpression += "\\d";
      }
    }

    if (numString) {

      var firstDigit;
      var secondDigit;

      /* Extracting digits */

      var i;

      for (i = 0; i < numString.length; i++) {

        if (numString[i] == ("+")) {

          firstDigit = numString.substring(0, i);
          console.log("First digit: " + firstDigit);
          break;

        }

        if (numString[i] == (":")) {

          firstDigit = numString.substring(0, i);
          secondDigit = numString.substring(i + 1, numString.length);
          console.log("First digit: " + firstDigit);
          console.log("Second digit: " + secondDigit);
          break;

        }
      }

      if (i == numString.length) { // An explicit digit was found
        var firstDigit = numString;
      }

      /* Explicit amount */

      if (secondDigit == "undefined") {
        regexExpression += "{" + firstDigit + "}";
      }


      /* Between */

      if (numString.indexOf(':') != -1) {
        regexExpression += "{" + firstDigit + "," + secondDigit + "}";
      }

      /* Or more */

      if (numString.indexOf('+') != -1) {
        regexExpression += "{" + firstDigit + ",}";
      }

    }

    return this;

  };

  this.thatStartsWith = function(optionString, fieldString, numString){
    return this;
  };

  this.followedBy = function(optionString, fieldString, numString){
    return this;
  };

  this.onlyIfFollowedBy = function(optionString, fieldString, numString){
    return this;
  };

  this.onlyIfNotFollowedBy = function(optionString, fieldString, numString){
    return this;
  };

  /* Supplies the user with the regex */

  this.getRegex = function() {
    return new RegExp(regexExpression);
  };

}