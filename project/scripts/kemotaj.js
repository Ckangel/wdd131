document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter form');

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Simple validation
        if (!name || !email) {
            alert('Please fill in all fields.');
            return;
        }

        // Display a thank you message or handle the submission data as needed
        alert('Thank you for signing up, ' + name + '! We\'ll keep you updated at ' + email + '.');

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
});

// Footer Functionality
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
if (yearElement) {
  yearElement.textContent = currentYear;
} else {
  console.log("Element with ID 'year' not found.");
}

const lastModifiedElement = document.getElementById("last-modified");
if (lastModifiedElement) {
  const lastModifiedDate = document.lastModified;
  lastModifiedElement.textContent = lastModifiedDate;
} else {
  console.log("Element with ID 'last-modified' not found.");
}
});