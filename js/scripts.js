function handleСategoryClick(event) {
  if (event.target.tagName === "LI") {
    const productListBlock = event.currentTarget.nextElementSibling;
    const productList = products.querySelector("ul");

    switch (event.target.textContent) {
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
}

function handleProductListClick(event) {
  if (event.target.tagName === "LI") {
    const productInfo = event.currentTarget.nextElementSibling;

    switch (event.currentTarget.querySelector(".heading").textContent) {
      case categories[0]:
        productInfo.querySelector(".img-wrapper").style.display = "block";
        productInfo.querySelector(".img").setAttribute("src", "../images/ipad.png");
        productInfo.querySelector(".btn").style.display = "block";
        break;
      case categories[1]:
        productInfo.querySelector(".img-wrapper").style.display = "block";
        productInfo.querySelector(".img").setAttribute("src", "../images/smartphone.png");
        productInfo.querySelector(".btn").style.display = "block";
        break;
      case categories[2]:
        productInfo.querySelector(".img-wrapper").style.display = "block";
        productInfo.querySelector(".img").setAttribute("src", "../images/television.png");
        productInfo.querySelector(".btn").style.display = "block";
        break;
    }
  }
}

function handleProductInfoBtnClick() {
  alert("Вы купили товар!");
  location.reload();
}

const categories = ["Планшеты", "Смартфоны", "Телевизоры"];
document.querySelector("#categories").addEventListener("click", handleСategoryClick);
document.querySelector("#products").addEventListener("click", handleProductListClick);
document.querySelector("#product-info").addEventListener("click", handleProductInfoBtnClick);
