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

            // Guess 2 Submit -------------------------------------->>
            submitGuess.addEventListener('click', (e)=> {
                e.preventDefault();
                textInput = document.querySelector('#guessBox').value;
                // console.log(textInput);
                if (textInput.length !== 5){
                    alert(`Your word must be exactly 5 letters long. Please try again.`)
                } else {
                    // Dictionary api url setup
                    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`;
                    fetch(url)
                    .then(res => res.json())
                    .then(res => {
                        // console.log(res)
                        if (res.title){
                            alert(`This is not an English word. Please try again`)
                        } else {
                            const guess2 = new Word(textInput);
                            guess2.letters = textInput.split('');
                            console.log(guess2.letters);
                            guessBox.value = "";
                            for (i = 0; i < 5; i++){
                                row2[i].innerText = guess2.letters[i];
                            };
                            guessBox.placeholder = "Guess 3";

                            // Guess 3 Submit--------------------->>
                            submitGuess.addEventListener('click', (e)=> {
                                e.preventDefault();
                                textInput = document.querySelector('#guessBox').value;
                                // console.log(textInput);
                                if (textInput.length !== 5){
                                    alert(`Your word must be exactly 5 letters long. Please try again.`)
                                } else {
                                    // Dictionary api url setup
                                    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`;
                                    fetch(url)
                                    .then(res => res.json())
                                    .then(res => {
                                        // console.log(res)
                                        if (res.title){
                                            alert(`This is not an English word. Please try again`)
                                        } else {
                                            const guess3 = new Word(textInput);
                                            guess3.letters = textInput.split('');
                                            console.log(guess3.letters);
                                            guessBox.value = "";
                                            for (i = 0; i < 5; i++){
                                                row3[i].innerText = guess3.letters[i];
                                            };
                                            guessBox.placeholder = "Guess 4";

                                            // Guess 4 Submit--------------------->>
                                            submitGuess.addEventListener('click', (e)=> {
                                                e.preventDefault();
                                                textInput = document.querySelector('#guessBox').value;
                                                // console.log(textInput);
                                                if (textInput.length !== 5){
                                                    alert(`Your word must be exactly 5 letters long. Please try again.`)
                                                } else {
                                                    // Dictionary api url setup
                                                    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`;
                                                    fetch(url)
                                                    .then(res => res.json())
                                                    .then(res => {
                                                        // console.log(res)
                                                        if (res.title){
                                                            alert(`This is not an English word. Please try again`)
                                                        } else {
                                                            const guess4 = new Word(textInput);
                                                            guess4.letters = textInput.split('');
                                                            console.log(guess4.letters);
                                                            guessBox.value = "";
                                                            for (i = 0; i < 5; i++){
                                                                row4[i].innerText = guess4.letters[i];
                                                            };           
                                                            guessBox.placeholder = "Guess 5";
                                                            
                                                            // Guess 5 Submit--------------------->>
                                                            submitGuess.addEventListener('click', (e)=> {
                                                                e.preventDefault();
                                                                textInput = document.querySelector('#guessBox').value;
                                                                // console.log(textInput);
                                                                if (textInput.length !== 5){
                                                                    alert(`Your word must be exactly 5 letters long. Please try again.`)
                                                                } else {
                                                                    // Dictionary api url setup
                                                                    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`;
                                                                    fetch(url)
                                                                    .then(res => res.json())
                                                                    .then(res => {
                                                                        // console.log(res)
                                                                        if (res.title){
                                                                            alert(`This is not an English word. Please try again`)
                                                                        } else {
                                                                            const guess5 = new Word(textInput);
                                                                            guess5.letters = textInput.split('');
                                                                            console.log(guess5.letters);
                                                                            guessBox.value = "";
                                                                            for (i = 0; i < 5; i++){
                                                                                row5[i].innerText = guess5.letters[i];
                                                                            };           
                                                                            guessBox.placeholder = "Guess 6";
                                                                            
                                                                            // Guess 6 Submit--------------------->>
                                                                            submitGuess.addEventListener('click', (e)=> {
                                                                                e.preventDefault();
                                                                                textInput = document.querySelector('#guessBox').value;
                                                                                // console.log(textInput);
                                                                                if (textInput.length !== 5){
                                                                                    alert(`Your word must be exactly 5 letters long. Please try again.`)
                                                                                } else {
                                                                                    // Dictionary api url setup
                                                                                    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`;
                                                                                    fetch(url)
                                                                                    .then(res => res.json())
                                                                                    .then(res => {
                                                                                        // console.log(res)
                                                                                        if (res.title){
                                                                                            alert(`This is not an English word. Please try again`)
                                                                                        } else {
                                                                                            const guess6 = new Word(textInput);
                                                                                            guess6.letters = textInput.split('');
                                                                                            console.log(guess6.letters);
                                                                                            guessBox.value = "";
                                                                                            for (i = 0; i < 5; i++){
                                                                                                row6[i].innerText = guess6.letters[i];
                                                                                            };           
                                                                                            guessBox.placeholder = "No more guesses!";
                                                                                        }
                                                                                    })
                                                                                    .catch(err => console.log(`This is an error!`, err))
                                                                                }     
                                                                            }, {once : true});
                                                                        }
                                                                    })
                                                                    .catch(err => console.log(`This is an error!`, err))
                                                                }     
                                                            }, {once : true});
                                                        }
                                                    })
                                                    .catch(err => console.log(`This is an error!`, err))
                                                }     
                                            }, {once : true});                            
                                        }
                                    })
                                    .catch(err => console.log(`This is an error!`, err))
                                }     
                            }, {once : true});
                        }
                    })
                    .catch(err => console.log(`This is an error!`, err))
                }   
            }, {once : true});
        }
    })
    .catch(err => console.log(`This is an error!`, err))
}, {once : true});
