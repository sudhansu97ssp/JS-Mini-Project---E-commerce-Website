//add product to cart//

let carts = document.querySelectorAll(".btn-product");

let products = [
  {
    brand: "Adidas",
    tag: "adidas sneaker",
    price: 2199,
    inCart: 0,
  },
  {
    brand: "Adidas",
    tag: "Adidas Decade Hi",
    price: 9999,
    inCart: 0,
  },
  {
    brand: "Adidas",
    tag: "Adidas Multix shoe",
    price: 6636,
    inCart: 0,
  },
  {
    brand: "Adidas",
    tag: "Adidas Women's Swift Running",
    price: 10212,
    inCart: 0,
  },
  {
    brand: "Nike",
    tag: "Air Jordan 9GS",
    price: 8259,
    inCart: 0,
  },
  {
    brand: "Nike",
    tag: "Air Jordan Flight Club",
    price: 12492,
    inCart: 0,
  },
  {
    brand: "Nike",
    tag: "Air Jordan IV Bred",
    price: 24649,
    inCart: 0,
  },
  {
    brand: "Nike",
    tag: "Nike Air Jordan 1",
    price: 3595,
    inCart: 0,
  },
  {
    brand: "Nike",
    tag: "Jordan Retro",
    price: 5499,
    inCart: 0,
  },
  {
    brand: "Puma",
    tag: "Puma R78",
    price: 2599,
    inCart: 0,
  },
  {
    brand: "Puma",
    tag: "Puma X-ray Sneakers",
    price: 4549,
    inCart: 0,
  },
  {
    brand: "Adidas",
    tag: "ZX700",
    price: 7562,
    inCart: 0,
  },
  {
    brand: "Adidas",
    tag: "Dual Nightcat Ladies shoe",
    price: 3499,
    inCart: 0,
  },
  {
    brand: "Adidas",
    tag: "Haiwaee Shoes",
    price: 2500,
    inCart: 0,
  },
  {
    brand: "Nike",
    tag: "J Balvin X AIr jordan 1",
    price: 22000,
    inCart: 0,
  },
  {
    brand: "Nike",
    tag: "Low Emerald Rise Man",
    price: 13467,
    inCart: 0,
  },
  {
    brand: "Adidas",
    tag: "Rainbow Adidas Superstar",
    price: 9999,
    inCart: 0,
  },
  {
    brand: "Puma",
    tag: "viz Runner",
    price: 3299,
    inCart: 0,
  },
  {
    brand: "Puma",
    tag: "Puma Supertec Men Shoes",
    price: 4199,
    inCart: 0,
  },
  {
    brand: "Puma",
    tag: "Puma Men Ferrari",
    price: 6299,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

//maintain the cart data when page reload

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector("#navbar li a span").textContent = productNumbers;
  }
}

// adding data to local storage when button clicked

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#navbar li a span").textContent =
      productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#navbar li a span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `

    <td><i class="fa-solid fa-circle-xmark"></i></td>
    <td><img src="./img/${item.tag}.jpg" alt="image" style="width:30px;">${
        item.tag
      }</td>
    <td class='price'>${item.price}.00</td>
    <td class='price'>${item.inCart}</td>
    <td class='total'>
    ₹${item.inCart * item.price}.00
    </td>
    `;
    });
    productContainer.innerHTML += `
    <div class='basketTotalContainer'>
        <h4 class='basketTotalTitle'>
        Basket Total
        </h4>
        <h4 class='basketTotal'>
        ₹${cartCost}.00
        </h4>
      </div>
    `;
  }
}
onLoadCartNumbers();
displayCart();
