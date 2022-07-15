const videoPlayer = document.querySelector('#videoPlayer');
const myVideo = document.querySelector('#myVideo');


function stopPlayer(){
    videoPlayer.style.display = 'none';
}

function playVideo(file){
    myVideo.src = file
    videoPlayer.style.display = 'block'
}