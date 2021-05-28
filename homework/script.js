const ranNum = Math.floor(Math.random() * 11); 

function movieCall() {
    const movies = [
        /*0*/{title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
        /*1*/{title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
        /*2*/{title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
        /*3*/{title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
        /*4*/{title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
        /*5*/{title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
        /*6*/{title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
        /*7*/{title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
        /*8*/{title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
        /*9*/{title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
        /*10*/{title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
    ]

    

    return movies[ranNum];
}

const explain = document.getElementById('explanation');
explain.innerHTML = movieCall().explanation;

let count = 0;
const submitButton = document.getElementById('submit');
const hintButton = document.getElementById('hint');
const guess = document.getElementById('guess');

const hinter = document.getElementById('hinter');
const submission = document.getElementById('submission');


hintButton.addEventListener('click', () => {
    
    if (hinter.innerHTML === "" || count == 0) {
        hinter.innerHTML = movieCall().hint;
        hintButton.innerText = "Hide Hint";
        count++;
    } else {
        hintButton.innerText = "Show Hint";
        hinter.innerHTML = "";
    }
    
});

submitButton.addEventListener('click', () => {

    const userGuess = guess.value.toLowerCase();
    const title = movieCall().title.toLowerCase();

    if (userGuess === title) {
        submission.innerHTML = "Congratulations, " + movieCall().title + " was the correct movie!";
        setTimeout(playAgain, 5000);
        
    } else if (userGuess == "yes play again") {
        reload();
    }
    else {
        submission.innerHTML = "Incorrect Answer, Try Again";
    } 
});

function playAgain() {
    submission.innerHTML = "Since you got it right, do you want to play again? (type: yes play again)";
}

function reload() {
    window.location.reload();
}
