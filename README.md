jRegex
======

jRegex is a jQuery plugin which helps you build regular expressions with ease.

###How To Use

Including jRegex is very simple.

```
<script src="jquery.min.js"></script>
<script src="jquery.jregex.js"></script>
<script src="yourjavascript.js"></script>
```

###What it can do (as of now)

Build a regular expression

```
// Create a regular expression

var exp = $.regex().whichContains("freeText","abcdefg","1+").getRegex();
alert(exp);

```

Output:

```
/abcdefg{1,}/ 
```

##Documentation

###The Basics
To use jRegex create a jRegex object which can be done easily by invoking:

```
$.regex()
```

Now in order to create an actual regular expression begin the process of chaining methods. The regex creation methods that can be chained are:

```
.startingWith()
.whichContains()
.or()
.followedBy()
.onlyIfFollowedBy()
.onlyIfNotFollowedBy()
.endingIn()
```

Finally, once all the chaining is done, you'd probably want to get the RegExp object, and this can be done by tacking one last method at the end:

```
.getRegex()  // No arguments nessecary
```

A full example is below:

```
var gre = $.regex().startingWith("freeText","narc","1").followedBy("anyChar","","2:5").followedBy("anyWhitespace","","2+").getRegex()
```

###The Golden Rule

Each of these methods:

```
.startingWith()
.whichContains()
.or()
.followedBy()
.onlyIfFollowedBy()
.onlyIfNotFollowedBy()
.endingIn()
```

Requires 3 string variables as arguments. Nothing more, nothing less.

Thus, this is acceptable:

```
.startingWith("","","")
```

Even if some strings are empty it doesn't really matter. As long as there ARE three strings present jRegex will function properly.

###The Three Arguments

These are the three string arguments that are passed into the string creation methods:

1. A Specifier
2. Field Text
3. A Quantifier

They are passed in as followed:

```
.startingWith(specifier,fieldText,quantifier)
```

####Valid Specifier Strings

These are the valid strings you can set as your specifier

```
"anyChar"
"anyLetter"
"anyUppercaseLetter"
"anyLowercaseLetter"
"freeText"
"anyWhitespace"
"anyDigit"
```

####Valid Field Text

When using the ```freeText``` method, you can set the fieldText string as whatever you want to match:

```
.startingWith("freeText","YOU TEXT HERE","")
```

####Valid Quantifier Strings

You quanitifer strings can be one of three kinds:

1. An Explicit Number        "6"
2. Boundless Numbers         "6+"
3. Numbers between a range   "6:20"

This example demonstrates:

```
.startingWith("anyChar","","6")       // Any character exactly 6 times
.startingWith("anyChar","","6+")      // Any character 6 or more times
.startingWith("anyChar","","6:20")    // Any character between 6 thru 20 times
```

###Contribute and FAQs

Right now jRegex is very small. It currently does't have support for ```dotall```, or applying quantifiers to entire groups, or negating character classes. 

These features will be implemented shortly.

If you would like to contribute please make a fork and supply your code.



