"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

//Display of categrory as a slide
document.addEventListener("DOMContentLoaded", function () {
  var CategoryItemContainer = document.querySelector(
    ".category-item-container"
  );

  fetch(`search_lib.php`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const resultsArray = data.results;
      displayLibResults(resultsArray);
    });

  function displayLibResults(data) {
    CategoryItemContainer.innerHTML = "";

    if (data.length === 0) {
      CategoryItemContainer.innerHTML = `
          <div class="category-item">
                      <div class="category-img-box">
                          <img src="library_icons/close.png" alt="No Libraries Found" width="30">
                      </div>

                      <div class="category-content-box">

                          <div class="category-content-flex">
                              <h3 class="category-item-title">No Libraries Found</h3>

                              <p class="category-item-amount">(X)</p>
                          </div>

                          <a class="category-btn">Come back Later</a>

                      </div>

                  </div>
                  `;
      return;
    }

    data.forEach((result) => {
      const CategoryItem = document.createElement("div");
      CategoryItem.classList.add("category-item");
      CategoryItem.innerHTML = `
                  <div class="category-img-box">
                          <img src="library_icons/${result.Lib_icon}" alt="${result.Lib_name}" width="30">
                      </div>

                      <div class="category-content-box">

                          <div class="category-content-flex">
                              <h3 class="category-item-title">${result.Lib_name}</h3>

                              <p class="category-item-amount">${result.Count}</p>
                          </div>

                          <a href="${result.Lib_name}.html?Id=${result.Lib_Id}" class="category-btn">Show More</a>

                      </div>
              `;

      CategoryItemContainer.appendChild(CategoryItem);
    });
  }
});

//Display of categrory as a slide
document.addEventListener("DOMContentLoaded", function () {
  var CategorywithSubcontainer = document.querySelector(
    ".sidebar-menu-category-list"
  );

  fetch(`searchforall.php`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const resultsArray = data.results;
      displayCatgeorywithSub(resultsArray);
    });

  function displayCatgeorywithSub(data) {
    CategorywithSubcontainer.innerHTML = "";

    if (Object.keys(data).length === 0) {
      CategorywithSubcontainer.innerHTML = `
      <li class="sidebar-menu-category">

      <button class="sidebar-accordion-menu" data-accordion-btn>

          <div class="menu-title-flex">
              <img src="./assets/images/icons/dress.svg" alt="clothes" width="20" height="20"
                  class="menu-title-img">

              <p class="menu-title">No thing here</p>
          </div>

          <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
          </div>

      </button>

      <ul class="sidebar-submenu-category-list" data-accordion>

          <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                  <p class="product-name">X</p>
                  <data value="X" class="stock" title="Available Stock">X</data>
              </a>
          </li>
      </ul>

  </li>
                  `;
      return;
    }

    for (const categoryName in data) {
      const categoryData = data[categoryName];

      const sidebar_menu_category = document.createElement("li");
      sidebar_menu_category.classList.add("sidebar-menu-category");
      const sidebar_accordion_menu = document.createElement("button");
      sidebar_accordion_menu.classList.add("sidebar-accordion-menu");
      const menu_title_flex = document.createElement("div");
      menu_title_flex.classList.add("menu-title-flex");
      const menu_title_img = document.createElement("img");
      menu_title_img.classList.add("menu-title-img");
      menu_title_img.style.width = "20px";
      menu_title_img.style.height = "20px";
      menu_title_img.src = `category_icons/${categoryData.Cat_icon}`;
      const menu_title = document.createElement("p");
      menu_title.classList.add("menu-title");
      menu_title.textContent = `${categoryData.Cat_Cat_name}`;
      const div = document.createElement("div");
      const ion_icon_add = document.createElement("ion-icon");
      ion_icon_add.classList.add("add-icon");
      ion_icon_add.name = "add-outline";
      const ion_icon_remove = document.createElement("ion-icon");
      ion_icon_remove.classList.add("remove-icon");
      ion_icon_remove.name = "remove-outline";
      const sidebar_submenu_category_list = document.createElement("ul");
      sidebar_submenu_category_list.classList.add(
        "sidebar-submenu-category-list"
      );

      categoryData.products.forEach((product) => {
        const sidebar_submenu_category = document.createElement("li");
        sidebar_submenu_category.classList.add("sidebar-submenu-category");
        const sidebar_submenu_title = document.createElement("a");
        sidebar_submenu_title.classList.add("sidebar-submenu-title");
        sidebar_submenu_title.href = "#";
        const product_name = document.createElement("p");
        product_name.classList.add("product-name");
        product_name.textContent = product.name;
        const stock = document.createElement("data");
        stock.classList.add("stock");
        stock.value = product.stock;
        stock.textContent = product.stock;
        stock.title = "Available Stock";

        sidebar_submenu_title.appendChild(product_name);
        sidebar_submenu_title.appendChild(stock);
        sidebar_submenu_category_list.appendChild(sidebar_submenu_category);
        sidebar_submenu_category.appendChild(sidebar_submenu_title);
      });

      div.appendChild(ion_icon_add);
      div.appendChild(ion_icon_remove);
      menu_title_flex.appendChild(menu_title);
      menu_title_flex.appendChild(menu_title_img);
      sidebar_accordion_menu.appendChild(menu_title_flex);
      sidebar_accordion_menu.appendChild(div);
      sidebar_menu_category.appendChild(sidebar_accordion_menu);
      sidebar_menu_category.appendChild(sidebar_submenu_category_list);

      CategorywithSubcontainer.appendChild(sidebar_menu_category);
      // Add event listeners for the toggle icons
      ion_icon_add.addEventListener("click", function () {
        ion_icon_remove.style.display = "block";
        ion_icon_add.style.display = "none";
        sidebar_submenu_category_list.classList.add("active");
      });

      ion_icon_remove.addEventListener("click", function () {
        ion_icon_remove.style.display = "none";
        ion_icon_add.style.display = "block";
        sidebar_submenu_category_list.classList.remove("active");
      });
    }
  }
});

