// player 1
let submitWord = document.querySelector('#submitWord');

class Word {
    constructor(word){
        this.word = word;
        this.letters = this.word.toLowerCase().split('');
        this.rightAnswer = this.word.toLowerCase().split('');
    }
}

// player 2
let submitGuess = document.querySelectorAll('.submitGuess');
let guessBox = document.querySelectorAll('.guessBox');
for (i = 1; i < submitGuess.length; i++){
    submitGuess[i].style.display = 'none';
    guessBox[i].style.display = 'none';
}

let errors = document.querySelectorAll('#p2WordChooser h4')

let row0 = document.querySelectorAll('#row0 .column');
let row1 = document.querySelectorAll('#row1 .column');
let row2 = document.querySelectorAll('#row2 .column');
let row3 = document.querySelectorAll('#row3 .column');
let row4 = document.querySelectorAll('#row4 .column');
let row5 = document.querySelectorAll('#row5 .column');

let grid = {
    row: [row0, row1, row2, row3, row4, row5]
}


class Guess {
    constructor(word){
        this.word = word;
        this.letters = this.word.toLowerCase().split('');
    }
    gridPush(num){
        for (i = 0; i < 5; i++){
            grid.row[num][i].innerText = this.letters[i].toUpperCase();
            let keyColor = document.querySelector(`#${this.letters[i]}`);
            if (!solution.rightAnswer.includes(this.letters[i])){
                grid.row[num][i].style.backgroundColor = "#353336" /* dark grey */;
                if (document.querySelector(`#${this.letters[i]}`).className === "letterBox"){
                    keyColor.className = "greyLetBox";
                }
            } else {
                if (this.letters[i] == solution.rightAnswer[i]){
                    grid.row[num][i].style.backgroundColor = "#2fbd71" /* green */;
                    keyColor.className = "greenLetBox";
                } else {
                    grid.row[num][i].style.backgroundColor = "#cfb234";
                    if (document.querySelector(`#${this.letters[i]}`).className !== "greenLetBox"){
                        keyColor.className = "yellowLetBox";
                    }
                }
                solution.rightAnswer[solution.rightAnswer.indexOf(this.letters[i])] = "*";
            }
        }
    }


    // gridPush(num){
    //     for (i = 0; i < 5; i++){
    //         grid.row[num][i].innerText = this.letters[i].toUpperCase();
    //         // let KeyColor = document.querySelector(`#${this.letters[i].toLowerCase()}`).style.backgroundColor;
    //         if (!solution.rightAnswer.includes(this.letters[i])){
    //             grid.row[num][i].style.backgroundColor = "#353336" /* Grey */;
    //             if (/* KeyColor */document.querySelector(`#${this.letters[i].toLowerCase()}`).style.backgroundColor == "#2fbd71" /* Green */){
    //                 console.log('The color is already correct');
    //             } else if (/* KeyColor */document.querySelector(`#${this.letters[i].toLowerCase()}`).style.backgroundColor == "#cfb234" /* Yellow */){
    //                 console.log('The color is already correct');
    //             } else {
    //                 /* KeyColor */document.querySelector(`#${this.letters[i].toLowerCase()}`).style.backgroundColor = "#353336" /* Grey */; 
    //             }
    //         } else {
    //             if (this.letters[i] == solution.rightAnswer[i]){
    //                 grid.row[num][i].style.backgroundColor = "#2fbd71" /* Green */;
    //                 /* KeyColor */document.querySelector(`#${this.letters[i].toLowerCase()}`).style.backgroundColor = "#2fbd71" /* Green */;
    //             } else {
    //                 grid.row[num][i].style.backgroundColor = "#cfb234" /* Yellow */;
    //                 if (/* KeyColor */document.querySelector(`#${this.letters[i].toLowerCase()}`).style.backgroundColor == "#2fbd71" /* Green */){
    //                     console.log('The color is already correct');
    //                 } else {
    //                     /* KeyColor */document.querySelector(`#${this.letters[i].toLowerCase()}`).style.backgroundColor = "#cfb234" /* Yellow */;
    //                 }
    //             }
    //             solution.rightAnswer[solution.rightAnswer.indexOf(this.letters[i])] = "*";
    //         }
    //     }
    // }
}

// Player one chooses a 5 letter word--------------------------------------->>
submitWord.addEventListener('click', (e)=> {
    e.preventDefault();
    let textInput = document.querySelector('#wordBox').value.toLowerCase();
    if (textInput.length !== 5){
        alert(`Your word must be exactly 5 letters long. Please try again.`)
    } else {
        // Dictionary api url setup
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if (res.title){
                alert(`This is not an English word. Please try again`)
            } else {
                alert(`Got it! Time to put your friend's skills to the test...`);
                document.querySelector('#playerOne').style.display = "none";
                document.querySelector('#playerTwo').style.display = "block";
                document.querySelector('header').style.marginTop = "2%";
                return solution = new Word(textInput);
            }
        })
        .catch(err => console.log(`This is an error!`, err));
        
    }  
});

// screen changes to player 2 view...

