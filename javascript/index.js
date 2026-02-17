const products = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(product => displayAllProduct(product))
}
const productCategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(category => displayCategory(category))
}

const categoryProduct = (categoryName) => {
    console.log(categoryName)
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then(res => res.json())
    .then(product => displayCategoryProducts(product))
}

const displayCategory = (category) => {
    console.log(category)
    const categoryContainer = document.getElementById('category-container')
    categoryContainer.innerHTML = `<button class="btn btn-sm btn-primary" onclick="products()">All</button>`;
    for (let cate of category) {
        const button = document.createElement('button');
        button.className = "btn btn-sm btn-outline";
        button.innerText = cate;

        button.addEventListener('click', () => {
            categoryProduct(cate);
        });
        categoryContainer.append(button)
    }
}

const displayAllProduct = (products) => {
    console.log(products)
    const allProductContainer = document.getElementById("allProductContainer")
    allProductContainer.innerHTML = "";
    for (let product of products) {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<div class="card bg-base-100 shadow-md">
        
        <figure class="bg-gray-100 p-6">
          <img src=${product.image}
               class="h-40 object-contain" />
        </figure>

        <div class="card-body">
          
          <!-- Category Badge -->
          <span class="badge badge-primary badge-sm w-fit">
            ${product.category}
          </span>

          <!-- Title -->
          <h3 class="font-semibold">
            ${product.title}
          </h3>

          <!-- Rating -->
          <div class="flex items-center gap-1 text-sm text-yellow-500">
            ⭐ ${product.rating?.rate} <span class="text-gray-400">(${product.rating.count})</span>
          </div>

          <!-- Price -->
          <p class="font-bold text-lg">$${product.price}</p>

          <!-- Buttons -->
          <div class="card-actions justify-between mt-4">
            <button class="btn btn-outline btn-sm">Details</button>
            <button class="btn btn-primary btn-sm">Add</button>
          </div>

        </div>
      </div>
        
        `
        allProductContainer.append(productDiv)
    }
}

const displayCategoryProducts = (products) => {
    console.log(products)
    const displayProduct = document.getElementById("allProductContainer")
    displayProduct.innerHTML = "";
    for (let product of products) {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
        <div class="card bg-base-100 shadow-md">
        
        <figure class="bg-gray-100 p-6">
          <img src=${product.image}
               class="h-40 object-contain" />
        </figure>

        <div class="card-body">
          
          <!-- Category Badge -->
          <span class="badge badge-primary badge-sm w-fit">
            ${product.category}
          </span>

          <!-- Title -->
          <h3 class="font-semibold">
            ${product.title}
          </h3>

          <!-- Rating -->
          <div class="flex items-center gap-1 text-sm text-yellow-500">
            ⭐ ${product.rating?.rate} <span class="text-gray-400">(${product.rating.count})</span>
          </div>

          <!-- Price -->
          <p class="font-bold text-lg">$${product.price}</p>

          <!-- Buttons -->
          <div class="card-actions justify-between mt-4">
            <button class="btn btn-outline btn-sm">Details</button>
            <button class="btn btn-primary btn-sm">Add</button>
          </div>

        </div>
      </div>
        `
        displayProduct.append(productDiv)
    }

}

productCategory()
