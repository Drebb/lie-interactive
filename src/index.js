
const iframe1 = document.getElementById("spline-iframe");

const iframe2 = document.getElementById("spline-iframe2");

iframe1.addEventListener("mouseenter", () => {
    document.body.style.overflow = "hidden";
});

iframe1.addEventListener("mouseleave", () => {
    document.body.style.overflow = "auto";
});

iframe2.addEventListener("mouseenter", () => {
    document.body.style.overflow = "hidden";
});

iframe2.addEventListener("mouseleave", () => {
    document.body.style.overflow = "auto";
});

const video = document.getElementById("video");
const playButton = document.getElementById("playButton");
const playPauseButton = document.getElementById("playPauseButton");
const muteButton = document.getElementById("muteButton");
const volumeControl = document.getElementById("volumeControl");
const controls = document.getElementById("controls");
const audioElement = document.getElementById('background-music');
audioElement.volume = 0.10;
const muteButtond = document.getElementById('muteButtond');
const muteText = document.getElementById('muteText');

playButton.addEventListener("click", () => {
    video.play();
    playButton.style.display = "none";
    controls.classList.remove("opacity-0", "hidden");
    controls.classList.add("opacity-50");
    audioElement.pause();
});

playPauseButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        audioElement.pause();
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        audioElement.play();
    }
});

muteButton.addEventListener("click", () => {
    video.muted = !video.muted;
    muteButton.innerHTML = video.muted
        ? '<i class="fa-solid fa-volume-mute"></i>'
        : '<i class="fa-solid fa-volume-up"></i>';
});

volumeControl.addEventListener("input", () => {
    video.volume = volumeControl.value;
});

function toggleAudio() {
    if (audioElement.muted) {
        audioElement.muted = false;
        muteText.textContent = 'Mute';
    } else {
        audioElement.muted = true;
        muteText.textContent = 'Unmute';
    }
}


document.addEventListener('click', function() {
    if (!audioElement.paused) return;
    audioElement.play().catch(err => {
        console.error('Error playing audio:', err);
    });
});

video.addEventListener('play', () => {
    audioElement.muted = true;
    muteText.textContent = 'Unmute';
});

video.addEventListener('pause', () => {
    audioElement.muted = false;
    muteText.textContent = 'Mute';
});
