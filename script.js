let apiUrl = "https://fakestoreapi.com/products/";
let productContainer = document.getElementById("products");

fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        products.forEach(function(product) {
            let productCard = document.createElement("div");
            productCard.className = "card";

            let productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.title;

            let productTitle = document.createElement("h3");
            productTitle.textContent = product.title.slice(0, 60);

            let productCategory = document.createElement("p");
            productCategory.className = "category";
            productCategory.textContent = product.category;

            let productDescription = document.createElement("p");
            productDescription.className = "description";
            productDescription.textContent =
                product.description.slice(0, 120);

            productCard.appendChild(productImage);
            productCard.appendChild(productTitle);
            productCard.appendChild(productCategory);
            productCard.appendChild(productDescription);

            productContainer.appendChild(productCard);
        });
    })
    .catch(function(error) {
        productContainer.textContent = "Error: " + error.message;
        productContainer.style.color = "red";
    })
    .finally(function() {
        console.log("API called");
    });