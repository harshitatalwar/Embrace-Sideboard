console.log('====================================');
console.log("Connected");
console.log('====================================');

function createProductBlock(originalPrice, discountedPrice) {
    var discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
    var productBlockHTML = `
        <div data-compare-price class="product_price product_price--compare">
            <span class="discounted-price">$${discountedPrice.toFixed(2)}</span>
            <span class="discount-info">${discountPercentage.toFixed(0)}% off</span>
        </div>

        <div data-product-price class="product_price on-sale">
            <span class="original-price">$${originalPrice.toFixed(2)}</span>
        </div>
    `;
    document.getElementById("productBlock").innerHTML = productBlockHTML;
}
createProductBlock(19999.0, 12999.0);

const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num"),
  addToCartBtn = document.querySelector(".add-to-cart"),
  messageBox = document.getElementById("message");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
});

function addToCart() {
const productName = "Embrace Sideboard";
const selectedColorElement = document.querySelector('.color.active-color');
const selectedColorName = getColorName(selectedColorElement);
const selectedSize = document.querySelector('input[name="size"]:checked').nextElementSibling.innerText;


const message = `${productName} with color ${selectedColorName} and size ${selectedSize} added to cart`;
messageBox.innerText = message;
messageBox.style.display = "block";

setTimeout(() => {
messageBox.style.display = "none";
addToCartBtn.disabled = false;
}, 2000);

function getColorName(colorElement) {
const colorNameClass = colorElement.classList[1];
const colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1);
return capitalizeFirstLetter(colorName);
}

function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}
addToCartBtn.disabled = true;
}

const COLOR_BTNS = document.querySelectorAll('.color');
COLOR_BTNS.forEach(color => {
    color.addEventListener('click', () => {
        let colorNameClass = color.className;
        if (!color.classList.contains('active-color')) {
            let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);
            resetActiveBtns();
            color.classList.add('active-color');
            console.log(`Selected color: ${colorName}`);
        }
    });
});

function resetActiveBtns() {
    COLOR_BTNS.forEach(color => {
        color.classList.remove('active-color');
    });
}

function previewImage(event) {
if (event.target.tagName === 'IMG') {
  document.querySelector('.slide').src = event.target.src;
}
}