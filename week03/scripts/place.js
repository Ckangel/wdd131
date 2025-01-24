document.addEventListener("DOMContentLoaded", () => {
    // Example to dynamically update weather data
    const weatherData = {
        temperature: "28°C",
        conditions: "Partly Cloudy",
        wind: "15 km/h",
        windChill: "26°C"
    };

    const weatherTable = document.getElementById("weather");
    const rows = weatherTable.querySelectorAll("tbody tr");
    
    rows[0].cells[1].textContent = weatherData.temperature;
    rows[1].cells[1].textContent = weatherData.conditions;
    rows[2].cells[1].textContent = weatherData.wind;
    rows[3].cells[1].textContent = weatherData.windChill;
});

document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.getElementById("footer-content");

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Get the last modified date
    const lastModified = new Date(document.lastModified);

    // Format the date and time
    const options = { year: "numeric", month: "long", day: "numeric" };
    const modifiedDate = lastModified.toLocaleDateString(undefined, options);
    const modifiedTime = lastModified.toLocaleTimeString();

    // Set the footer content
    footerElement.innerHTML = `
        @${currentYear} 💕 Charles Kingsley Ajeigbe 💕 Accra - Ghana 💕
        <br>All Rights Reserved
        <br>Last Modified: ${modifiedDate}, ${modifiedTime}
    `;
});
