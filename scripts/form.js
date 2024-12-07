// Dynamically set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
];
  
// Populate the Product Name select options
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

// Track review count in localStorage
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("review.html")) {
        const reviewCountKey = "reviewCount";
        let reviewCount = parseInt(localStorage.getItem(reviewCountKey)) || 0;
        reviewCount += 1;
        localStorage.setItem(reviewCountKey, reviewCount);

        const reviewCountDisplay = document.getElementById("reviewCount");
        if (reviewCountDisplay) {
            reviewCountDisplay.textContent = reviewCount;
        }
    }
});