//Display best sellers
document.addEventListener("DOMContentLoaded", function () {
  var showcase_container = document.getElementById("best_seller");

  fetch(`search_goods.php`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const resultsArray = data.results;
      // Limit the results to the top 4 best sellers
      const bestSellers = resultsArray.slice(0, 4);
      displayGoods(bestSellers);
    });

  function displayGoods(data) {
    showcase_container.innerHTML = "";

    if (data.length === 0) {
      showcase_container.innerHTML = `
      <div class="showcase">
        <a href="#" class="showcase-img-box">
          <img src="./img/error.png" alt="nothing" width="75" height="75" class="showcase-img">
        </a>
        <div class="showcase-content">
          <a href="#">
            <h4 class="showcase-title">No clothes here</h4>
          </a>
          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>
          <div class="price-box">
            <del>$0.00</del>
            <p class="price">$0.00</p>
          </div>
        </div>
      </div>`;
      return;
    }

    data.forEach((result) => {
      var showcase = document.createElement("div");
      showcase.classList.add("showcase");
      var showcase_img_box = document.createElement("a");
      showcase_img_box.classList.add("showcase-img-box");
      var showcase_img = document.createElement("img");
      showcase_img.classList.add("showcase-img");
      showcase_img.src = `${result.Image}/first_image.jpg`;
      showcase_img.alt = `${result.product_name}`;
      showcase_img.style.width = "75px";
      showcase_img.style.height = "75px";

      var showcase_content = document.createElement("div");
      showcase_content.classList.add("showcase-content");
      showcase_content.innerHTML = `
      <div class="showcase-content">
        <a href="#">
          <h4 class="showcase-title">${result.product_name}</h4>
        </a>
        <div class="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>
        <div class="price-box">
          <del>$${result.actual_price}</del>
          <p class="price">$${result.sell_price}</p>
        </div>
      </div>`;

      showcase_img_box.appendChild(showcase_img);
      showcase.appendChild(showcase_img_box);
      showcase.appendChild(showcase_content);
      showcase_container.appendChild(showcase);
    });
  }
});

