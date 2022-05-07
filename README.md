# WordleWithFriends
by Aman Alem
![image](https://user-images.githubusercontent.com/101615210/167254206-a064c1df-b50b-42ad-95c7-8fe7c6340950.png)

## Technologies Used
* HTML
* CSS
* Javascript
* Dictionary API

## Installation / How To Play
### Option 1: GitHub Pages (recommended)
* Visit the live site - [Wordle With Friends](https://amanalem.github.io/WordleWithFriends/)

### Option 2: Play Locally (Fork/Clone)
1. Fork this repo. Instructions can be found here - [How To Fork Repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Clone this repo. Instructions can be found here - [How To Clone Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

## User Stories
### MVP Goals
* As a player, I would like to be able to choose a word for a second player to solver. 
* As a player, I would like to only be able to enter a 5 letter English word for a second player to solve. 
* As a player, after I enter a word for the second player to solver, I would like the look of the screen to change for the second player. 
*	As the second player, I would like to be able to enter up to 6 guesses. 
*	As the second player, I would like each of my guesses to show up in rows on a grid. 
*	As the second player, I would like the letters of my guesses colored according to the rules of Wordle. 
*	As the second player, I would like to be alerted if I have won. 
*	As the second player, if I am unable to guess the word in 6 guesses, I would like to know what the word is. 

### Stretch Goals
*	As the second player, I would like to be able to see the letters I have already guessed appear at the bottom of the screen with the appropriate colors to match. 
*	As a player, I would like the game to look good on my cellphone. 
*	As a player, I would like the game to keep score for both players. 
*	As a player I would like to be able to use a different device than the other player. 
*	As a player, I don’t want to see a list of previously guessed words when I click in the text box. 
*	As a player, instead of seeing alert boxes I would like there to be cool modal popups.
*	As a player, I would like the game grid tiles to animate as I enter guesses.
*	As a player, I would like to use the onscreen keyboard to enter my guesses into the guess text box.

## Wire Frames
### Start / Player 1 Screen
![player 1 word chooser](https://user-images.githubusercontent.com/101615210/167256133-7c6adb3b-35ae-452c-b83b-cd7be8195a47.png)

### Solver / Player 2 Screen
![player 2 word solver](https://user-images.githubusercontent.com/101615210/167256165-8fa3c37a-416c-411c-b03d-8112a5aeda57.png)


## Major Hurdles
* My biggest hurdle was figuring out all of the color logic. First, if the solution word was "crest" and the player guessed "chess," I needed to make sure that the second "S" in "guess" showed up as grey in the game grid, but still showed up as green in the keyboard at the bottom of the screen that keeps track of all of the guessed letters. I ended up redoing my code and then redoing it again. Ultimately, my final solution was always much simpler than my innitial ones.

## Unsolved Issues
* There is an issue where hitting the return key instead of clicking the enter button breaks my styling and brings up multiple guess textboxes and guess submit buttons.
* The game looks horrible on smaller screens. This is something I will look to improve in the future.
