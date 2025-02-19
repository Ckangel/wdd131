document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Initialize nav links visibility
  navLinks.classList.remove("active"); // Hide nav links initially

  // Hamburger Menu Functionality
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close the hamburger menu on smaller screens after a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });

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

  // Payment details visibility
  document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
    radio.addEventListener('change', function() {
      document.getElementById('bank-transfer-details').style.display = this.value === 'bank' ? 'block' : 'none';
      document.getElementById('mobile-money-details').style.display = this.value === 'mobile-money' ? 'block' : 'none';
    });
  });

  // Footer Functionality
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const lastModifiedElement = document.getElementById("last-modified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
  }
});

