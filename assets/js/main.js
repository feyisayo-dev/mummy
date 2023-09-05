// Active Menu
document.addEventListener("DOMContentLoaded", function () {
  const addGoodsButton = document.getElementById("add-goods");
  const addLibraryButton = document.getElementById("add-library");
  const addCategoryButton = document.getElementById("add-category");
  const addSubCategoryButton = document.getElementById("add-sub-category");
  const addingGoodsSection = document.querySelector(".adding_goods");
  const addingLibrariesSection = document.querySelector(".adding_libraries");
  const addingcategoriesSection = document.querySelector(".adding_category");
  const addingSubcategoriesSection = document.querySelector(
    ".adding_sub_category"
  );

  addGoodsButton.addEventListener("click", function () {
    addingGoodsSection.style.display = "block";
    addingLibrariesSection.style.display = "none";
    addingcategoriesSection.style.display = "none";
    addingSubcategoriesSection.style.display = "none";
    addGoodsButton.classList.add("active");
    addLibraryButton.classList.remove("active");
    addCategoryButton.classList.remove("active");
    addSubCategoryButton.classList.remove("active");
  });

  addLibraryButton.addEventListener("click", function () {
    addingLibrariesSection.style.display = "block";
    addingGoodsSection.style.display = "none";
    addingcategoriesSection.style.display = "none";
    addingSubcategoriesSection.style.display = "none";
    addLibraryButton.classList.add("active");
    addGoodsButton.classList.remove("active");
    addCategoryButton.classList.remove("active");
    addSubCategoryButton.classList.remove("active");
  });

  addCategoryButton.addEventListener("click", function () {
    addingLibrariesSection.style.display = "none";
    addingGoodsSection.style.display = "none";
    addingcategoriesSection.style.display = "block";
    addingSubcategoriesSection.style.display = "none";
    addLibraryButton.classList.remove("active");
    addGoodsButton.classList.remove("active");
    addCategoryButton.classList.add("active");
    addSubCategoryButton.classList.remove("active");
  });

  addSubCategoryButton.addEventListener("click", function () {
    addingLibrariesSection.style.display = "none";
    addingGoodsSection.style.display = "none";
    addingcategoriesSection.style.display = "none";
    addingSubcategoriesSection.style.display = "block";
    addLibraryButton.classList.remove("active");
    addGoodsButton.classList.remove("active");
    addCategoryButton.classList.remove("active");
    addSubCategoryButton.classList.add("active");
  });

  // Initial state: Show add_goods by default
  addingGoodsSection.style.display = "block";
  addingLibrariesSection.style.display = "none";
  addingcategoriesSection.style.display = "none";
  addingSubcategoriesSection.style.display = "none";
  addSubCategoryButton.classList.remove("active");
  addGoodsButton.classList.add("active");
  addLibraryButton.classList.remove("active");
  addCategoryButton.classList.remove("active");
});

// Changing of 1st Upload label image
document
  .getElementById("first-file-upload-btn")
  .addEventListener("change", function () {
    var label = document.getElementById("upload-image-1");
    var upload_image_1 = document.querySelector(".upload_image_1_image");
    var upload_number_1 = document.querySelector(".upload-number-1");
    var upload_label_1 = document.querySelector(".upload-label-1");

    if (this.files.length > 0) {
      var selectedImage = this.files[0];
      // label.textContent = selectedImage.name;
      upload_image_1.style.display = "block";
      upload_image_1.style.width = "55px";
      upload_image_1.style.height = "65px";
      upload_number_1.style.display = "none";
      upload_label_1.style.display = "none";
      // Create a URL for the selected image using the FileReader API
      var reader = new FileReader();
      reader.onload = function (event) {
        upload_image_1.src = event.target.result;
      };
      reader.readAsDataURL(selectedImage);
    } else {
      label.innerHTML = `<span class="upload-number-1">1</span>
        <span class="upload-label-1">Upload</span>`;
    }
  });

