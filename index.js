
var audio = document.createElement('audio');
audio.setAttribute('src','sounds/sound.mp3');
audio.loop = true;


// Onclick play


document.querySelector(".Play").addEventListener("click",()=>{

    document.querySelector("body").style.animation='shakeBody linear 6s infinite';
    document.querySelector(".left-wheel").classList.add('active');
    document.querySelector(".right-wheel").classList.add('active');
     document.querySelector(".car").classList.add(".Animation");
     document.querySelector(".track").classList.add("Move");
     audio.play();
});



function Stop(){
    document.querySelector("body").style.animation="";
    document.querySelector(".left-wheel").classList.remove('active');
    document.querySelector(".right-wheel").classList.remove('active');
     document.querySelector(".car").classList.remove(".Animation");
     document.querySelector(".track").classList.remove("Move");
     audio.pause();
     audio.currentTime="0";
}

