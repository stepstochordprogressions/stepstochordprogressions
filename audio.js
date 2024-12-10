const synth = new Tone.PolySynth(Tone.Synth).toDestination();

function playChord(button) {
    const notes = button.getAttribute('data-note').split(',').map(note => note.trim());
    synth.triggerAttackRelease(notes, '8n').then(() => {
        const overlay = button.closest('.image-container').querySelector('.overlay');
    });
}

document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', () => {
        Tone.start();
        playChord(button);
    });
});

document.addEventListener('mousedown', () => {
    if (!Tone.context.state || Tone.context.state === 'closed') {
        Tone.start();
    }
}, { once: true });

document.addEventListener('touchstart', () => {
    if (!Tone.context.state || Tone.context.state === 'closed') {
        Tone.start();
    }
}, { once: true });