// Guess 1 Submit ----------------------------->>
submitGuess[0].addEventListener('click', (e)=> {
    e.preventDefault();
    let guess1Input = document.querySelector('#guessBox1').value.toLowerCase();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess1Input}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        if (res.title || guess1Input.length !== 5){
            // alert for invalid word
            errors[0].style.display = "none";               
            errors[1].style.display = "block";  
        } else {
            errors[0].style.display = "block";
            errors[1].style.display = "none";
            let guess1 = new Guess(guess1Input);
            guess1.gridPush(0);
            // guessBox.value = "";
            if (guess1.word == solution.word){
                alert('Incredible! You win!')
            } else {
                // guessBox.placeholder = "Guess 2";
                submitGuess[0].style.display = "none";
                guessBox[0].style.display = "none";
                submitGuess[1].style.display = "inline";
                guessBox[1].style.display = "inline";
                for (i = 0; i < 5; i++) {
                    solution.rightAnswer[i] = solution.letters[i];
                }
            }
        };
    })
    .catch(err => console.log(`This is an error!`, err));
});

// Guess 2 Submit ----------------------------->>
submitGuess[1].addEventListener('click', (e)=> {
    e.preventDefault();
    let guess2Input = document.querySelector('#guessBox2').value.toLowerCase();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess2Input}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        if (res.title || guess2Input.length !== 5){
            // alert for invalid word
            errors[0].style.display = "none";               
            errors[1].style.display = "block";  
        } else {
            errors[0].style.display = "block";
            errors[1].style.display = "none";
            let guess2 = new Guess(guess2Input);
            guess2.gridPush(1);
            guessBox.value = "";
            if (guess2.word == solution.word){
                alert('Magnificent! You win!')
            } else {
                submitGuess[1].style.display = "none";
                guessBox[1].style.display = "none";
                submitGuess[2].style.display = "inline";
                guessBox[2].style.display = "inline";
                for (i = 0; i < 5; i++) {
                    solution.rightAnswer[i] = solution.letters[i];
                }
            }
        };
    })
    .catch(err => console.log(`This is an error!`, err));
});

// Guess 3 Submit ----------------------------->>
submitGuess[2].addEventListener('click', (e)=> {
    e.preventDefault();
    let guess3Input = document.querySelector('#guessBox3').value.toLowerCase();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess3Input}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        if (res.title || guess3Input.length !== 5){
            // alert for invalid word
            errors[0].style.display = "none";               
            errors[1].style.display = "block";  
        } else {
            errors[0].style.display = "block";
            errors[1].style.display = "none";
            let guess3 = new Guess(guess3Input);
            guess3.gridPush(2);
            guessBox.value = "";
            if (guess3.word == solution.word){
                alert('Nicely done! You win!')
            } else {
                submitGuess[2].style.display = "none";
                guessBox[2].style.display = "none";
                submitGuess[3].style.display = "inline";
                guessBox[3].style.display = "inline";
                for (i = 0; i < 5; i++) {
                    solution.rightAnswer[i] = solution.letters[i];
                }
            }
        };
    })
    .catch(err => console.log(`This is an error!`, err));
});

// Guess 4 Submit ----------------------------->>
submitGuess[3].addEventListener('click', (e)=> {
    e.preventDefault();
    let guess4Input = document.querySelector('#guessBox4').value.toLowerCase();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess4Input}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        if (res.title || guess4Input.length !== 5){
            // alert for invalid word
            errors[0].style.display = "none";               
            errors[1].style.display = "block";  
        } else {
            errors[0].style.display = "block";
            errors[1].style.display = "none";
            let guess4 = new Guess(guess4Input);
            guess4.gridPush(3);
            guessBox.value = "";
            if (guess4.word == solution.word){
                alert('Great! You win!')
            } else {
                submitGuess[3].style.display = "none";
                guessBox[3].style.display = "none";
                submitGuess[4].style.display = "inline";
                guessBox[4].style.display = "inline";
                for (i = 0; i < 5; i++) {
                    solution.rightAnswer[i] = solution.letters[i];
                }
            }
        };
    })
    .catch(err => console.log(`This is an error!`, err));
});

// Guess 5 Submit ----------------------------->>
submitGuess[4].addEventListener('click', (e)=> {
    e.preventDefault();
    let guess5Input = document.querySelector('#guessBox5').value.toLowerCase();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess5Input}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        if (res.title || guess5Input.length !== 5){
            // alert for invalid word
            errors[0].style.display = "none";               
            errors[1].style.display = "block";  
        } else {
            errors[0].style.display = "block";
            errors[1].style.display = "none";
            let guess5 = new Guess(guess5Input);
            guess5.gridPush(4);
            guessBox.value = "";
            if (guess5.word == solution.word){
                alert('Good job! You win!')
            } else {
                submitGuess[4].style.display = "none";
                guessBox[4].style.display = "none";
                submitGuess[5].style.display = "inline";
                guessBox[5].style.display = "inline";
                for (i = 0; i < 5; i++) {
                    solution.rightAnswer[i] = solution.letters[i];
                }
            }
        };
    })
    .catch(err => console.log(`This is an error!`, err));
});

// Guess 6 Submit ----------------------------->>
submitGuess[5].addEventListener('click', (e)=> {
    e.preventDefault();
    let guess6Input = document.querySelector('#guessBox6').value.toLowerCase();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess6Input}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        if (res.title || guess6Input.length !== 5){
            // alert for invalid word
            errors[0].style.display = "none";               
            errors[1].style.display = "block";  
        } else {
            errors[0].style.display = "block";
            errors[1].style.display = "none";
            let guess6 = new Guess(guess6Input);
            guess6.gridPush(5);
            guessBox.value = "";
            if (guess6.word == solution.word){
                alert('Phew! You win!')
            } else {
                alert(`Good try! The answer is ${solution.word.toUpperCase()}!`)
            }
        };
    })
    .catch(err => console.log(`This is an error!`, err));
});