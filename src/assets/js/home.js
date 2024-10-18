document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".search-form");
    const searchBtn = document.querySelector(".btn-search");

    searchBtn.addEventListener("click", function (e) {
        e.preventDefault();
        searchForm.classList.toggle("active");
        if (searchForm.classList.contains("active")) {
            searchForm.querySelector(".form-control").focus();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Product scroll functionality
    const featuredContainer = document.querySelector(
        "#featured-products .product-scroll-container"
    );
    const newlyUpdatedContainer = document.querySelector(
        "#newly-updated-products .product-scroll-container"
    );

    const scrollLeftBtn = document.querySelector(
        "#featured-products #scrollLeft"
    );
    const scrollRightBtn = document.querySelector(
        "#featured-products #scrollRight"
    );
    const scrollLeftBtnNew = document.querySelector(
        "#newly-updated-products #scrollLeft"
    );
    const scrollRightBtnNew = document.querySelector(
        "#newly-updated-products #scrollRight"
    );

    function setupScrollButtons(container, leftBtn, rightBtn) {
        if (leftBtn && rightBtn && container) {
            leftBtn.addEventListener("click", () => {
                container.scrollBy({left: -200, behavior: "smooth"});
            });

            rightBtn.addEventListener("click", () => {
                container.scrollBy({left: 200, behavior: "smooth"});
            });
        }
    }

    setupScrollButtons(featuredContainer, scrollLeftBtn, scrollRightBtn);
    setupScrollButtons(
        newlyUpdatedContainer,
        scrollLeftBtnNew,
        scrollRightBtnNew
    );

    // Tech news functionality
    const newsItems = document.querySelectorAll(".news-item");

    newsItems.forEach((item) => {
        item.addEventListener("click", function () {
            // You can add functionality here, such as opening a modal or navigating to a news article
            console.log(
                "News item clicked:",
                this.querySelector(".news-title").textContent
            );
        });

        item.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });

        item.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // "View All" button functionality
    const viewAllBtn = document.querySelector(".view-all");
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", function (e) {
            e.preventDefault();
            // Add functionality for viewing all news items
            console.log("View all news clicked");
        });
    }
});