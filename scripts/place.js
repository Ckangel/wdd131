document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamically update weather data in the table
    const weatherData = {
        temperature: "28°C",
        conditions: "Partly Cloudy",
        wind: "15 km/h",
        windChill: "26°C"
    };

    const weatherTable = document.getElementById("weather");
    if (weatherTable) {
        const rows = weatherTable.querySelectorAll("tbody tr");
        if (rows.length >= 4) {
            rows[0].cells[1].textContent = weatherData.temperature;
            rows[1].cells[1].textContent = weatherData.conditions;
            rows[2].cells[1].textContent = weatherData.wind;
            rows[3].cells[1].textContent = weatherData.windChill;
        }
    }

    // 2. Update footer content dynamically
    const footerElement = document.getElementById("footer-content");
    if (footerElement) {
        const currentYear = new Date().getFullYear();
        const lastModified = new Date(document.lastModified);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const modifiedDate = lastModified.toLocaleDateString(undefined, options);
        const modifiedTime = lastModified.toLocaleTimeString();

        footerElement.innerHTML = `
            &copy; ${currentYear} 💕 Charles Kingsley Ajeigbe 💕 Accra - Ghana 💕
            <br>All Rights Reserved
            <br>Last Modified: ${modifiedDate}, ${modifiedTime}
        `;
    }
});

// 3. Adjust image source based on screen size on resize
window.addEventListener("resize", function () {
    const svg = document.querySelector(".hero-svg");
    if (svg) {
        const imageSrc = window.innerWidth >= 1024
            ? "images/ghbeach_hero.webp"
            : window.innerWidth >= 768
            ? "images/ghbeach2.webp"
            : "images/ghana_sunset.webp";
        svg.setAttribute("href", imageSrc); // Assuming SVG has `href` for the image
    }
});

// Trigger resize event on page load
window.dispatchEvent(new Event("resize"));
