# Testing with Jasmine
Jasmine is a JS testing framework, which is easy to read and aids in documentation.

To run tests in the browser with Jasmine, make sure to include the following in your HTML.
```
<head>
<title>Taxes Tests</title>

<!-- include CSS for Jasmine -->
<link rel="stylesheet"
  href="https://unpkg.com/jasmine-core/lib/jasmine-core/jasmine.css" />
</head>
<body>

<!-- include JS for Jasmine -->  
<script 
  src="https://unpkg.com/jasmine-core/lib/jasmine-core/jasmine.js"></script>
<script 
  src="https://unpkg.com/jasmine-core/lib/jasmine-core/jasmine-html.js"></script>
<script 
  src= "https://unpkg.com/jasmine-core/lib/jasmine-core/boot.js"></script>

<!-- include your JS & test file -->
<script src="taxes.js"></script> 
<script src="taxes.test.js"></script>
</body>
```

![Loan Screen 1](/Pics/Calc1.png "Loan Screen 1")

![Loan Screen 2](/Pics/Calc2.png "Loan Screen 2")

![Test Screen](/Pics/Jasmine.png "Test Screen")


