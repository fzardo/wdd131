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
    displayReviews(games);
});

// Function to display reviews
function displayReviews(reviews) {
    const reviewsContainer = document.querySelector(".reviews-container");
    reviewsContainer.innerHTML = ""; // Clear existing content

    reviews.forEach((review) => {
        // Create a review-card div
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        // Create and set up the content for the game name and review
        const gameNameElement = document.createElement("h3");
        gameNameElement.textContent = review.gameName;

        const reviewElement = document.createElement("p");
        reviewElement.textContent = review.review || "No review available."; // Display default text if review is empty

        // Append the content to the review card
        reviewCard.appendChild(gameNameElement);
        reviewCard.appendChild(reviewElement);

        // Append the review card to the reviews container
        reviewsContainer.appendChild(reviewCard);
    });
}