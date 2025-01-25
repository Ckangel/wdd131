// Get current date and time
const now = new Date();
const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false // Use 24-hour format; set to true for 12-hour format
};

// Display the formatted date and time
document.getElementById("currentDateTime").textContent = now.toLocaleDateString('en-US', options);

// Set the year in the copyright notice
document.getElementById("year").textContent = now.getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    // Toggle the navigation menu
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Set active class on click
    navList.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', function() {
            navList.querySelectorAll('li a').forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
