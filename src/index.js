
    const iframe = document.getElementById("spline-iframe");

    // Prevent scrolling of the parent document when the iframe is scrolled
    iframe.addEventListener("mouseenter", () => {
      document.body.style.overflow = "hidden"; // Disable scrolling on the main page
    });

    iframe.addEventListener("mouseleave", () => {
      document.body.style.overflow = "auto";
    });

    const video = document.getElementById("video");
    const playButton = document.getElementById("playButton");
    const playPauseButton = document.getElementById("playPauseButton");
    const muteButton = document.getElementById("muteButton");
    const volumeControl = document.getElementById("volumeControl");
    const controls = document.getElementById("controls");
    
    playButton.addEventListener("click", () => {
      video.play();
      playButton.style.display = "none";
      controls.classList.remove("opacity-0", "hidden"); // Show the controls
      controls.classList.add("opacity-50"); // Ensure controls are visible
    });
    
    playPauseButton.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
      } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
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

    const audioElement = document.getElementById('background-music'); // Change this ID to match the audio element
    const muteButtond = document.getElementById('muteButtond');
    const muteText = document.getElementById('muteText');
    
    function toggleAudio() {
      if (audioElement.muted) {
        audioElement.muted = false;
        muteText.textContent = 'Mute';
      } else {
        audioElement.muted = true;
        muteText.textContent = 'Unmute';
      }
    }
    
    // Play audio on first click
    document.addEventListener('click', function() {
        if (!audioElement.paused) return; // Prevent multiple play attempts
        audioElement.play().catch(err => {
            console.error('Error playing audio:', err);
        });
    });
