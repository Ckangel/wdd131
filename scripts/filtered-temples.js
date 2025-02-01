    gridContainer.appendChild(item);
    function filterTemples(filterType) {
    let filteredTemples;

    switch (filterType) {
      case 'old':
          filteredTemples = temples.filter(temple => temple.yearBuilt < 1900);
          break;
      case 'new':
          filteredTemples = temples.filter(temple => temple.yearBuilt > 2000);
          break;
      case 'large':
          filteredTemples = temples.filter(temple => temple.size > 90000);
          break;
      case 'small':
          filteredTemples = temples.filter(temple => temple.size < 10000);
          break;
      case 'all':
      default:
          filteredTemples = temples; // Show all temples
          break;
    }

    displayTemples(filteredTemples);
    }

    function displayTemples(temples) {
    const templeList = document.getElementById("templeList");
    templeList.innerHTML = ""; // Clear existing list

    temples.forEach(temple => {
      const li = document.createElement("li");
      li.textContent = `${temple.name} - Built in ${temple.yearBuilt} - Size: ${temple.size} sq ft`;
      templeList.appendChild(li);
    });
    }

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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Johannesburg South Africa Temple",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24-25",
        area: 19184,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
    {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8-14",
        area: 104000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
    },
    {
        templeName: "Freiberg Germany Temple",
        location: "Freiberg, Germany",
        dedicated: "1985, June, 28-30",
        area: 21500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple/freiberg-germany-temple-16459-main.jpg"
    },
    {
      templeName: "Frankfurt Germany Temple",
      location: "Frankfurt, Germany",
      dedicated: "1987, August, 28-30",
      area: 32895,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
    },
    ]

    const gridContainer = document.querySelector('.grid-container');
    temples.forEach(temple => {
    const item = document.createElement('div');
    item.className = 'grid-item';
    item.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}"> 
    `;
    });
    