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
        } else if (optionString == "freeText"){
          regexExpression += fieldString;
        }
      }

      if(numString){

        var firstDigit;
        var secondDigit;

        /* TODO: Find way to extract digits */

        /* Explicit amount */

        if(numString[1] == "undefined"){
          regexExpression += "{" + numString[0] + "}";
        }
        
        
        /* Between */

        if(numString.indexOf(':') != -1){
          regexExpression += "{" + numString[0] + "," + numString[2] + "}";
        }

        /* Or more */

        if(numString.indexOf('+') != -1){
          regexExpression += "{" + numString[0] + ",}";
        }
        
      }

      return this;
      
    };

    this.getRegex = function(){
      return new RegExp(regexExpression);
    };

  }