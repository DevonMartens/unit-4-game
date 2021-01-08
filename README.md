# unit-4-game

![Web Example](https://github.com/DevonMartens/unit-4-game/blob/master/assets/images/unit4.png?raw=true)


Test it out here:

https://devonmartens.github.io/unit-4-game/


Here's how the app works:


There will be four crystals displayed as buttons on the page.

The player will be shown a random number at the start of the game. The objective is to make the score eqaul to this number.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score. This number will be added every time the player clicks that crystal for the duration of the game. The number that each crystall equals in points is randomly generated at every game.

The player will be unaware of the value of each crystal every game until the player clicks a crystal.
When they do click one, update the player's score counter.

As I indicated before, the player wins if their total score matches the random number from the beginning of the game. The player loses if their score goes above the random number.The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


The app shows the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



Things I learned building this:

jQuery
DOM traversal and manipulation
Event handling
this
data-* attributes

This app uses css, HTML and JQuery. JQuery is a Javascript library the purpose of jQuery is to "write less, do more" with Javascript code making it easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code. -W3schools
