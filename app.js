let submit = document.querySelector('#submitButton');

submit.addEventListener('click', (e)=> {
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
                textInput = undefined;
                console.log(word.letters);
            }
        })
        .catch(err => console.log(`This is an error!`, err))
    }  
});

class Word {
    constructor(word){
        this.word = word;
        this.letters = [];
    }
}
