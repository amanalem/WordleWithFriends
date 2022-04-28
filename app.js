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

// Player one chooses a 5 letter word
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

// Guess 1 submit
submitGuess.addEventListener('click', (e)=> {
    e.preventDefault();
    let textInput = document.querySelector('#guessBox').value;
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
                alert(`Guess 2`);
                const guess1 = new Word(textInput);
                guess1.letters = textInput.split('');
                console.log(guess1.letters);
                guessBox.value = "";
                guessBox.placeholder = "Guess 2"
                for (i = 0; i < 5; i++){
                    row1[i].innerText = guess1.letters[i];
                };
            }
        })
        .catch(err => console.log(`This is an error!`, err))
    } 
    // guess 2 submit
    submitGuess.addEventListener('click', (e)=> {
        e.preventDefault();
        let textInput = document.querySelector('#guessBox').value;
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
                    alert(`Guess 3`);
                    const guess2 = new Word(textInput);
                    guess2.letters = textInput.split('');
                    console.log(guess2.letters);
                    guessBox.value = "";
                    guessBox.placeholder = "Guess 3"
                    for (i = 0; i < 5; i++){
                        row2[i].innerText = guess2.letters[i];
                    };
                }
            })
            .catch(err => console.log(`This is an error!`, err))
        } 
        // guess 3 submit
        
    });
});

// // guess 2 submit
// submitGuess.addEventListener('click', (e)=> {
//     e.preventDefault();
//     let textInput = document.querySelector('#guessBox').value;
//     // console.log(textInput);
//     if (textInput.length !== 5){
//         alert(`Your word must be exactly 5 letters long. Please try again.`)
//     } else {
//         // Dictionary api url setup
//         let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`;
//         fetch(url)
//         .then(res => res.json())
//         .then(res => {
//             // console.log(res)
//             if (res.title){
//                 alert(`This is not an English word. Please try again`)
//             } else {
//                 alert(`Guess 3`);
//                 const guess2 = new Word(textInput);
//                 guess2.letters = textInput.split('');
//                 console.log(guess2.letters);
//                 guessBox.value = "";
//                 guessBox.placeholder = "Guess 3"
//                 for (i = 0; i < 5; i++){
//                     row2[i].innerText = guess2.letters[i];
//                 };
//             }
//         })
//         .catch(err => console.log(`This is an error!`, err))
//     } 
//     // guess 3 submit
    
// });

