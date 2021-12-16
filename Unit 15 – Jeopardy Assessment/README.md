# Jeopardy
Use jQuery, AJAX, & the jService API to make a randomized Jeopardy game. Categories have a 1 in 10,000 chance of being picked.
Springboard requested the source code to be in a private repo, so here it everything but the source code.


## Code Walkthrough
* When the page initially loads, 2 functions are called ```showInitialScreen() and onButtonClick()```
  * ```showInitialScreen()``` displays the title and start onButtonClick
  * ```onButtonClick()``` begins the loading sequence which consists of ```showLoadingScreen() and hideLoadingScreen()```
* The loading sequence lasts for 2 seconds. It changes the button to say "Loading..." and it displays a loading wheel
* After the loading sequence, the function ```setupCategories()``` is called
  * This initializes the ```categories``` array with the correct data layout & with empty fields
* After that, the function ```retrieveData()``` is called
  * This handles all the API calls to http://jservice.io/api/ as well as saving that information in the ```categories``` array
* After that, a function called ```setAllText()``` is called
  * This generates the HTML table and renders the UI
  * It also handles when table data is clicked & needs to be toggled

## Screenshots
Here is a picture of the loading sequence
![](pics/jeopardy3.png)

Here is a picture of the beginning of a game
![](pics/jeopardy1.png)

Here is a picture of the middle of a game
![](pics/jeopardy2.png)
