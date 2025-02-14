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

        // You can add more sophisticated email validation here if needed

        // Display a thank you message or handle the submission data as needed
        alert('Thank you for signing up, ' + name + '! We\'ll keep you updated at ' + email + '.');

        // Optionally, clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    });
});