// Changing of 2nd Upload label image
document
  .getElementById("second-file-upload-btn")
  .addEventListener("change", function () {
    var label = document.getElementById("upload-image-2");
    var upload_image_2 = document.querySelector(".upload_image_2_image");
    var upload_number_2 = document.querySelector(".upload-number-2");
    var upload_label_2 = document.querySelector(".upload-label-2");

    if (this.files.length > 0) {
      var selectedImage = this.files[0];
      // label.textContent = selectedImage.name;
      upload_image_2.style.display = "block";
      upload_image_2.style.width = "55px";
      upload_image_2.style.height = "65px";
      upload_number_2.style.display = "none";
      upload_label_2.style.display = "none";
      // Create a URL for the selected image using the FileReader API
      var reader = new FileReader();
      reader.onload = function (event) {
        upload_image_2.src = event.target.result;
      };
      reader.readAsDataURL(selectedImage);
    } else {
      label.innerHTML = `<span class="upload-number-2">2</span>
        <span class="upload-label-2">Upload</span>`;
    }
  });

// Changing of 3rd Upload label image
document
  .getElementById("third-file-upload-btn")
  .addEventListener("change", function () {
    var label = document.getElementById("upload-image-3");
    var upload_image_3 = document.querySelector(".upload_image_3_image");
    var upload_number_3 = document.querySelector(".upload-number-3");
    var upload_label_3 = document.querySelector(".upload-label-3");

    if (this.files.length > 0) {
      var selectedImage = this.files[0];
      // label.textContent = selectedImage.name;
      upload_image_3.style.display = "block";
      upload_image_3.style.width = "55px";
      upload_image_3.style.height = "65px";
      upload_number_3.style.display = "none";
      upload_label_3.style.display = "none";
      // Create a URL for the selected image using the FileReader API
      var reader = new FileReader();
      reader.onload = function (event) {
        upload_image_3.src = event.target.result;
      };
      reader.readAsDataURL(selectedImage);
    } else {
      label.innerHTML = `<span class="upload-number-3">3</span>
        <span class="upload-label-3">Upload</span>`;
    }
  });

// Changing of 4th Upload label image
document
  .getElementById("fourth-file-upload-btn")
  .addEventListener("change", function () {
    var label = document.getElementById("upload-image-4");
    var upload_image_4 = document.querySelector(".upload_image_4_image");
    var upload_number_4 = document.querySelector(".upload-number-4");
    var upload_label_4 = document.querySelector(".upload-label-4");

    if (this.files.length > 0) {
      var selectedImage = this.files[0];
      // label.textContent = selectedImage.name;
      upload_image_4.style.display = "block";
      upload_image_4.style.width = "55px";
      upload_image_4.style.height = "65px";
      upload_number_4.style.display = "none";
      upload_label_4.style.display = "none";
      // Create a URL for the selected image using the FileReader API
      var reader = new FileReader();
      reader.onload = function (event) {
        upload_image_4.src = event.target.result;
      };
      reader.readAsDataURL(selectedImage);
    } else {
      label.innerHTML = `<span class="upload-number-4">4</span>
        <span class="upload-label-4">Upload</span>`;
    }
  });

// Submission of libraryName(Category)
document
  .getElementById("submit_library")
  .addEventListener("click", function () {
    var libraryName = document.querySelector(".library-name").value;
    var libicon = document.getElementById("library-icon").files[0]; // Get the selected image file
    if (libraryName != "" && libicon != "") {
      var formData = new FormData();
      formData.append("library_name", libraryName);
      formData.append("library_icon", libicon);

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "insert_library.php", true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert(xhr.responseText);
          console.log(xhr.response);
        }
      };

      xhr.send(formData);
    } else {
      alert("Field Missing");
    }
  });

// Submission of categoryName(Category)
document
  .getElementById("submit_category")
  .addEventListener("click", function () {
    var categoryName = document.querySelector(".category-name").value;
    var caticon = document.getElementById("category-icon").files[0]; // Get the selected image file
    if (categoryName != "" && caticon != "") {
      var formData = new FormData();
      formData.append("category_name", categoryName);
      formData.append("category_icon", caticon);

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "insert_category.php", true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert(xhr.responseText);
          console.log(xhr.response);
        }
      };

      xhr.send(formData);
    } else {
      alert("Field Missing");
    }
  });

// Changing of Lib label name
document.getElementById("library-icon").addEventListener("change", function () {
  var label = document.getElementById("library-name-label");
  var library_image = document.querySelector(".library_image");

  if (this.files.length > 0) {
    var selectedImage = this.files[0];
    label.textContent = selectedImage.name;

    // Create a URL for the selected image using the FileReader API
    var reader = new FileReader();
    reader.onload = function (event) {
      library_image.src = event.target.result;
    };
    reader.readAsDataURL(selectedImage);
  } else {
    label.textContent = "Library Icon";
    library_image.src = "assets/images/library.png";
  }
});

