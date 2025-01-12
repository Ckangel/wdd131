// Get current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get last modified date
const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString()}`;
