const synth = new Tone.PolySynth(Tone.Synth).toDestination();
let isPlaying = false; // Track play/pause state
let isPaused = false; // Track if the sequence is paused
let currentChordIndex = 0; // Current chord index in the sequence
let chords = []; // Chords data
let playTimeout; // Timeout reference for sequencing

// Function to play the next chord in the sequence
async function playChordSequence() {
    if (currentChordIndex >= chords.length) {
        // Stop playback once all chords are played
        stopPlayback();
        return;
    }

    const notes = chords[currentChordIndex].split(',').map(note => note.trim());
    synth.triggerAttackRelease(notes, '8n');
    currentChordIndex++;

    // Continue playing the next chord unless paused
    if (!isPaused) {
        playTimeout = setTimeout(playChordSequence, 500); // Delay between chords
    }
}

// Function to start playback
function startPlayback() {
    isPlaying = true;
    isPaused = false;
    currentChordIndex = 0; // Start from the first chord
    const imageContainer = document.querySelector('.image-container');
    imageContainer.classList.add('active'); // Show overlay
    playChordSequence();
}

// Function to pause playback
function pausePlayback() {
    isPaused = true;
    clearTimeout(playTimeout); // Stop the sequence temporarily
    const imageContainer = document.querySelector('.image-container');
    imageContainer.classList.remove('active'); // Hide overlay
}

// Function to stop playback after completing the sequence
function stopPlayback() {
    isPlaying = false;
    isPaused = false;
    currentChordIndex = 0; // Reset to the start
    clearTimeout(playTimeout);
    const imageContainer = document.querySelector('.image-container');
    imageContainer.classList.remove('active'); // Hide overlay
}

// Toggle play, pause, and resume
function togglePlayPause() {
    if (!isPlaying) {
        // Start playing
        startPlayback();
    } else if (isPaused) {
        // Resume playing
        isPaused = false;
        const imageContainer = document.querySelector('.image-container');
        imageContainer.classList.add('active'); // Show overlay
        playChordSequence();
    } else {
        // Pause playing
        pausePlayback();
    }
}

// Attach event listener for both mouse and touch events
const imageContainer = document.querySelector('.image-container');
chords = imageContainer.getAttribute('data-note').split(';'); // Parse chords from the data-note attribute

imageContainer.addEventListener('click', togglePlayPause);
imageContainer.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default touch behavior
    togglePlayPause();
});

// Initialize Tone.js on first interaction
document.addEventListener('mousedown', () => {
    Tone.start();
}, { once: true });

document.addEventListener('touchstart', () => {
    Tone.start();
}, { once: true });