// Changing of cat label name
document
  .getElementById("category-icon")
  .addEventListener("change", function () {
    var label = document.getElementById("category-name-label");
    var category_image = document.querySelector(".category_image");

    if (this.files.length > 0) {
      var selectedImage = this.files[0];
      label.textContent = selectedImage.name;

      // Create a URL for the selected image using the FileReader API
      var reader = new FileReader();
      reader.onload = function (event) {
        category_image.src = event.target.result;
      };
      reader.readAsDataURL(selectedImage);
    } else {
      label.textContent = "Category Icon";
      category_image.src = "assets/images/wardrobe.png";
    }
  });

// Changing of sub cat label name
document
  .getElementById("sub-category-icon")
  .addEventListener("change", function () {
    var label = document.getElementById("sub-category-name-label");
    var sub_category_image = document.querySelector(".sub_category_image");

    if (this.files.length > 0) {
      var selectedImage = this.files[0];
      label.textContent = selectedImage.name;

      // Create a URL for the selected image using the FileReader API
      var reader = new FileReader();
      reader.onload = function (event) {
        sub_category_image.src = event.target.result;
      };
      reader.readAsDataURL(selectedImage);
    } else {
      label.textContent = "Library Icon";
      sub_category_image.src = "assets/images/open_wardrobe.png";
    }
  });

//select options for libary in adding goods
document.addEventListener("DOMContentLoaded", function () {
  var Category = document.querySelector(".Category");

  // Create the label element
  var CategoryLabel = document.createElement("label");
  CategoryLabel.className = "pub"; // Use className to set class
  CategoryLabel.htmlFor = "public"; // Use htmlFor to set for attribute
  CategoryLabel.textContent = "Library:"; // Set label text
  Category.appendChild(CategoryLabel);

  // Create the select element
  var CategorySelect = document.createElement("select");
  CategorySelect.name = "public";
  CategorySelect.id = "public";
  CategorySelect.className = "form-control"; // Use className to set class
  Category.appendChild(CategorySelect);

  fetch(`search_lib.php`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const resultsArray = data.results; // Adjust this based on your response structure
      displayLibResults(resultsArray);
    });

  function displayLibResults(data) {
    CategorySelect.innerHTML = ""; // Clear existing options

    if (data.length === 0) {
      CategorySelect.innerHTML = `
                <option value="">Select</option>
            `;
      return;
    }

    data.forEach((result) => {
      const CategoryItem = document.createElement("option");
      CategoryItem.value = `${result.Lib_name}`;
      CategoryItem.textContent = `${result.Lib_name}`;

      CategorySelect.appendChild(CategoryItem);
    });
  }
});

//select options for sub category in adding goods
document.addEventListener("DOMContentLoaded", function () {
  var SubCategory = document.querySelector(".SubCategory");

  // Create the label element
  var SubCategoryLabel = document.createElement("label");
  SubCategoryLabel.className = "subcatlabel"; // Use className to set class
  SubCategoryLabel.htmlFor = "subcat"; // Use htmlFor to set for attribute
  SubCategoryLabel.textContent = "Sub Category:"; // Set label text
  SubCategory.appendChild(SubCategoryLabel);

  // Create the select element
  var SubCategorySelect = document.createElement("select");
  SubCategorySelect.name = "subcat";
  SubCategorySelect.id = "subcat";
  SubCategorySelect.className = "form-control"; // Use className to set class
  SubCategory.appendChild(SubCategorySelect);

  fetch(`search_sub_cat.php`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const resultsArray = data.results; // Adjust this based on your response structure
      displayLibResults(resultsArray);
    });

  function displayLibResults(data) {
    SubCategorySelect.innerHTML = ""; // Clear existing options

    if (data.length === 0) {
      SubCategorySelect.innerHTML = `
                <option value="">Select</option>
            `;
      return;
    }

    data.forEach((result) => {
      const SubCategoryItem = document.createElement("option");
      SubCategoryItem.value = `${result.Sub_Cat_Name}`;
      SubCategoryItem.textContent = `${result.Sub_Cat_Name}`;

      SubCategorySelect.appendChild(SubCategoryItem);
    });
  }
});

