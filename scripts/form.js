const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

function populateProducts() {
    const select = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

function updateYear() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
}

function updateLastModified() {
    document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();
}

document.addEventListener("DOMContentLoaded", () => {
    populateProducts();
    updateYear();
    updateLastModified();
});

document.addEventListener('DOMContentLoaded', function() {
    const starRating = document.querySelector('.star-rating');
    const stars = starRating.querySelectorAll('label');
  
    stars.forEach((star, index) => {
      star.addEventListener('mouseover', function() {
        // Highlight stars on hover
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('hovered');
        }
        for (let i = index + 1; i < stars.length; i++) {
          stars[i].classList.remove('hovered');
        }
      });
  
      star.addEventListener('click', function() {
        // Set the selected rating on click
        const rating = this.querySelector('input').value;
        console.log(`Rated: ${rating} stars`); // Or update a hidden field
  
        // Visually "select" the stars
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.add('selected');
          } else {
            s.classList.remove('selected');
          }
        });
      });
    });
  
    // Reset hover effect when mouse leaves the star rating area
    starRating.addEventListener('mouseleave', function() {
      stars.forEach(star => star.classList.remove('hovered'));
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.product-review-body');
    form.addEventListener('submit', function(event) {
      let isValid = true;
  
      // Example: Check if a rating is selected
      const ratingRadios = document.querySelectorAll('input[name="rating"]');
      let ratingSelected = false;
      ratingRadios.forEach(radio => {
        if (radio.checked) {
          ratingSelected = true;
        }
      });
      if (!ratingSelected) {
        alert("Please select an overall rating.");
        event.preventDefault(); // Prevent form submission
        isValid = false;
      }
  
      // Example: Check if the written review is too long
      const reviewText = document.getElementById('written-review').value;
      if (reviewText.length > 500) {
        alert("Written review must be less than 500 characters.");
        event.preventDefault();
        isValid = false;
      }
  
      // Add more validation checks as needed
  
      return isValid; // Only submit if isValid is true
    });
  });
  
