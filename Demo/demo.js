const synth = new Tone.PolySynth(Tone.Synth).toDestination();

function playChord(chord) {
    const notes = chord.split(','); 
    synth.triggerAttackRelease(notes, '2n'); 
}

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mousedown', () => {
        const notes = key.getAttribute('data-notes'); 
        playChord(notes);
    });
    key.addEventListener('touchstart', (e) => {
        e.preventDefault(); 
        const notes = key.getAttribute('data-notes');
        playChord(notes);
    });
});

document.addEventListener('mousedown', () => {
    Tone.start();
});
