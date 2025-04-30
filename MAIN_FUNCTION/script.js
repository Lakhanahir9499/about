document.addEventListener('DOMContentLoaded', () => {
    // Get the video and sound button elements
    const video = document.getElementById('bg-video');
    const soundBtn = document.getElementById('sound-btn');
    
    // Mute the video initially to comply with autoplay policies
    if (video) {
        video.muted = true;
    }

    // Function to unmute the video and hide the sound button
    const enableSound = () => {
        if (video) {
            video.muted = false;
        }
        if (soundBtn) {
            soundBtn.classList.add('hidden');
        }
    };

    // Unmute on first click anywhere
    let hasClicked = false;
    document.addEventListener('click', () => {
        if (!hasClicked) {
            enableSound();
            hasClicked = true;
        }
    });

    // Unmute when clicking the sound button
    if (soundBtn) {
        soundBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the document click event
            enableSound();
        });
    }

    // Load confetti effect
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    document.body.appendChild(script);

    script.onload = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#00ffcc', '#ff00ff', '#00ccff']
        });
    };
});