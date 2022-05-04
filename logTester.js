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


let gridRow = [[1,2,3], [4,5,6], [7,8,9]];
console.log(gridRow[1][1]);

let nums = [1, 2, 2, 3, 4, 5]
18:55:29.573 undefined
18:55:51.686 nums.count(2)
18:55:51.693 VM968:1 Uncaught TypeError: nums.count is not a function
    at <anonymous>:1:6
(anonymous) @ VM968:1
18:57:45.679 nums.filter(x=> x == 2).length