//select options for sub categrory in sub cat
document.addEventListener("DOMContentLoaded", function () {
  var SubCategory = document.querySelector(".sub-category-drop");

  // Create the label element
  var SubCategoryLabel = document.createElement("label");
  SubCategoryLabel.className = "sub-cat"; // Use className to set class
  SubCategoryLabel.htmlFor = "sub-cat-select"; // Use htmlFor to set for attribute
  SubCategoryLabel.textContent = "Category:"; // Set label text
  SubCategory.appendChild(SubCategoryLabel);

  // Create the select element
  var SubCategorySelect = document.createElement("select");
  SubCategorySelect.name = "sub-cat-select";
  SubCategorySelect.id = "sub-cat-select";
  SubCategorySelect.className = "form-control"; // Use className to set class
  SubCategory.appendChild(SubCategorySelect);

  fetch(`search_Cat.php`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const resultsArray = data.results; // Adjust this based on your response structure
      displayCatResults(resultsArray);
    });

  function displayCatResults(data) {
    SubCategorySelect.innerHTML = ""; // Clear existing options

    if (data.length === 0) {
      SubCategorySelect.innerHTML = `
                <option value="">Select</option>
            `;
      return;
    }

    data.forEach((result) => {
      const SubCategoryItem = document.createElement("option");
      SubCategoryItem.value = `${result.Cat_name}`;
      SubCategoryItem.textContent = `${result.Cat_name}`;

      SubCategorySelect.appendChild(SubCategoryItem);
    });
  }
});

// Submission of sub_categoryName(sub_category)
document
  .getElementById("submit_sub_category")
  .addEventListener("click", function () {
    var sub_categoryName = document.querySelector(".sub-category-name").value;
    var subCategorySelect = document.querySelector("#sub-cat-select").value;
    var subcaticon = document.getElementById("sub-category-icon").files[0]; // Get the selected image file
    if (sub_categoryName != "" && subcaticon != "") {
      var formData = new FormData();
      formData.append("sub_category_name", sub_categoryName);
      formData.append("sub_category_select", subCategorySelect);
      formData.append("sub_category_icon", subcaticon);

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "insert_sub_category.php", true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert(xhr.responseText);
          console.log(xhr.response);
        }
      };

      xhr.send(formData);
    } else {
      alert("Field Missing");
    }
  });

// Get the textarea element and character count display element
const textarea = document.getElementById("des");
const charCountDisplay = document.getElementById("char-count");

// Define the maximum character count
const maxCharacters = 5000;

// Function to update character count
function updateCharCount() {
  const remainingCharacters = maxCharacters - textarea.value.length;
  charCountDisplay.textContent = `${remainingCharacters}/5000`;
  if (remainingCharacters <= 0) {
    // If the user exceeds the limit, truncate the input
    textarea.value = textarea.value.slice(0, maxCharacters);
  }
}

// Add an event listener to the textarea for input changes
textarea.addEventListener("input", updateCharCount);

// Initial update of character count
updateCharCount();

// Get the textarea element and character count display element
const tags = document.getElementById("tags");
const tagsCountDisplay = document.getElementById("tag-count");

// Define the maximum character count
const Characters = 500;

// Function to update character count
function updatetagsCount() {
  const remainingtags = Characters - tags.value.length;
  tagsCountDisplay.textContent = `${remainingtags}/500`;
  if (remainingtags <= 0) {
    // If the user exceeds the limit, truncate the input
    tags.value = tags.value.slice(0, Characters);
  }
}

// Add an event listener to the textarea for input changes
tags.addEventListener("input", updateCharCount);

// Initial update of character count
updatetagsCount();