//Display of new arrivals
document.addEventListener("DOMContentLoaded", function () {
  var new_arrival = document.querySelector("#new_arrival");
  var h2 = document.createElement("h2");
  h2.classList.add("title");
  h2.textContent = "New Arrivals";
  var showcase_wrapper = document.createElement("div");
  showcase_wrapper.classList.add("showcase-wrapper", "has-scrollbar");
  fetch(`search_goods.php`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const resultsArray = data.results;

      // Clear any existing content in new_arrival
      new_arrival.innerHTML = "";

      if (resultsArray.length === 0) {
        new_arrival.innerHTML = `
        <h2 class="title">New Arrivals</h2>

        <div class="showcase-wrapper has-scrollbar">

            <div class="showcase-container">

                <div class="showcase">

                    <a href="#" class="showcase-img-box">
                        <img src="./img/error.png"
                            alt="Nothing here" width="70" class="showcase-img">
                    </a>

                    <div class="showcase-content">

                        <a href="#">
                            <h4 class="showcase-title">Nothing here</h4>
                        </a>

                        <a href="#" class="showcase-category">Clothes</a>

                        <div class="price-box">
                            <p class="price">$0.00</p>
                            <del>$0.00</del>
                        </div>
                    </div>
                </div>
            </div>

            <div class="showcase-container">

                <div class="showcase">

                    <a href="#" class="showcase-img-box">
                        <img src="./img/error.png"
                            alt="Nothing here" class="showcase-img" width="70">
                    </a>

                    <div class="showcase-content">

                        <a href="#">
                            <h4 class="showcase-title">Nothing here</h4>
                        </a>

                        <a href="#" class="showcase-category">Winter wear</a>

                        <div class="price-box">
                            <p class="price">$0.00</p>
                            <del>$0.00</del>
                        </div>

                    </div>

                </div>                       
            </div>

        </div>
        `;
      } else {
        // Split the data into two groups of four
        const firstGroup = resultsArray.slice(0, 4);
        const secondGroup = resultsArray.slice(4, 8);

        // Create two showcase containers
        const showcaseContainer1 = createShowcaseContainer(firstGroup);
        const showcaseContainer2 = createShowcaseContainer(secondGroup);

        // Append showcase containers to the new_arrival element
        showcase_wrapper.appendChild(showcaseContainer1);
        showcase_wrapper.appendChild(showcaseContainer2);

        // Append showcase_wrapper to new_arrival
        new_arrival.appendChild(h2);
        new_arrival.appendChild(showcase_wrapper);
      }
    });
});

function createShowcaseContainer(group) {
  const showcaseContainer = document.createElement("div");
  showcaseContainer.classList.add("showcase-container");

  group.forEach((result) => {
    var showcase = document.createElement("div");
    showcase.classList.add("showcase");
    var showcase_img_box = document.createElement("a");
    showcase_img_box.classList.add("showcase-img-box");
    var showcase_img = document.createElement("img");
    showcase_img.classList.add("showcase-img");
    showcase_img.src = `${result.Image}/first_image.jpg`;
    showcase_img.alt = `${result.product_name}`;
    showcase_img.style.width = "70px";
    showcase_img.style.height = "70px";

    var showcase_content = document.createElement("div");
    showcase_content.classList.add("showcase-content");
    showcase_content.innerHTML = `
      <a href="#">
        <h4 class="showcase-title">${result.product_name}</h4>
      </a>
      <a href="#" class="showcase-category">${result.sub_category}</a>
      <div class="price-box">
        <p class="price">$${result.actual_price}</p>
        <del>$${result.sell_price}</del>
      </div>
    `;

    showcase_img_box.appendChild(showcase_img);
    showcase.appendChild(showcase_img_box);
    showcase.appendChild(showcase_content);
    showcaseContainer.appendChild(showcase);
  });

  return showcaseContainer;
}

// Display random goods in toast notifications
document.addEventListener("DOMContentLoaded", function () {
  const toastContainer = document.getElementById("toast_container");
  fetch(`search_goods.php`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const resultsArray = data.results;

      // Function to display random goods in toast notifications
      function displayRandomGoodsInToasts() {
        toastContainer.innerHTML = "";

        // Generate a random index to select random goods
        function getRandomIndex(max) {
          return Math.floor(Math.random() * max);
        }

        // Create a random selection of goods (e.g., 9 random goods)
        const randomGoods = [];
        const numberOfRandomGoods = 9; // You can change this number as needed

        for (let i = 0; i < numberOfRandomGoods; i++) {
          const randomIndex = getRandomIndex(resultsArray.length);
          randomGoods.push(resultsArray[randomIndex]);
        }

        // Create and append toast notifications for the random goods
        randomGoods.forEach((result) => {
          const toast = document.createElement("div");
          toast.classList.add("notification-toast");
          toast.setAttribute("data-toast", "");

          toast.innerHTML = `
            <button class="toast-close-btn" data-toast-close>
                <ion-icon name="close-outline"></ion-icon>
            </button>

            <div class="toast-banner">
                <img src="${result.Image}/first_image.jpg" alt="${result.product_name}" width="80" height="70">
            </div>

            <div class="toast-detail">
                <p class="toast-message">
                    Someone in new just bought
                </p>
                <p class="toast-title">
                    ${result.product_name}
                </p>
                <p class="toast-meta">
                    <time datetime="PT2M">2 Minutes</time> ago
                </p>
            </div>
          `;

          toastContainer.appendChild(toast);
        });
      }

      // Initial display of random goods
      displayRandomGoodsInToasts();

      // Display random goods every 15 seconds
      setInterval(displayRandomGoodsInToasts, 15000); // 15 seconds
    });
});
