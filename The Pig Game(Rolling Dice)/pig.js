'use strict';




let generated=0;
const roll=document.querySelector('.rollDice');
const newgame=document.querySelector('.newGame');
const pass=document.querySelector('.Pass');
const image=document.querySelector('.dImage');
const player1score=document.querySelector('.PL1Res');
const player2score=document.querySelector('.PL2Res');
let win=[0,0];

let CurrentScore=0;
let active=1;
document.querySelector('.PL2').classList.add('inactive');

image.classList.add('hidden');
roll.addEventListener('click',function(){
    generated=Math.trunc(Math.random()*6)+1;
    image.classList.remove('hidden');
    image.src=`D${generated}.png`;

    if(generated!=1)
    {
        if (active===1)
        {
            CurrentScore+=generated;
            player1score.textContent=CurrentScore;
        }
        else
        {
            CurrentScore+=generated;
            player2score.textContent=CurrentScore;
        }
    }

    else{
        if(active===1)
            {
                player1score.textContent=0;
                document.querySelector('.PL1Score').textContent=0;
                document.querySelector('.PL1').classList.add('inactive');
                document.querySelector('.PL2').classList.remove('inactive');
            }
        else
        {
            player2score.textContent=0;
            document.querySelector('.PL2Score').textContent=0;
            document.querySelector('.PL2').classList.add('inactive');
            document.querySelector('.PL1').classList.remove('inactive');
        }
            


        active=active===1?2:1;
        CurrentScore=0;
    }

});
 
pass.addEventListener('click',function(){
    if(active===1)
    {
        document.querySelector('.PL1Score').textContent=CurrentScore+Number(document.querySelector('.PL1Score').textContent);
        player1score.textContent=0;
        active=2;
        CurrentScore=0;
        win[0]=CurrentScore+Number(document.querySelector('.PL1Score').textContent);
    }
    else
    {
        document.querySelector('.PL2Score').textContent=CurrentScore+Number(document.querySelector('.PL2Score').textContent);
        player2score.textContent=0;
        active=1;
        CurrentScore=0;
        win[1]=CurrentScore+Number(document.querySelector('.PL2Score').textContent)
    }

    if(win[0]>=30)
    {
        document.querySelector('.message').textContent=`Game Over!! Player 1 Won With ${win[0]} points`;
        pass.disabled='true';
        roll.disabled='true';
    }
    else if(win[1]>=30)
    {
        document.querySelector('.message').textContent=`Game Over!! Player 2 Won With ${win[1]} points`;
        pass.disabled=true;
        roll.disabled=true;
    }

});


newgame.addEventListener('click',function(){
    document.querySelector('.PL1Score').textContent=0;
    document.querySelector('.PL2Score').textContent=0;
    player1score.textContent=0;
    player2score.textContent=0;
    CurrentScore=0;
    active=1;
    document.querySelector('.message').textContent='';
    win=[0,0];
    image.classList.add('hidden');
    pass.disabled=false;
    roll.disabled=false;


});
