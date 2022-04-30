let submitWord = document.querySelector('#submitWord');
let submitGuess = document.querySelector('#submitGuess');

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
submitGuess.addEventListener('click', (e)=> {
    e.preventDefault();
    let textInput = document.querySelector('#guessBox').value;
    // console.log(textInput);
    while (textInput.length !== 5){
        // alert(`Your word must be exactly 5 letters long. Please try again.`);
        submitGuess.addEventListener('click', (e)=> {
            e.preventDefault();
            textInput = document.querySelector('#guessBox').value;
        }, {once : true})
    };
    // Dictionary api url setup
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        if (res.title){
            alert(`This is not an English word. Please try again`)
        } else {
            const guess1 = new Word(textInput);
            guess1.letters = textInput.split('');
            console.log(guess1.letters);
            guessBox.value = "";
            for (i = 0; i < 5; i++){
                row1[i].innerText = guess1.letters[i];
            };
            guessBox.placeholder = "Guess 2";
        }
    })
    .catch(err => console.log(`This is an error!`, err))
}, {once : true});