// Submission of goods
document.getElementById("add-btn").addEventListener("click", function () {
  var product_name = document.querySelector("#product-name").value;
  var store_name = document.querySelector("#store-name").value;
  var des = document.querySelector("#des").value;
  var subcat = document.querySelector("#subcat").value;
  var public = document.querySelector("#public").value;
  var first_file_upload_btn = document.getElementById("first-file-upload-btn")
    .files[0];
  var second_file_upload_btn = document.getElementById("second-file-upload-btn")
    .files[0];
  var third_file_upload_btn = document.getElementById("third-file-upload-btn")
    .files[0];
  var fourth_file_upload_btn = document.getElementById("fourth-file-upload-btn")
    .files[0];
  const sizesContainer = document.querySelector(".sizes");
  const checkboxes = sizesContainer.querySelectorAll(".size-checkbox");
  const checkedSizes = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedSizes.push(checkbox.value);
    }
  });
  const commaSeparatedSizes = checkedSizes.join(", ");
  console.log(commaSeparatedSizes);
  var actual_price = document.querySelector("#actual-price").value;
  var discount = document.querySelector("#discount").value;
  var sell_price = document.querySelector("#sell-price").value;
  var stock = document.querySelector("#stock").value;
  var tags = document.querySelector("#tags").value;

  if (
    product_name != "" &&
    store_name != "" &&
    des != "" &&
    subcat != "" &&
    public != "" &&
    first_file_upload_btn != "" &&
    second_file_upload_btn != "" &&
    third_file_upload_btn != "" &&
    fourth_file_upload_btn != "" &&
    commaSeparatedSizes != "" &&
    actual_price != "" &&
    sell_price != "" &&
    stock != "" &&
    discount != "" &&
    tags != ""
  ) {
    var formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("store_name", store_name);
    formData.append("des", des);
    formData.append("subcat", subcat);
    formData.append("library", public);
    formData.append("first_file_upload_btn", first_file_upload_btn);
    formData.append("second_file_upload_btn", second_file_upload_btn);
    formData.append("third_file_upload_btn", third_file_upload_btn);
    formData.append("fourth_file_upload_btn", fourth_file_upload_btn);
    formData.append("commaSeparatedSizes", commaSeparatedSizes);
    formData.append("actual_price", actual_price);
    formData.append("sell_price", sell_price);
    formData.append("stock", stock);
    formData.append("discount", discount);
    formData.append("tags", tags);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "insert_good.php", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText);
        console.log(xhr.response);
        if ((xhr.response = "Good created successfully!")) {
          //   // Clear input fields after successful submission
          //   document.querySelector("#product-name").value = "";
          //   document.querySelector("#store-name").value = "";
          //   document.querySelector("#des").value = "";
          //   document.querySelector("#first-file-upload-btn").value = "";
          //   document.querySelector("#second-file-upload-btn").value = "";
          //   document.querySelector("#third-file-upload-btn").value = "";
          //   document.querySelector("#fourth-file-upload-btn").value = "";
          //   // Clear checkboxes
          //   const checkboxes = document.querySelectorAll(".size-checkbox");
          //   checkboxes.forEach((checkbox) => {
          //     checkbox.checked = false;
          //   });
          //   document.querySelector("#actual-price").value = "";
          //   document.querySelector("#sell-price").value = "";
          //   document.querySelector("#stock").value = "";
          //   document.querySelector("#discount").value = "";
          //   document.querySelector("#tags").value = "";
        }
      }
    };

    xhr.send(formData);
  } else {
    alert("Field Missing");
  }
});
//Display of web and phone
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const total = document.querySelector(".total");
  const toggleSidebarBtn = document.querySelector(".toggle-sidebar");
  const mobileHeader = document.querySelector(".mobile-header");

  toggleSidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  function handleWindowSizeChange() {
    const isMobile = window.innerWidth <= 768;
    const isPad = window.innerWidth <= 820 >= 768;

    if (isMobile) {
      sidebar.classList.remove("active");
      mobileHeader.style.display = "flex";
      total.style.marginTop = "40px";
    } else {
      sidebar.classList.add("active");
      mobileHeader.style.display = "none";
      total.style.marginTop = "0px";
    }

    // if (isPad) {
    //     sidebar.classList.remove("active");
    //     mobileHeader.style.display = "flex";
    // } else {
    //     sidebar.classList.add("active");
    //     mobileHeader.style.display = "none";
    // }
  }

  // Initial check on page load
  handleWindowSizeChange();

  // Listen for window resize events
  window.addEventListener("resize", handleWindowSizeChange);
});

var actual_price_input = document.querySelector("#actual-price");
var discount_input = document.querySelector("#discount");
var sell_price_input = document.querySelector("#sell-price");
function updateSellPrice() {
  var actual_price = parseFloat(actual_price_input.value);
  var discount = parseFloat(discount_input.value);
  var sell_price = parseFloat(sell_price_input.value);
  sell_price_input.disabled = true;
  if (isNaN(discount)) {
    discount = 0;
  }

  sell_price = actual_price * (1 - discount / 100);
  sell_price_input.value = sell_price.toFixed(2);
}
actual_price_input.addEventListener("keyup", updateSellPrice);
discount_input.addEventListener("keyup", updateSellPrice);
