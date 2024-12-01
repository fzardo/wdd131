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

    // Initially set the correct display based on the current screen size
    handleMenuDisplay();

    // Add event listener for screen resizing
    window.addEventListener('resize', handleMenuDisplay);
});

// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Columbia South Carolina",
      location: "Columbia, South Carolina",
      dedicated: "1999, October, 16–17",
      area: 10700,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-south-carolina/400x250/columbia-temple-768161-wallpaper.jpg"
    },
    {
      templeName: "San Antonio, Texas",
      location: "San Antonio, Texas",
      dedicated: "2005, May, 22",
      area: 16800,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-antonio-texas/400x250/san-antonio-texas-lds-temple-1163255-wallpaper.jpg"
    },
    {
      templeName: "Quetzaltenango, Guatemala",
      location: "Quetzaltenango, Guatemala",
      dedicated: "2011, December, 11",
      area: 21085,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quetzaltenango-guatemala/400x250/quetzaltenango-guatemala-temple-lds-893073-wallpaper.jpg"
    }
];
  
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector(".grid-container");

    // Function to display filtered temples
    function displayTemples(temples) {
        gridContainer.innerHTML = ""; // Clear existing content

        temples.forEach((temple) => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = `${temple.templeName} Temple`;

            const figcaption = document.createElement("figcaption");
            figcaption.innerHTML = `
                <strong>${temple.templeName}</strong><br>
                Location: ${temple.location}<br>
                Dedicated: ${temple.dedicated}<br>
                Area: ${temple.area} sq. ft.
            `;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            gridContainer.appendChild(figure);
        });
    }

    // Function to filter temples based on criteria
    function filterTemples(criteria) {
        let filteredTemples;

        switch (criteria) {
            case "Old":
                filteredTemples = temples.filter(
                    (temple) => new Date(temple.dedicated).getFullYear() < 1900
                );
                break;
            case "New":
                filteredTemples = temples.filter(
                    (temple) => new Date(temple.dedicated).getFullYear() > 2000
                );
                break;
            case "Large":
                filteredTemples = temples.filter((temple) => temple.area > 90000);
                break;
            case "Small":
                filteredTemples = temples.filter((temple) => temple.area < 10000);
                break;
            default:
                filteredTemples = temples; // Show all temples for "Home" or default
        }

        displayTemples(filteredTemples);
    }

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll("#navMenu a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            const criteria = link.textContent; // Get the link text to determine the filter
            filterTemples(criteria);
        });
    });

    // Initially display all temples
    displayTemples(temples);
});