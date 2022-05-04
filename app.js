// player 1
let submitWord = document.querySelector('#submitWord');

class Word {
    constructor(word){
        this.word = word;
        this.letters = this.word.split('');
    }
}

// player 2
let submitGuess = document.querySelectorAll('.submitGuess');
for (i = 1; i < submitGuess.length; i++){
    submitGuess[i].style.display = 'none';
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

let letterRow0 = document.querySelectorAll('letterRow0 .letterBox');
let letterRow1 = document.querySelectorAll('letterRow1 .letterBox');
let letterRow2 = document.querySelectorAll('letterRow2 .letterBox');

let keyboard = {
    row: [letterRow0, letterRow1, letterRow2]
}

class Guess {
    constructor(word){
        this.word = word;
        this.letters = this.word.split(''); 
    }
    // gridPush(num){
    //     for (i = 0; i < 5; i++){
    //         grid.row[num][i].innerText = this.letters[i];
    //         if (this.letters[i] == solution.letters[i]){
    //             grid.row[num][i].style.backgroundColor = "green";
    //         } else if (solution.letters.find(el => el == this.letters[i])){
    //             grid.row[num][i].style.backgroundColor = "yellow";
    //             if (this.letters.filter(x=> x == grid.row[num][i].length) == 1){
    //                 grid.row[num][i].style.backgroundColor = "yellow";
    //             } else {
    //                 grid.row[num][i].style.backgroundColor = "grey";
    //             }
    //         } else {
    //             grid.row[num][i].style.backgroundColor = "grey";
    //         }
    //     };
    //     guessBox.placeholder = "Guess 2";
    //     submitGuess[0].style.display = "none";
    //     submitGuess[1].style.display = "inline";
    // }
    gridPush(num){
        for (i = 0; i < 5; i++){
            grid.row[num][i].innerText = this.letters[i];
            if (this.letters[i] == solution.letters[i]){
                grid.row[num][i].style.backgroundColor = "green";
            } else if (solution.letters.find(el => el == this.letters[i])) {
                grid.row[num][i].style.backgroundColor = "yellow"
            } else {
                if (this.letters.filter(x=> x == grid.row[num][i].length) == 1){
                    grid.row[num][i].style.backgroundColor = "yellow";
                } else {
                    grid.row[num][i].style.backgroundColor = "grey";
                }
            }
        };
        guessBox.placeholder = "Guess 2";
        submitGuess[0].style.display = "none";
        submitGuess[1].style.display = "inline";
    }
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
                return solution = new Word(textInput);
            }
        })
        .catch(err => console.log(`This is an error!`, err))
    }  
});

// screen changes to player 2 view...

// Guess 1 Submit ----------------------------->>
submitGuess[0].addEventListener('click', (e)=> {
    e.preventDefault();
    let guess1Input = document.querySelector('#guessBox').value.toLowerCase();
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
            guessBox.value = "";
        }
    })
    .catch(err => console.log(`This is an error!`, err));
});