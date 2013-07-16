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

###Contribute

Right now jIzzy is very small. If you would like to contribute please make a fork and supply your code.



