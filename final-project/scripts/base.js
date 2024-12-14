// Dynamically set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

document.addEventListener('DOMContentLoaded', () => {
    // Control music play/pause
    const audio = document.getElementById('backgroundMusic');
    const playPauseButton = document.getElementById('playPauseButton');
    const playIcon = document.querySelector('#playPauseButton img[alt="Playing"]');
    let isManuallyPaused = false;

    audio.volume = 0.25; // Set to 25% volume

    // Start with the music paused and pause icon displayed
    audio.pause();
    playIcon.src = 'images/sound-off.svg';
    playIcon.alt = 'Paused'; // Update the starting icon to be "Paused"

    // Event listener for play/pause button
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            isManuallyPaused = false; // Reset flag when user resumes playing
        } else {
            isManuallyPaused = true; // Set flag when user manually pauses
        }
        playPause();
    });

    // Pause the audio if the page is not the main tab
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            audio.pause(); // Always pause when the tab is not visible
        } else if (!isManuallyPaused) {
            audio.play(); // Resume ONLY if the user has not manually paused
        }
        updatePlayIcon(); // Update the play/pause button icon
    });

    function playPause() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updatePlayIcon();
    }
    
    function updatePlayIcon() {
        if (audio.paused) {
            playIcon.src = 'images/sound-off.svg';
            playIcon.alt = 'Paused';
        } else {
            playIcon.src = 'images/sound-on.svg';
            playIcon.alt = 'Playing';
        }
    }

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Initially set the correct display based on the current screen size
    handleMenuDisplay();

    // Add event listener for screen resizing
    window.addEventListener('resize', handleMenuDisplay);

    function handleMenuDisplay() {
        // Check if the screen width is 640px or greater
        if (window.innerWidth >= 402) {
            // Display the menu with flex layout when the screen is wide enough
            navMenu.style.display = 'flex';
            hamburger.style.display = 'none'; // Hide the hamburger button
        }
        else {
            // Show hamburger menu when the screen is smaller than 640px
            navMenu.style.display = 'none'; // Hide the nav menu initially
            hamburger.style.display = 'block'; // Show the hamburger button

            // Add hover event listener to hamburger button for showing the nav menu
            hamburger.addEventListener('mouseenter', function() {
                navMenu.style.display = 'block'; // Show nav menu
            });

            // Hide nav menu when mouse leaves the hamburger button
            navMenu.addEventListener('mouseleave', function() {
                navMenu.style.display = 'none'; // Hide nav menu
            });
        }
    }
});