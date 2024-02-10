var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px'
function menutoggle(){
    if(MenuItems.style.maxHeight = '0px'){
        MenuItems.style.maxHeight = '200px'
    }
    else{
        MenuItems.style.maxHeight = '0px'
    }
    
}

/*-----cartItem in an array*/

const cartItems = [
    {
        id:0,
        image: 'projimages/localfood.jpeg',
        title: 'White rice with stew',
        price: 'N,1500',
    },
    {
        id:1,
        image: 'projimages/femoree-_VRo59IsqLo-unsplash.jpg',
        title: 'White rice with tomatoe sauce',
        price: 'N,2000',
    },
    {
        id:2,
        image: 'projimages/ke-vin-szQFiGZH8wU-unsplash.jpg',
        title: 'White rice with boiled Egg',
        price: 'N,3000',
    },
    {
        id:3,
        image: 'projimages/amalawithgbegiri.jpeg',
        title: 'Amala with gbegiri',
        price: 'N3,000',
    },
    {
        id:4,
        image: 'projimages/localfood.jpeg',
        title: 'White rice with stew',
        price: 'N2,500',
    },
    {
        id:5,
        image: 'projimages/femoree-_VRo59IsqLo-unsplash.jpg',
        title: 'White rice with tomatoe sauce',
        price: 'N3,000',
    },
    {
        id:6,
        image: 'projimages/ke-vin-szQFiGZH8wU-unsplash.jpg',
        title: 'White rice with boiled Egg',
        price: 'N3,000',
    },
    {
        id:7,
        image: 'projimages/amalawithgbegiri.jpeg',
        title: 'Amala with gbegiri',
        price: 'N2,500',
    },
    {
        id:8,
        image: 'projimages/localfood.jpeg',
        title: 'White rice with stew',
        price: 'N2,500',
    },
    {
        id:9,
        image: 'projimages/femoree-_VRo59IsqLo-unsplash.jpg',
        title: 'White rice with tomatoe sauce',
        price: 'N3,000',
    },
    {
        id:10,
        image: 'projimages/ke-vin-szQFiGZH8wU-unsplash.jpg',
        title: 'White rice with boiled Egg',
        price: 'N,3000',
    },
    {
        id:11,
        image: 'projimages/amalawithgbegiri.jpeg',
        title: 'Amala with gbegiri',
        price: 'N2,500',
    },
    {
        id:12,
        image: 'projimages/ricewithdodo.jpeg',
        title: 'White rice with tomatoe sauce',
        price: 'N3,500',
    },
    {
        id:13,
        image: 'projimages/semo.jpeg',
        title: 'White rice with tomatoe sauce',
        price: 'N3,000',
    },
    {
        id:14,
        image: 'projimages/amala.jpeg',
        title: 'White rice with boiled Egg',
        price: 'N3,000',
    },
    {
        id:15,
        image: 'projimages/jollof.jpeg',
        title: 'White rice with stew',
        price: 'N2,500',
    },
];

/*----Having access to cartItembtn-----*/


var btn = document.getElementById("btn0");
var btn = document.getElementById("btn2");
var btn = document.getElementById("btn3");
var btn = document.getElementById("btn4");
var btn = document.getElementById("btn5");
var btn = document.getElementById("btn6");
var btn = document.getElementById("btn7");
var btn = document.getElementById("btn8");
var btn = document.getElementById("btn9");
var btn = document.getElementById("btn10");
var btn = document.getElementById("btn11");
var btn = document.getElementById("btn12");
var btn = document.getElementById("btn13");
var btn = document.getElementById("btn14");
var btn = document.getElementById("btn15");
var btn = document.getElementById("btn16");


/*-----Add btneventlistener----*/

btn.addEventListener("click", (ev)=>
{ev.preventDefault(); function addToCart(){
     "projimages/localfood.jpeg", 
      "White rice with stew", 
      "N1,500.00"}})

function addToCart(image= "projimages/localfood.jpeg", name= "White rice with stew", price= "N1,500.00"){
    var cartItems = document.createElement("li");
    cartItems.textContent = 'projimages/localfood.jpeg' + " - " +  'White rice with stew' + " - " +  "N1,500.00";
    document.getElementById("cart-items").appendChild(cartItems);
}