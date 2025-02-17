 // Footer Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Set the current year in the footer  
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearElement) {
    yearElement.textContent = currentYear;
  } else {
    console.log("Element with ID 'year' not found.");
  }

  // Set the last modified date in the footer
  const lastModifiedElement = document.getElementById("last-modified");
  if (lastModifiedElement) {
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = lastModifiedDate;
  } else {
    console.log("Element with ID 'last-modified' not found.");
  }
});