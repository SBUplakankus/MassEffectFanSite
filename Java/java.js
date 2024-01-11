
//JAVASCRIPT FOR THE SHOP PAGE
//VARIABLES USED
var itemCost; //Individual Cost for each item
var itemQuantity; //Amount of the item being purchased
var shopItem; //Name of the item
var finalPrice; //FInal Price for the item (Cost x Quantity)
var cartTotal = 0; //Total Amount in the cart
var textArea = ""; //Where the cart details are output

//FUNCTION FOR EACH OF THE SHOP ITEMS
function addDuckShep(){
    //COST TAKEN FROM THE VALUE IN THE ITEM
    itemCost = 15.00;
    //AMOUNT TAKEN FROM THE QUANITIY VALUE IN THE ITEM
    itemQuantity = document.getElementById("duckShepQuantity").value;
    //NAME STRING TAKEN FROM THE ITEMS NAME
    shopItem = "Rubber Duck Shepard";
    //EQUATION TO FIND OUT THE COST
    finalPrice = itemCost*itemQuantity;
    //IF QUANITITY IS 0 AND THE BUTTON IS PRESSED, DO NOT DO ANYTHING
    if(itemQuantity > 0){

        //ADD THE COST TO THE CARTS TOTAL 
        cartTotal = cartTotal+finalPrice;
        textArea = textArea + (shopItem + " x "+itemQuantity+ ":  $"+finalPrice+"\n") //Receipt output
        document.getElementById("cartInfo").value=textArea; //Prints the output into the text area
        document.getElementById("cartTotal").value=cartTotal; //Adds to the cart total price
    } 
}
function addDuckGarrus(){
    //COST TAKEN FROM THE VALUE IN THE ITEM
    itemCost = 15.00;
    //AMOUNT TAKEN FROM THE QUANITIY VALUE IN THE ITEM
    itemQuantity = document.getElementById("duckGarrusQuantity").value;
    //NAME STRING TAKEN FROM THE ITEMS NAME
    shopItem = "Rubber Duck Garrus";
    //EQUATION TO FIND OUT THE COST
    finalPrice = itemCost*itemQuantity;
    //IF QUANITITY IS 0 AND THE BUTTON IS PRESSED, DO NOT DO ANYTHING
    if(itemQuantity > 0){

        //ADD THE COST TO THE CARTS TOTAL 
        cartTotal = cartTotal+finalPrice;
        textArea = textArea + (shopItem + " x "+itemQuantity+ ": $"+finalPrice+"\n") //Receipt output
        document.getElementById("cartInfo").value=textArea; //Prints the output into the text area
        document.getElementById("cartTotal").value=cartTotal; //Adds to the cart total price
    } 
}
function addHelmet(){
    //COST TAKEN FROM THE VALUE IN THE ITEM
    itemCost = 95.00;
    //AMOUNT TAKEN FROM THE QUANITIY VALUE IN THE ITEM
    itemQuantity = document.getElementById("helmetQuantity").value;
    //NAME STRING TAKEN FROM THE ITEMS NAME
    shopItem = "Replica Helmet";
    //EQUATION TO FIND OUT THE COST
    finalPrice = itemCost*itemQuantity;
    //IF QUANITITY IS 0 AND THE BUTTON IS PRESSED, DO NOT DO ANYTHING
    if(itemQuantity > 0){

        //ADD THE COST TO THE CARTS TOTAL 
        cartTotal = cartTotal+finalPrice;
        textArea = textArea + (shopItem + " x "+itemQuantity+ ":  $"+finalPrice+"\n") //Receipt output
        document.getElementById("cartInfo").value=textArea; //Prints the output into the text area
        document.getElementById("cartTotal").value=cartTotal; //Adds to the cart total price
    } 
}
function addBag(){
    //COST TAKEN FROM THE VALUE IN THE ITEM
    itemCost = 35.00;
    //AMOUNT TAKEN FROM THE QUANITIY VALUE IN THE ITEM
    itemQuantity = document.getElementById("bagQuantity").value;
    //NAME STRING TAKEN FROM THE ITEMS NAME
    shopItem = "Archangel Bag";
    //EQUATION TO FIND OUT THE COST
    finalPrice = itemCost*itemQuantity;
    //IF QUANITITY IS 0 AND THE BUTTON IS PRESSED, DO NOT DO ANYTHING
    if(itemQuantity > 0){

        //ADD THE COST TO THE CARTS TOTAL 
        cartTotal = cartTotal+finalPrice;
        textArea = textArea + (shopItem + " x "+itemQuantity+ ":  $"+finalPrice+"\n") //Receipt output
        document.getElementById("cartInfo").value=textArea; //Prints the output into the text area
        document.getElementById("cartTotal").value=cartTotal; //Adds to the cart total price
    } 
}
function addSlippers(){
    //COST TAKEN FROM THE VALUE IN THE ITEM
    itemCost = 25.00;
    //AMOUNT TAKEN FROM THE QUANITIY VALUE IN THE ITEM
    itemQuantity = document.getElementById("slippersQuantity").value;
    //NAME STRING TAKEN FROM THE ITEMS NAME
    shopItem = "N7 Slippers";
    //EQUATION TO FIND OUT THE COST
    finalPrice = itemCost*itemQuantity;
    //IF QUANITITY IS 0 AND THE BUTTON IS PRESSED, DO NOT DO ANYTHING
    if(itemQuantity > 0){

        //ADD THE COST TO THE CARTS TOTAL 
        cartTotal = cartTotal+finalPrice;
        textArea = textArea + (shopItem + " x "+itemQuantity+ ":  $"+finalPrice+"\n") //Receipt output
        document.getElementById("cartInfo").value=textArea; //Prints the output into the text area
        document.getElementById("cartTotal").value=cartTotal; //Adds to the cart total price
    } 
}
function addLED(){
    //COST TAKEN FROM THE VALUE IN THE ITEM
    itemCost = 55.00;
    //AMOUNT TAKEN FROM THE QUANITIY VALUE IN THE ITEM
    itemQuantity = document.getElementById("ledQuantity").value;
    //NAME STRING TAKEN FROM THE ITEMS NAME
    shopItem = "LED Sign";
    //EQUATION TO FIND OUT THE COST
    finalPrice = itemCost*itemQuantity;
    //IF QUANITITY IS 0 AND THE BUTTON IS PRESSED, DO NOT DO ANYTHING
    if(itemQuantity > 0){

        //ADD THE COST TO THE CARTS TOTAL 
        cartTotal = cartTotal+finalPrice;
        textArea = textArea + (shopItem + " x "+itemQuantity+ ":  $"+finalPrice+"\n") //Receipt output
        document.getElementById("cartInfo").value=textArea; //Prints the output into the text area
        document.getElementById("cartTotal").value=cartTotal; //Adds to the cart total price
    } 
}
//BROKEN SHOP SECTION THAT I NEEDED TO REPLACE WITH HARD CODING
/* function addLED(){
    cost = parseDouble(document.getElementById("ledCost").value);
    quanitity = parseDouble(document.getElementById("ledQuantity").value);
    shopItem = document.getElementById("ledName").value;
    totalPrice - cost*quanitity;
    if(quanitity > 0){
        
    }
    cartTotal = cartTotal+totalPrice;
} */
//PLAY VIDEO WHEN TRYING TO CHECKOUT
function popup(){
    var v = document.getElementById("popup");//THE VIDEO
    var b = document.getElementById("wholeShop")//THE BODY OF THE PAGE

        b.style.display = "none";//HIDES THE BODY
        v.style.display = "block";//SHOWS THE VIDEO
        v.play();//PLAYS THE VIDEO

        v.onended = function(){
            location.reload();//RELOADS PAGE ONCE THE VIDEO ENDS
        }
}
//FUNCTIONS TO HIDE AND SIPLAY THE SECTIONS WITH THE TRAILERS INSIDE
function displayTrailers1(){
    //Stores the section as var x
    var x = document.getElementById("ME1");
    //If the object is hidden show it
    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{//Or else hide it
        x.style.display = "none";
    }
}
function displayTrailers2(){
    
    var x = document.getElementById("ME2");

    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}
function displayTrailers3(){
    
    var x = document.getElementById("ME3");

    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}
//HIDE AND SHOW GIFS ON VOICE ACTOR PAGE
function gifs(){
    
    //Variables for each of the sections containing gifs
    var gifs = document.getElementById("gifs");
    var gifs2 = document.getElementById("gifs2");
    //If the object is hidden on click then show it
    if(gifs.style.display == "none"){
        gifs.style.display = "block";
    }
    else{//If it is already show then hide it on click
        gifs.style.display = "none";
    }
    if(gifs2.style.display == "none"){
        gifs2.style.display = "block";
    }
    else{
        gifs2.style.display = "none";
    }

}
//SLIDESHOW GOT FROM - https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}