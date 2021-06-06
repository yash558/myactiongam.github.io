score = 0;
cross = true;
audio = new Audio('background.mp3');
audiogo = new Audio('snakehit.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("key code is: ",e.keyCode)
    if (e.keyCode==38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode==39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 +"px";        
    }
    if (e.keyCode==37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left =(dinoX - 112) +"px";        
    }
    
};
setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
 //console.log(offsetX,offsetY)
    if (offsetX< 113 && offsetY<52){
        gameover.innerHTML = 'Game Over - Reload to Start Over';
        obstacle.classList.remove('obstacleAni')     
    audiogo.play();
    setTimeout(() => {
        audio.pause();
    }, 1000);   
   
    }
    else if(offsetX< 75 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dino,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';            
        }, 500);

    } 

}, 100);

function updateScore(score){
    scoreCont.innerHTML= "Your Score:" + score
    
}

function restartGame(){
    score = 0
    cross = true

    obstacle = document.querySelector('.obstacle');
    obstacle.classList.add('obstacleAni')
    obstacle.style.left = "70vw"
    obstacle.style.bottom = "0px"

    dino = document.querySelector('.dino');
    dino.style.left = "10px"
    dino.style.bottom = "0px"
    

}