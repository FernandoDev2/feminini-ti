function playVideo() {
    var video = document.getElementById("video-background");
    // Se o vídeo não estiver tocando, ele começa a tocar
    if (video.paused) {
        video.play();
    }
}
