const plusButton = document.getElementById("plus_btn");
const minusButton = document.getElementById("minus_btn");
const resultElement = document.querySelector(".result");
const favouriteButton = document.getElementById("favourite_btn");
const basketButton = document.getElementById("basket_btn");
const favouriteElement = document.getElementById("favourite_box");
const basketElement = document.getElementById("basket_box");

// count button
let productCount=1;
plusButton.addEventListener("click",()=>{
    productCount++;
    resultElement.textContent = productCount;
})
minusButton.addEventListener("click",()=>{
    productCount--;
    if(productCount < 1){
        productCount = 1
    }
    resultElement.textContent = productCount;
})

//add favourite and add basket
const notificationBasket = document.createElement("div");
const notificationFavourite = document.createElement("div");
const alertMessage = document.createElement("div");
const paragraph = document.createElement("p");
const productName = document.getElementById("product__name");



notificationBasket.classList.add("notification")
notificationFavourite.classList.add("notification")

alertMessage.classList.add("alert__message")
alertMessage.appendChild(paragraph)

function messageAlert(){
    document.body.appendChild(alertMessage)
    alertMessage.style.opacity = "1"
    setInterval(()=>{
        alertMessage.style.opacity = "0"
    },1000)
}

function addBasket(){
    basketElement.appendChild(notificationBasket)
    paragraph.textContent = `товар ${productName.textContent} в количестве ${productCount} единиц добавлен в корзину`;
    messageAlert()
}

function addFavourite(){
    favouriteElement.appendChild(notificationFavourite)
    paragraph.textContent = `товар ${productName.textContent} в количестве ${productCount} единиц добавлен в избранное`;
    messageAlert()
}

basketButton.addEventListener("click", addBasket);

favouriteButton.addEventListener("click",addFavourite);


//mobile menu
const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobile__menu")
const closeButton = document.getElementById("closebtn")

hamburger.addEventListener("click",(e)=>{
    e.preventDefault()
    // mobileMenu.style.display = "flex"
    mobileMenu.style.opacity = "1"
    mobileMenu.style.visibility = "visible"
})

closeButton.addEventListener("click",(e)=>{
    e.preventDefault()
    mobileMenu.style.opacity = "0"
    mobileMenu.style.visibility = "hidden"
})


//product img
const mainImg = document.querySelector(".main_img")
const productImg = document.querySelectorAll(".product_img")

productImg.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        e.preventDefault()
        mainImg.src = item.src;
    })
})

//scroll header
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.navbar');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})