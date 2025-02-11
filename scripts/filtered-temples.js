document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navlinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelectorAll(".nav-links a");
    const hamburgerButton = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const closeButton = document.getElementById("close");
    const grid = document.querySelector(".res-grid");
    const titleContainer = document.querySelector("#title-container");
  
    // Hamburger Menu Functionality
    hamburger.addEventListener("click", () => {
      navlinks.classList.toggle("active");
      hamburger.classList.toggle("active");

    // Temple Data (Moved outside the event listener for better organization)
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
    {
      templeName: "Johannesburg South Africa Temple",
      location: "Johannesburg, South Africa",
      dedicated: "1985, August, 24-25",
      area: 19184,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
  ];

  // Function to Create Temple Cards
  function createTempleCard(filteredTemples, title) {
    grid.innerHTML = ""; 
    updateTitle(title);

    filteredTemples.forEach(temple => {
      const card = document.createElement("section");
      const name = document.createElement("h3");
      const location = document.createElement("p");
      const dedication = document.createElement("p");
      const area = document.createElement("p");
      const img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      grid.appendChild(card);
    });
  }

  // Function to Update Title
  function updateTitle(titleText) {
    titleContainer.innerHTML = `<h2 style="text-align: center; font-weight: bold;">${titleText}</h2>`;
  }

  // Function to Filter Temples
  function filterTemples(filter) {
    let filteredTemples = [];
    let title = "";

    switch (filter) {
        case "old":
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
            title = "Old Temples";
            break;
        case "new":
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
            title = "New Temples";
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            title = "Large Temples";
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            title = "Small Temples";
            break;
        default:
            filteredTemples = temples;
            title = "Home";
    }

    createTempleCard(filteredTemples, title);
}

// Event Listener for Nav Links
navLinksList.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all links
        navLinksList.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked link
        this.classList.add('active');

        // Filter temples based on the data-filter attribute
        const filter = this.getAttribute('data-filter');
        filterTemples(filter);

        // Close the hamburger menu on smaller screens after a link is clicked
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});

// Initial Render
filterTemples("home");

// Footer Functionality
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = document.lastModified;
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
