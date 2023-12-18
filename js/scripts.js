function handleСategoryClick(event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === "LI") {
    const productListBlock = event.currentTarget.nextElementSibling;
    const productList = productListBlock.querySelector("ul");

    switch (clickedElement.textContent) {
      case categories[0]:
        productListBlock.querySelector(".heading").textContent = "Планшеты";
        productList.innerHTML =
          "<li>Lenovo Tab P11</li><li>Samsung Galaxy Tab S9 FE</li><li>Apple iPad 10.2</li><li>Lenovo Tab M10 Plus</li>";
        break;
      case categories[1]:
        productListBlock.querySelector(".heading").textContent = "Смартфоны";
        productList.innerHTML =
          "<li>Samsung Galaxy A24</li><li>Apple iPhone 15 128GB Black</li><li>Samsung Galaxy S23 Ultra</li><li>Motorola G54</li><li>Samsung Galaxy A34</li>";
        break;
      case categories[2]:
        productListBlock.querySelector(".heading").textContent = "Телевизоры";
        productList.innerHTML =
          "<li>Samsung UE55CU7100UXUA</li><li>Ergo 43GUS8500</li><li>LG 50UR78006LK</li><li>Samsung UE43T5300AUXUA</li><li>Samsung UE50CU7100UXUA</li>";
        break;
    }
  }

  if (clickedElement.id === "categories-btn") {
    const divs = document.body.querySelectorAll("div");
    divs.forEach((div) => {
      if (div.id !== "pop-up") {
        const childrenElements = [...div.children];
        childrenElements.forEach((children) => {
          children.style.display = "none";
        });
      }
    });

    const popUp = document.body.querySelector("#pop-up");
    const popUpButton = document.querySelector("#pop-up-btn");
    const products = JSON.parse(localStorage.getItem("products"));

    if (products !== null) {
      const orderList = popUp.querySelector(".order-list");
      popUp.querySelector(".text").style.display = "none";

      products.forEach((product) => {
        const listItem = document.createElement("li");
        const { name, date, price } = product;
        listItem.innerHTML = `${name} | ${date} | ${price} | <button type="button" class="order-list-btn" id="order-list-btn">Отменить заказ</button>`;
        orderList.appendChild(listItem);
      });
    }

    popUpButton.style.display = "block";
    popUp.style.display = "block";
  }
}

function handleProductListClick(event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === "LI") {
    const productInfo = event.currentTarget.nextElementSibling;
    const productInfoHeading = productInfo.querySelector(".product-info-heading");
    productInfoHeading.style.borderBottom = "1px solid #000";
    productInfoHeading.textContent = clickedElement.textContent;
    productInfo.querySelector(".img-wrapper").style.display = "block";
    productInfo.querySelector(".product-info-btn").style.display = "block";

    switch (event.currentTarget.querySelector(".heading").textContent) {
      case categories[0]:
        productInfo.querySelector(".img").setAttribute("src", "../images/ipad.png");
        break;
      case categories[1]:
        productInfo.querySelector(".img").setAttribute("src", "../images/smartphone.png");
        break;
      case categories[2]:
        productInfo.querySelector(".img").setAttribute("src", "../images/television.png");
        break;
    }
  }
}

function handleProductInfoBtnClick(event) {
  const clickedElement = event.target;

  if (clickedElement.id === "product-info-btn") {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const nameOfProduct = event.currentTarget.querySelector(".product-info-heading").textContent;
    const date = new Date().toDateString();
    const price = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000 + "$"; // Рандомная стоимость от 1000 до 5000, знаю что такая запись ужасна
    const isProductPresentInCart = products.find((product) => product.name === nameOfProduct);

    if (isProductPresentInCart === undefined) {
      products.push(new Product(nameOfProduct, date, price));
      localStorage.setItem("products", JSON.stringify(products));
      location.reload();
    } else {
      alert("Товар уже в корзине!");
      location.reload();
    }
  }
}

function handlePopUpCloseBtnClick() {
  location.reload();
}

function handlePopUpListItemClick(event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === "LI") {
    const [name, date, price] = clickedElement.textContent.split(" | ");

    alert(`Название товара: ${name}
Дата заказа: ${date}
Цена заказа: ${price}`);
  }

  if (clickedElement.id === "order-list-btn") {
    const listItem = clickedElement.parentNode;
    const productName = listItem.textContent.split(" | ")[0]; // Ключ name
    const orders = JSON.parse(localStorage.getItem("products"));
    const products = orders.reduce((acc, order) => {
      if (productName === order.name) {
        listItem.remove();
      } else {
        acc.push(order);
      }

      return acc;
    }, []);

    if (products.length !== 0) {
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      localStorage.removeItem("products");
    }
  }
}

class Product {
  constructor(name, date, price) {
    this.name = name;
    this.date = date;
    this.price = price;
  }
}

const categories = ["Планшеты", "Смартфоны", "Телевизоры"];
document.querySelector("#categories").addEventListener("click", handleСategoryClick);
document.querySelector("#products").addEventListener("click", handleProductListClick);
document.querySelector("#product-info").addEventListener("click", handleProductInfoBtnClick);
document.querySelector("#pop-up-btn").addEventListener("click", handlePopUpCloseBtnClick);
document.querySelector(".order-list").addEventListener("click", handlePopUpListItemClick);
