// player 1
let submitWord = document.querySelector('#submitWord');

// player 2
let submitGuess = document.querySelectorAll('.submitGuess');
for (i = 1; i < submitGuess.length; i++){
    submitGuess[i].style.display = 'none';
}

let errors = document.querySelectorAll('#p2WordChooser h4')

let row1 = document.querySelectorAll('#row1 .column');
let row2 = document.querySelectorAll('#row2 .column');
let row3 = document.querySelectorAll('#row3 .column');
let row4 = document.querySelectorAll('#row4 .column');
let row5 = document.querySelectorAll('#row5 .column');
let row6 = document.querySelectorAll('#row6 .column');

class Word {
    constructor(word){
        this.word = word;
        this.letters = [];
    }
}

// Player one chooses a 5 letter word--------------------------------------->>
submitWord.addEventListener('click', (e)=> {
    e.preventDefault();
    let textInput = document.querySelector('#wordBox').value;
    // console.log(textInput);
    if (textInput.length !== 5){
        alert(`Your word must be exactly 5 letters long. Please try again.`)
    } else {
        // Dictionary api url setup
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`
        fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            if (res.title){
                alert(`This is not an English word. Please try again`)
            } else {
                alert(`Got it! Time to put your friend's skills to the test...`);
                const word = new Word(textInput);
                word.letters = textInput.split('');
                console.log(word.letters);
                document.querySelector('#playerOne').style.display = "none";
                document.querySelector('#playerTwo').style.display = "block";
            }
        })
        .catch(err => console.log(`This is an error!`, err))
    }  
});

// screen changes to player 2 view...

// Guess 1 Submit ----------------------------->>
submitGuess1.addEventListener('click', (e)=> {
    e.preventDefault();
    let guess1Input = document.querySelector('#guessBox').value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess1Input}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
            // console.log(res)
        if (res.title || guess1Input.length !== 5){
            // alert for invalid word
            errors[0].style.display = "none";               
            errors[1].style.display = "block";  
        } else {
            errors[0].style.display = "block";
            errors[1].style.display = "none";
            const guess1 = new Word(guess1Input);
            guess1.letters = guess1Input.split('');
            guessBox.value = "";
            for (i = 0; i < 5; i++){
                row1[i].innerText = guess1.letters[i];
            };
            guessBox.placeholder = "Guess 2";
            submitGuess[0].style.display = "none";
            submitGuess[1].style.display = "inline";
        }
    })
    .catch(err => console.log(`This is an error!`, err))        
// }, {once : true});
});