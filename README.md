# egen-fe-challenge
egen-fe-challenge

Case 1: Use in an already existing angular App:
1)do bower install egen_cclogo_nish.
2)include the egen_cc_logo.js and egen_cclogo.css in your index.html.
3)pass in "CreditCard" module to your module where you are using this directive.
	Ex: angular.module('app', ['CreditCard']);
4)Use the component as an element <cclogo></cclogo> or as an attribute <div cclogo></div>. 

Case 2: Test 
1)Do bower install to install all the dependencies including jquery, bootstrap, angular. Also installs karma and plugins for developers to check.
2)Click index.html to check an example of basic usage of egen_cclogo_nish component.