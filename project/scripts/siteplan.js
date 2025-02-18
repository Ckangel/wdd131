document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const grid = document.querySelector(".res-grid");
  const titleContainer = document.querySelector("#title-container");
  const navLinksList = document.querySelectorAll('.nav-links a');

  // Hamburger Menu Functionality
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  }); 

  // Close the hamburger menu on smaller screens after a link is clicked
  if (window.innerWidth <= 768) {
    navLinks.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");
  
  function updateCart() {
    cartItemsElement.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsElement.appendChild(li);
      total += item.price;
    });
    cartTotalElement.textContent = total.toFixed(2);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
      const name = event.target.dataset.name;
      const price = parseFloat(event.target.dataset.price);
      cart.push({ name, price });
      updateCart();
    });
  });
  
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  updateCart();
});

// Function to display cart items in the checkout
function displayCartItems() {
  const cartItems = getCartItems();
  const cartItemsList = document.getElementById('checkout-cart-items');
  const cartTotalElement = document.getElementById('checkout-cart-total');
  let total = 0;
 

  cartItemsList.innerHTML = ''; // Clear existing items
 

  cartItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = `${item.name} - $${item.price}`;
  cartItemsList.appendChild(listItem);
  total += item.price;
  });
 

  cartTotalElement.textContent = total.toFixed(2); // Update total
  }

  // Payment details visibility
  document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
  radio.addEventListener('change', function() {
  document.getElementById('bank-transfer-details').style.display = this.value === 'bank' ? 'block' : 'none';
  document.getElementById('mobile-money-details').style.display = this.value === 'mobile-money' ? 'block' : 'none';
  });
  });

  // Call displayCartItems to populate the cart on page load
  displayCartItems();
  });

  document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu functionality
  const hamburgerButton = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
 

  hamburgerButton.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  });
  });

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
  }
});