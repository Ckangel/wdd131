// Get current date and time
const now = new Date();
const options = { 
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false // Use 24-hour format; set to true for 12-hour format
};

// Display the formatted date and time
document.getElementById("currentDateTime").textContent = now.toLocaleString('en-US', options);

// Set the year in the copyright notice
document.getElementById("year").textContent = now.getFullYear();