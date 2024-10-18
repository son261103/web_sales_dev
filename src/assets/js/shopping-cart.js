document.addEventListener("DOMContentLoaded", function () {
  // Select the relevant elements
  const checkoutBtn = document.querySelector(".checkout-btn"); // Button to place order
  const cartContainer = document.querySelector(".cart-container"); // Cart section
  const orderContainer = document.querySelector(".order-container"); // Order section

  // Make sure the cart container is visible initially, and the order container is hidden
  cartContainer.style.display = "block"; // Show cart on page load
  orderContainer.style.display = "none"; // Hide order form on page load

  // Add an event listener to the "ĐẶT HÀNG NGAY" button to switch views
  checkoutBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Hide the cart container and show the order container
    cartContainer.style.display = "none"; // Hide the cart
    orderContainer.style.display = "block"; // Show the order form
  });

  // When "Quay trở về" is clicked, switch back to the cart
  backToCartBtn.addEventListener("click", function (e) {
    e.preventDefault();
    orderContainer.style.display = "none";
    cartContainer.style.display = "block";
  });
});
