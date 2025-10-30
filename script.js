// DOM elements ko select karna
const player = document.querySelector('.music-player');
const playPauseBtn = document.querySelector('#play-pause-btn');
const playIcon = document.querySelector('#play-icon');

// Flag check karne ke liye ki music play ho raha hai ya nahi
let isPlaying = false;

// Function jo play/pause ko toggle karega
function togglePlay() {
    if (isPlaying) {
        // Agar play ho raha hai, toh pause karo
        player.classList.remove('playing'); // spin animation rokne ke liye
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        isPlaying = false;
    } else {
        // Agar paused hai, toh play karo
        player.classList.add('playing'); // spin animation start karne ke liye
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        isPlaying = true;
    }
}

// Play button pe click listener add karna
playPauseBtn.addEventListener('click', togglePlay);