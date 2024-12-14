// Array of Game Objects
const games = [
    {
        gameName: "Genshin Impact",
        genre: "RPG, Open World",
        launch: "2020, September, 28",
        review: "9/10 - Amazing - An incredible open-world and addictive exploration make Genshin Impact anime-zing adventure. - IGN",
        imageUrl: "images/genshin-impact.jpg",
        tips: "1- Collect Everything You See. 2- Engage Deeply With the Story. 3- Get to Know the Wishing and Banner Systems. 4- Prioritize Character Upgrades Wisely."
    },
    {
        gameName: "Infinity Nikki",
        genre: "Aventure, Dress-up",
        launch: "2024, December, 5",
        review: "9/10 - Amazing - Infinity Nikki has deep open-world exploration, a quirky story, and some of the most beautiful in-game outfits you'll ever see – you just have to be ready to navigate a maze of menus to get them. - IGN",
        imageUrl: "images/infinity-nikki.jpg",
        tips: "1- Stop And Grab The Whimstars. 2- Stock Up On Stuff. 3- Enjoy Regular Shopping Sprees! 4- Bring The Best Fashion Or Come Back Later. 5- Improve Clothes To Increase Their Stats."
    },
    {
        gameName: "Pokemon TCG Pocket",
        genre: "TCG",
        launch: "2024, October, 30",
        review: "7.7/10",
        imageUrl: "images/pokemon-tcg-pocket.jpg",
        tips: "When building your deck, try focusing on only one element."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    displayFeatured(games);
});

// Function to display games
function displayFeatured(featureds) {
    const featuredContainer = document.querySelector(".featured-container"); 
    featuredContainer.innerHTML = ""; // Clear existing content

    featureds.forEach((featured) => {
        // Create a game-card div
        const featuredCard = document.createElement("div");
        featuredCard.classList.add("featured-card");

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = featured.imageUrl;
        img.alt = `${featured.gameName} Game`;
        img.loading = "lazy";

        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = `
            <strong>${featured.gameName}</strong><br>
            Genre: ${featured.genre}<br>
            Launch: ${featured.launch}<br>
        `;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        // Append the figure to the game-card
        featuredCard.appendChild(figure);

        // Append the game-card to the game container
        featuredContainer.appendChild(featuredCard);
    });
}