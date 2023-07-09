'use strict';


let chances=10;
let guess=0;
let hs=0;
let generatedNum=Math.trunc(Math.random()*10)+1;

document.querySelector('.btn').addEventListener('click',function(){
guess=Number(document.querySelector('.num').value);

const displayMessage=function(message)
{
    document.querySelector('.message').textContent=message;
};


if(guess===generatedNum)
{
    displayMessage("BINGOOOOOOOOOO!!");
    document.querySelector('.MyScore').textContent=chances;
    document.querySelector('.btn').disabled=true;

    document.querySelector('body').style.backgroundColor='#90EE90';
    if(chances>hs)
    {
        hs=chances;
        document.querySelector('.MyHighScore').textContent=hs;
    }
    
}

else if(guess<generatedNum){
displayMessage("Too Low!");
chances-=1;
document.querySelector('.MyScore').textContent=chances;
}
else if(guess>generatedNum){
    displayMessage("Too High!");
    chances-=1;
    document.querySelector('.MyScore').textContent=chances;
}

if(chances==0)
{
    displayMessage("TRY AGAIN");
    document.querySelector('body').style.backgroundColor='#B2BEB5';
}

});

document.querySelector('.again').addEventListener('click',function(){
    chances=10;
    generatedNum=Math.trunc(Math.random()*10)+1;
    console.log(generatedNum);
    document.querySelector('body').style.backgroundColor=  'rgb(200, 225, 223)';
    document.querySelector('.MyScore').textContent=chances;
    document.querySelector('.message').textContent='';
    document.querySelector('.btn').disabled=false;
});
