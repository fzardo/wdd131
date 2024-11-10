// Get current year and set it in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date of the document and set it in the footer's second paragraph
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;