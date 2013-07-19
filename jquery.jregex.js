/* jQuery extension function */

(function($) {

  $.regex = function() {

    var gre = new regexBuilder();
    return gre;

  }
  
  /* The REGEX Builder object*/

  function regexBuilder() {
  
    var regexExpression = "";
  
    /* The main engine */
  
    function __scheme(optionString, fieldString, numString) {
  
      var exp = "";
  
      if (optionString) {
  
        if (optionString === "anyChar") {
          exp += ".";
        } else if (optionString === "anyLetter") {
          exp += "[a-zA-Z]";
        } else if (optionString === "anyUppercaseLetter") {
          exp += "[A-Z]";
        } else if (optionString === "anyLowercaseLetter") {
          exp += "[a-z]";
        } else if (optionString === "freeText") {
          exp += "(?:" + fieldString + ")";
        } else if (optionString === "anyWhitespace") {
          exp += "\\s";
        } else if (optionString === "anyDigit") {
          exp += "\\d";
        }
      }
  
      if (numString) {
  
        var firstDigit;
        var secondDigit;
  
        /* Extracting digits */
  
        var i;
  
        for (i = 0; i < numString.length; i++) {
  
          if (numString[i] === ("+")) {
  
            firstDigit = numString.substring(0, i);
            console.log("First digit: " + firstDigit);
            break;
  
          }
  
          if (numString[i] === (":")) {
  
            firstDigit = numString.substring(0, i);
            secondDigit = numString.substring(i + 1, numString.length);
            console.log("First digit: " + firstDigit);
            console.log("Second digit: " + secondDigit);
            break;
  
          }
        }
  
        if (i === numString.length) { // An explicit digit was found
          var firstDigit = numString;
        }
  
        /* Explicit amount */
  
        if ((numString.indexOf(":") === -1) && (numString.indexOf("+") === -1)) {
          exp += "{" + firstDigit + "}";
        }
  
  
        /* Between */
  
        if (numString.indexOf(':') !== -1) {
          exp += "{" + firstDigit + "," + secondDigit + "}";
        }
  
        /* Or more */
  
        if (numString.indexOf('+') !== -1) {
          exp += "{" + firstDigit + ",}";
        }
  
      }
      return exp;
    }
  
    /* The building stuff */
  
    this.whichContains = function(optionString, fieldString, numString) {
  
      regexExpression += __scheme(optionString, fieldString, numString);
  
      return this;
  
    };
  
    this.startingWith = function(optionString, fieldString, numString) {
  
      // Set up base regex
  
      regexExpression += "^";
  
      regexExpression += __scheme(optionString, fieldString, numString);
  
      return this;
    };
  
    this.or = function(optionString, fieldString, numString) {
  
      // Set up base regex
  
      regexExpression += "|";
  
      regexExpression += __scheme(optionString, fieldString, numString);
  
      return this;
    };
  
    this.followedBy = function(optionString, fieldString, numString) {
  
      regexExpression += __scheme(optionString, fieldString, numString);
  
      return this;
    };
  
    this.onlyIfFollowedBy = function(optionString, fieldString, numString) {
      // Set up base regex
  
      regexExpression += "(?=";
  
      regexExpression += __scheme(optionString, fieldString, numString);
  
      // Append last token
  
      regexExpression += ")";
  
      return this;
    };
  
    this.onlyIfNotFollowedBy = function(optionString, fieldString, numString) {
      // Set up base regex
  
      regexExpression += "(?!";
  
      regexExpression += __scheme(optionString, fieldString, numString);
  
      // Append last token
  
      regexExpression += ")";
  
      return this;
    };
  
    this.endingIn = function(optionString, fieldString, numString) {
  
      regexExpression += __scheme(optionString, fieldString, numString);
  
      // Add last token
  
      regexExpression += "$";
  
      return this;
    };
  
    /* Supplies the user with the regex */
  
    this.getRegex = function() {
      return new RegExp(regexExpression);
    };
  
  }

}(jQuery));
