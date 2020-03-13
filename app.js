let video = document.querySelector('video')
let btn = document.getElementById('play-pause')
let btnMute = document.getElementById('mute')

//fonction lecture et pause video

function AlternPlayPause() {

    if(video.paused){
        btn.className="pause";
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }

}
//action click bouton appel de la function
btn.onclick = function(){
    AlternPlayPause();
}
// bouton coupure son

//declaration evenement click bouton et condition boolean
btnMute.addEventListener('click', function(){

    if(video.muted){
        video.muted = false;
        btnMute.innerHTML = "Mute";
    } else {
        video.muted = true;
        btnMute.innerHTML = "Unmute";
    }

})