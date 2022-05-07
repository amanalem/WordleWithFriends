// let numTest = [0,1,2,3,4,5,6]
// if (numTest.find(el => el == 2)){
//     console.log('This number is in the array, therefore this statement is true')
// } else {
//     console.log('You may be confused');
// }

// if (numTest.find(el => el == 7)){
//     console.log('You may be confused')
// } else {
//     console.log('This number is not in the array, therefore the .find is false')
// }

// class WordTest {
//     constructor(word){
//         this.word = word;
//         this.letters = this.word.split('');
//     }
// }
// let baige = new WordTest('baige')
// let bangs = new WordTest('bangs')
// if (baige.letters[4] == bangs.letters[4]){
//     console.log('this works')
// }


// let gridRow = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(gridRow[1][1]);

// let nums = [1, 2, 2, 3, 4, 5]
// 18:55:29.573 undefined
// 18:55:51.686 nums.count(2)
// 18:55:51.693 VM968:1 Uncaught TypeError: nums.count is not a function
//     at <anonymous>:1:6
// (anonymous) @ VM968:1
// 18:57:45.679 nums.filter(x=> x == 2).length










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




    // We need to push the letters of our word in an array 

// let test = ["w", "o", "r", "d"]
// let realTest = test;
// realTest[1] = "*";
// console.log(realTest);





// // Guess 2 Submit ----------------------------->>
// submitGuess[1].addEventListener('click', (e)=> {
//     e.preventDefault();
//     let guess2Input = document.querySelector('#guessBox').value.toLowerCase();
//     let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess2Input}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(res => {
//         if (res.title || guess2Input.length !== 5){
//             // alert for invalid word
//             errors[0].style.display = "none";               
//             errors[1].style.display = "block";  
//         } else {
//             errors[0].style.display = "block";
//             errors[1].style.display = "none";
//             let guess2 = new Guess(guess2Input);
//             guess2.gridPush(1);
//             guessBox.value = "";
//             if (guess2.word == solution.word){
//                 alert('Magnificent! YOU WIN!')
//             } else {
//                 guessBox.placeholder = "Guess 2";
//                 submitGuess[1].style.display = "none";
//                 submitGuess[2].style.display = "inline";
//             }
//         };
        
//     })
//     .catch(err => console.log(`This is an error!`, err));
// });


// gridPush(num){
//     for (i = 0; i < 5; i++){
//         grid.row[num][i].innerText = this.letters[i].toUpperCase();
//         let keyColor = document.querySelector(`#${this.letters[i].toLowerCase()}`).style.backgroundColor;
//         if (!solution.rightAnswer.includes(this.letters[i])){
//             grid.row[num][i].style.backgroundColor = "#353336" /* Grey */;
//             if (keyColor !== "#2fbd71" /* Green */ && keyColor !== "#cfb234" /* Yellow */){
//                 keyColor = "#353336" /* Grey */;
//             }
//         } else {
//             if (this.letters[i] == solution.rightAnswer[i]){
//                 grid.row[num][i].style.backgroundColor = "#2fbd71" /* Green */;
//                 keyColor = "#2fbd71" /* Green */;
//             } else {
//                 grid.row[num][i].style.backgroundColor = "#cfb234" /* Yellow */;
//                 if (keyColor !== "#2fbd71" /* Green */){
//                     keyColor = "#cfb234" /* Yellow */;
//                 }
//             }
//             solution.rightAnswer[solution.rightAnswer.indexOf(this.letters[i])] = "*";
//         }
//     }
// }



// green - "#2fbd71"

// yellow - "#cfb234"

// grey - "#353336"

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
                submitGuess[3].style.display = "inline";
                for (i = 0; i < 5; i++) {
                    solution.rightAnswer[i] = solution.letters[i];
                }
            }
        };
    })
    .catch(err => console.log(`This is an error!`, err));
});

