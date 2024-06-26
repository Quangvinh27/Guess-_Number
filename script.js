'use strict';
let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check')
.addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //khi nhap so 
    if(!guess){
        document.querySelector('.message').textContent = 'No number!'

        // khi thang
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent ='🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //khi so nhap cao hown
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'To high!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🤣 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }        

        //khi so nhap thap hown
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'To low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🤣 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }        
    }

    //click again để load lại game
    document.querySelector('.again')
    .addEventListener('click', function(){
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20 ) + 1;

        document.querySelector('.message').textContent = 'Start Guessing...!';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });
} ) ;