// Dynamically set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    function handleMenuDisplay() {
        // Check if the screen width is 640px or greater
        if (window.innerWidth >= 640) {
            // Display the menu with flex layout when the screen is wide enough
            navMenu.style.display = 'flex';
            hamburger.style.display = 'none'; // Hide the hamburger button
        } else {
            // Show hamburger menu when the screen is smaller than 640px
            navMenu.style.display = 'none'; // Hide the nav menu initially
            hamburger.style.display = 'block'; // Show the hamburger button

            // Add hover event listener to hamburger button for showing the nav menu
            hamburger.addEventListener('mouseenter', function() {
                navMenu.style.display = 'block'; // Show nav menu
            });

            // Hide nav menu when mouse leaves the hamburger button
            hamburger.addEventListener('mouseleave', function() {
                navMenu.style.display = 'none'; // Hide nav menu
            });
        }
    }

    // Initially set the correct display based on the current screen size
    handleMenuDisplay();

    // Add event listener for screen resizing
    window.addEventListener('resize', handleMenuDisplay);

    // // Set up the event listener for the hamburger menu button
    // hamburger.addEventListener('click', function() {
    //     // Check if the menu is currently visible or not
    //     if (navMenu.style.display === 'none' || navMenu.style.display === '') {
    //         // If it's hidden, display the menu
    //         navMenu.style.display = 'block';
    //         hamburger.innerHTML = '&#10006;'; // Change to 'X' symbol
    //     } else {
    //         // If it's visible, hide the menu
    //         navMenu.style.display = 'none';
    //         hamburger.innerHTML = '&#9776;'; // Change back to hamburger symbol
    //     }
    // });
});